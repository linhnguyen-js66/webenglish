let controller = {};

controller.signUp = async function (name, email, password) {
    //clear error notification and sign up successful case
    view.setText("sign-up-error", "");
    view.setText("sign-up-success", "");
    view.setActive("sign-up-btn", false);
    try {
        //create account => log in automatically => display EFUN home page
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        //edit your display name
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        });
        //verify account
        await firebase.auth().currentUser.sendEmailVerification();
        //alert sign in successfully
        view.setText("sign-up-success", "An email verification has been sent");
    } catch (error) {
        view.setText("sign-up-error", error.message);
    }

    view.setActive("sign-up-btn", true);
    // ok xong chỗ này
    let uid = await firebase.auth().currentUser.uid;
    let save = await firebase.firestore().collection('userInformations').doc(uid).set({
        name: name,
        email: email,
        phoneNumber: '',
        dateOfBirth: '',
        city: ''
    });
}

controller.signIn = async function (email, password) {
    // clear error message
    view.setText("sign-in-error", "");
    view.setActive("login-btn", false);

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        //link to home page when sign in success
    } catch (error) {
        //return error message when user input wrong information
        view.setText("sign-in-error", error.message);
        view.setActive("login-btn", true);
    }
}

controller.signOut = async function (currentUser) {
    //sign out
    await firebase.auth().signOut();
}
controller.updateProfileForm = async function (name, email, phoneNumber, birthday, city) {
    view.setText("submit-success", "");
    view.setText("submit-error", "");
    view.setActive("submit-btn", false);

    try {
        //update profile
        await firebase.auth().currentUser.updateProfile({
            displayName: name,
            email: email,
            phoneNumber: phoneNumber,
            birthday: birthday,
            city: city
        });

        view.setText("submit-success", "Your profile has been updated.");
    } catch (error) {
        view.setText("submit-error", error.message);
        view.setActive("submit-btn", true);
    }
}

controller.changePassword = async function (password) {
    let user = firebase.auth().currentUser;
    let newPassword = document.getElementById('input-new-password').value;
    await user.updatePassword(newPassword).then(function() {
        // Update successful.
        view.setText("submit-password-success", "Your password has been changed.");
        view.setActive("submit-password-btn", false);

    }).catch(function (error) {
        // An error happened.
        view.setText("submit-password-error", error.message);
        view.setActive("submit-password-btn", true);
    });
}

controller.forgotPassword = async function (email) {
    let auth = firebase.auth();
    let emailAddress = document.getElementById('register-email').value;

    await auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
        view.setText("reset-password-success", "Your password has been changed. Check your mail.");
        view.setActive("reset-password-btn", false);
    }).catch(function(error) {
        // An error happened.
        view.setText("reset-password-error", error.message);
        view.setActive("reset-password-btn", true);
    });
}

controller.loadConversations = async function () {
    let currentEmail = firebase.auth().currentUser.email;
    // load dữ liệu từ firebase
    let result = await firebase
        .firestore()
        .collection('conversations')
        .where("users", "array-contains", currentEmail)
        .get();
    let conversations = [];
    for (let doc of result.docs) {
        conversations.push(refineData(doc));
    }
    // cache dữ liệu vào model
    model.saveConversations(conversations);

    // gán 1 nào đó conversation cho currentConversation
    if (conversations.length > 0) {
        // gán currentConversation là phần tử conversation đầu tiên
        model.currentConversation = model.conversations[0];
    }
}

controller.addConversation = async function (title, friendEmail) {
    try {
        // kiểm tra friendEmail
        // nhập vào chính email người dùng hiện tại
        let currentEmail = firebase.auth().currentUser.email;
        if (friendEmail == currentEmail) {
            throw new Error("Invalid email");
        }
        // nhập vào email không tồn tại trong hệ thống
        let signInMethods = await firebase.auth().fetchSignInMethodsForEmail(friendEmail);
        if (signInMethods.length == 0) {
            throw new Error("Your friend email doesn't exist");
        }

        // thêm vào collection conversations 1 conversation mới
        let newConversation = {
            title: title,
            messages: [],
            users: [
                currentEmail,
                friendEmail
            ]
        };

        await firebase.firestore().collection("conversations").add(newConversation);
    } catch (error) {
        view.setText("friend-email-error", error.message);
    }
}

controller.sendMessage = async function (messageContent) {
    let currentEmail = firebase.auth().currentUser.email;
    let message = {
        content: messageContent,
        owner: currentEmail
    };

    // cập nhật message vào trong currentConversation trên firestore
    await firebase
        .firestore()
        .collection("conversations")
        .doc(model.currentConversation.id)
        .update({
            messages: firebase.firestore.FieldValue.arrayUnion(message)
        });


}

controller.listenRealtimeUpdate = function () {
    let isFirstRun = true;
    firebase.firestore().collection("conversations").onSnapshot(function (snapshot) {
        if (isFirstRun) {
            isFirstRun = false;
            return;
        }

        snapshot.docChanges().forEach(function (change) {
            if (change.type == "added") {
                // refine data
                let conversation = refineData(change.doc);

                // cập nhật vào trong model
                model.updateConversation(conversation);

                // hiển thị ra màn hình
                view.showConversations();
            } else if (change.type == "modified") {
                // refine data
                let conversation = refineData(change.doc);

                // cập nhật vào trong model
                model.updateConversation(conversation);

                // hiển thị ra màn hình
                view.showCurrentConversation();
            }
        });

    });
}
controller.game = function () {
    const question = document.getElementById('question');
    const choices = Array.from(document.getElementsByClassName('choice-text'));
    const progressText = document.getElementById('progressText');
    const scoreText = document.getElementById('score');
    const progressBarFull = document.getElementById('progressBarFull');
    const loader = document.getElementById('loader');
    const game = document.getElementById('game');
    let currentQuestion = {};
    let acceptingAnswers = false;
    let score = 0;
    let questionCounter = 0;
    let availableQuesions = [];

    let questions = [];

    fetch(
        'https://opentdb.com/api.php?amount=15&category=11&difficulty=easy&type=multiple'
    )
        .then((res) => {
            return res.json();
        })
        .then((loadedQuestions) => {
            questions = loadedQuestions.results.map((loadedQuestion) => {
                const formattedQuestion = {
                    question: loadedQuestion.question,
                };

                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1,
                    0,
                    loadedQuestion.correct_answer
                );

                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });

                return formattedQuestion;
            });

            startGame();
        })
        .catch((error) => {
            console.log(error);
        });

    //CONSTANTS
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 15;

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuesions = [...questions];
        getNewQuestion();
        game.classList.remove('hidden');
        loader.classList.add('hidden');
    };

    getNewQuestion = () => {
        if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            //go to the end page
            clearInterval(count)
            return alert('You got' + ' ' + score + ' ' + 'point');

        }
        questionCounter++;
        progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        //Update the progress bar
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

        const questionIndex = Math.floor(Math.random() * availableQuesions.length);
        currentQuestion = availableQuesions[questionIndex];
        question.innerHTML = currentQuestion.question;

        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerHTML = currentQuestion['choice' + number];
        });

        availableQuesions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };

    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];

            const classToApply =
                selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if (classToApply === 'correct') {
                incrementScore(CORRECT_BONUS);
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });
    });

    incrementScore = (num) => {
        score += num;
        scoreText.innerText = score;
    };
    let time = document.getElementById('time')
    time.innerHTML = "03:00"
    var count;
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        count = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(count)
            }
        }, 1000);
    }

    // window.onload = function () {
    var fiveMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    // };
}
controller.game2 = function () {
    const question = document.getElementById('question');
    const choices = Array.from(document.getElementsByClassName('choice-text'));
    const progressText = document.getElementById('progressText');
    const scoreText = document.getElementById('score');
    const progressBarFull = document.getElementById('progressBarFull');
    const loader = document.getElementById('loader');
    const game = document.getElementById('game');
    let currentQuestion = {};
    let acceptingAnswers = false;
    let score = 0;
    let questionCounter = 0;
    let availableQuesions = [];

    let questions = [];

    fetch(
        'https://opentdb.com/api.php?amount=15&category=23&difficulty=easy&type=multiple'
    )
        .then((res) => {
            return res.json();
        })
        .then((loadedQuestions) => {
            questions = loadedQuestions.results.map((loadedQuestion) => {
                const formattedQuestion = {
                    question: loadedQuestion.question,
                };

                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1,
                    0,
                    loadedQuestion.correct_answer
                );

                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });

                return formattedQuestion;
            });

            startGame();
        })
        .catch((error) => {
            console.log(error);
        });

    //CONSTANTS
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 15;

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuesions = [...questions];
        getNewQuestion();
        game.classList.remove('hidden');
        loader.classList.add('hidden');
    };

    getNewQuestion = () => {
        if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            //go to the end page
            clearInterval(count)
            return alert('You got' + ' ' + score + ' ' + 'point');

        }
        questionCounter++;
        progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        //Update the progress bar
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

        const questionIndex = Math.floor(Math.random() * availableQuesions.length);
        currentQuestion = availableQuesions[questionIndex];
        question.innerHTML = currentQuestion.question;

        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerHTML = currentQuestion['choice' + number];
        });

        availableQuesions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };

    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];

            const classToApply =
                selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if (classToApply === 'correct') {
                incrementScore(CORRECT_BONUS);
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });
    });

    incrementScore = (num) => {
        score += num;
        scoreText.innerText = score;
    };
    let time = document.getElementById('time')
    time.innerHTML = "03:00"
    var count;
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        count = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(count)
            }
        }, 1000);
    }

    // window.onload = function () {
    var fiveMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    // };
}

controller.game3 = function () {
    const question = document.getElementById('question');
    const choices = Array.from(document.getElementsByClassName('choice-text'));
    const progressText = document.getElementById('progressText');
    const scoreText = document.getElementById('score');
    const progressBarFull = document.getElementById('progressBarFull');
    const loader = document.getElementById('loader');
    const game = document.getElementById('game');
    let currentQuestion = {};
    let acceptingAnswers = false;
    let score = 0;
    let questionCounter = 0;
    let availableQuesions = [];

    let questions = [];

    fetch(
        'https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=multiple'
    )
        .then((res) => {
            return res.json();
        })
        .then((loadedQuestions) => {
            questions = loadedQuestions.results.map((loadedQuestion) => {
                const formattedQuestion = {
                    question: loadedQuestion.question,
                };

                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1,
                    0,
                    loadedQuestion.correct_answer
                );

                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });

                return formattedQuestion;
            });

            startGame();
        })
        .catch((error) => {
            console.log(error);
        });

    //CONSTANTS
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 15;

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuesions = [...questions];
        getNewQuestion();
        game.classList.remove('hidden');
        loader.classList.add('hidden');
    };

    getNewQuestion = () => {
        if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            //go to the end page
            clearInterval(count)
            return alert('You got' + ' ' + score + ' ' + 'point');

        }
        questionCounter++;
        progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
        //Update the progress bar
        progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

        const questionIndex = Math.floor(Math.random() * availableQuesions.length);
        currentQuestion = availableQuesions[questionIndex];
        question.innerHTML = currentQuestion.question;

        choices.forEach((choice) => {
            const number = choice.dataset['number'];
            choice.innerHTML = currentQuestion['choice' + number];
        });

        availableQuesions.splice(questionIndex, 1);
        acceptingAnswers = true;
    };

    choices.forEach((choice) => {
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];

            const classToApply =
                selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if (classToApply === 'correct') {
                incrementScore(CORRECT_BONUS);
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        });
    });

    incrementScore = (num) => {
        score += num;
        scoreText.innerText = score;
    };
    let time = document.getElementById('time')
    time.innerHTML = "03:00"
    var count;
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        count = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(count)
            }
        }, 1000);
    }

    // window.onload = function () {
    var fiveMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    // };
}
controller.saveScore = async function () {
    const mostRecentScore = Number(localStorage.getItem('mostRecentScore'));
    let currenUserName = firebase.auth().currentUser.email;

    score = {
        score: mostRecentScore,
        user: currenUserName
    }
    let save = await firebase.firestore().collection('storageScore').add(score)
}
controller.getScore = async function () {
  
    let getdata = await firebase.firestore().collection('storageScore').get();
    let userName = firebase.auth().currentUser.email
    let sumScore = [];
    let countPoint = document.getElementById('count-point');
    let sumPoint = document.getElementById('sum-score')
    for (let data of getdata.docs) {
        let get = Number(data.data().score)
        if (data.data().user == userName) {
            // console.log(get);
            await sumScore.push(get);
            console.log(sumScore)
            let sum = sumScore.reduce(function (a, b) {
                return a + b;
            }, 0);
            // console.log(sum);
            countPoint.innerHTML = sum;
            sumPoint.innerHTML = sum;
        }
    }

}

// load information
controller.loadInf = async function(){
    // cú pháp đúng chưa ý nhỉ@@ hay phai cho vong lap vao c nhi
    let idUser = await firebase.auth().currentUser.uid
    let docInf = await firebase.firestore().collection('userInformations').doc(idUser).get();
    let email = docInf.data().email;
    let phoneNumber = docInf.data().phoneNumber;
    let name = docInf.data().name;
    // tiếp theo các trường khác tí làm nhé
    console.log(email);
    // 
    document.getElementById('email-field').value = email;
    document.getElementById('phone-number').value = phoneNumber;
    document.getElementById('name-field').value = name;
    document.getElementById('birthday').value = docInf.data().dateOfBirth;
    document.getElementById('city').value = docInf.data().city;
    // hiển thị ra thì viết ở đây
}
controller.saveInformation = function (){
    let profileForm = document.getElementById('profile-form');
  
    profileForm.onsubmit = async function(event){
        event.preventDefault();
        let phoneNumber =  document.getElementById('phone-number').value;
        let birthday =   document.getElementById('birthday').value;
        let city = document.getElementById('city').value;
        let userEmail = await firebase.auth().currentUser.email;
        let userName = await firebase.auth().currentUser.displayName;
        let idUser = await firebase.auth().currentUser.uid
        var docRef = await  firebase.firestore().collection("userInformations").doc(idUser);
        // update thông tin
        // document.getElementById('email-field').value= userEmail;
        // console.log('abc')
        // if(idUser.exist){
            
        // }
        // nói chung là dc r ấy=)) ok chij ti em len bai marketing e de chi o dau de luon :)) mentor nhiet tinh
        // hihi
        
        await firebase.firestore().collection('userInformations').doc(idUser).update({
            phoneNumber:phoneNumber,
            city : city,
            dateOfBirth: birthday
        })
    }
}
// chỗ html viết ở đâu thế=)) chỗ value ấy ạ em thấy lỗi e bỏ đi rồi :))
// html của đoạn này ý
