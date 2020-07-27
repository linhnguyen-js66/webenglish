//Display and handle to console
let view = {};

view.showScreen = async function (screenName) {
    let content = document.getElementById('home-page');

    switch (screenName) {
        case 'homePage':
            content.innerHTML = components.homePage; //Display EFUN home page

            let signUpLink = document.getElementById('sign-up-link'); // Take onclick event to sign up site
            signUpLink.onclick = function () {
                view.showScreen('signUp');
            }

            break;

        case 'signIn':
            content.innerHTML = components.signIn;

            let homePageLink = document.getElementById('home--page--link'); // Take onclick event to home page site
            homePageLink.onclick = function () {
                view.showScreen('homePage');
            }

            let signUp = document.getElementById('sign--up'); //Take onclick event to sign up site
            signUp.onclick = function () {
                view.showScreen('signUp');
            }
            let forgotPassword = document.getElementById('forgot-password');
            forgotPassword.onclick = function () {
                view.showScreen('forgotPassword');
            }
            //Sign In
            let formSignIn = document.getElementById('form-sign-in');
            formSignIn.onsubmit = function (event) {
                event.preventDefault();
                //get data from form sign in
                let email = formSignIn.email.value;
                let password = formSignIn.password.value;

                //validate email and password
                let validateResult = [
                    view.validate(email != "", "email-error", "Input your email"),
                    view.validate(password != "", "password-error", "Input your password")
                ];

                if (isPassed(validateResult)) {
                    //send data to controller when email and password is correct
                    controller.signIn(email, password);
                }

            }
            break;

        case 'signUp':
            content.innerHTML = components.signUp;

            let signInLink = document.getElementById('sign-in-link'); //Take onclick event to sign in site
            signInLink.onclick = function () {
                view.showScreen('signIn');
            }

            let homePage = document.getElementById('home-page-container'); //Take onclick event to home page site
            homePage.onclick = function () {
                view.showScreen('homePage');
            }

            // form sign up
            let formSignUp = document.getElementById('form-sign-up');
            formSignUp.onsubmit = function (event) {
                event.preventDefault();

                //get data from form sign up
                let name = formSignUp.name.value.trim();
                let email = formSignUp.email.value.trim();
                let password = formSignUp.password.value.trim();
                let passwordConfirmation = formSignUp.passwordConfirmation.value.trim();

                //validate data
                let validateResult = [
                    view.validate(name != "", "name-error", "Input your name"),
                    view.validate(email != "" && validateEmail(email), "email-error", "Invalid email"),
                    view.validate(password != "", "password-error", "Input password"),
                    view.validate(passwordConfirmation != "" && password == passwordConfirmation, "password-confirmation-error", "Password confirmation is not match")
                ];

                if (isPassed(validateResult)) {
                    //send data to controller
                    controller.signUp(name, email, password);
                    
                }

            }

            break;
        case 'forgotPassword':
            content.innerHTML = components.forgotPassword;
            break;
        case 'efunHouse':
            content.innerHTML = components.efunHouse;
            let BlogPage = document.getElementsByClassName('blog-page')[0];
            BlogPage.onclick = function () {
                view.showScreen('blogs')
            }
            //link to user information when click on avatar or username
            let userInfor = document.getElementById('user-information');
            userInfor.onclick = function () {
                view.showScreen('userInformation');
            }

            //sign out when user click on sign out button
            let signOut = document.getElementsByClassName('btn-logout')[0];
            signOut.onclick = function () {
                controller.signOut();
            }

            //display user name
            let userName = document.getElementsByClassName("display-name")[0];
            userName.innerHTML = firebase.auth().currentUser.displayName;

            //back to home page
            let backToHomePage = document.getElementsByClassName('back-to-home-page')[0];
            backToHomePage.onclick = function () {
                view.showScreen('homePage');
            }

            //link to study page
            let studyPage = document.getElementsByClassName('study-page')[0];
            studyPage.onclick = function () {
                view.showScreen('studyPage');
            }
            view.chat();
            view.chart();
            controller.getScore();
            break;
        case 'userInformation':
            content.innerHTML = components.userInformation;
            controller.loadInf();
            controller.saveInformation();
            let clickonBlogPage = document.getElementsByClassName('blog-page')[0];
            clickonBlogPage.onclick = function () {
                view.showScreen('blogs')
            }
            //back to home page
            let clickToHomePage = document.getElementsByClassName('back-to-home-page')[0];
            clickToHomePage.onclick = function () {
                view.showScreen('homePage');
            }

            //sign out when user click on sign out button
            let logOutButton = document.getElementsByClassName('btn-logout')[0];
            logOutButton.onclick = function () {
                controller.signOut();
            }

            //display user name
            let displayUser = document.getElementsByClassName("display-name")[0];
            displayUser.innerHTML = firebase.auth().currentUser.displayName;

            //link to study page
            let study = document.getElementsByClassName('study-page')[0];
            study.onclick = function () {
                view.showScreen('studyPage');
            }

            //Return to efun page
            let returnToEfun = document.getElementsByClassName('back-to-efun')[0];
            returnToEfun.onclick = function () {
                view.showScreen('efunHouse');
            }
        
            let changePasswordForm = document.getElementById('change-password-form');
            changePasswordForm.onsubmit = function (event) {
                event.preventDefault();
                let newPassword = document.getElementById('input-new-password').value;
                let validatePasswordInputted = view.validate(newPassword != "" && validatePassword(newPassword), "password-error", "Invalid password.");
                if (validatePasswordInputted) {
                    controller.changePassword(newPassword);
                }
            }
            
            controller.saveInformation();
            controller.getScore();
            view.chat()
            break;
        case 'studyPage':
            content.innerHTML = components.studyPage;
            let clickOnLogo = document.getElementsByClassName('back-to-home-page')[0];
            clickOnLogo.onclick = function () {
                view.showScreen('homePage');
            }

            let clickOnEfunLink = document.getElementsByClassName('back-to-efun')[0];
            clickOnEfunLink.onclick = function () {
                view.showScreen('efunHouse');
            }

            //sign out when user click on sign out button
            let clickOnLogOutButton = document.getElementsByClassName('btn-logout')[0];
            clickOnLogOutButton.onclick = function () {
                controller.signOut();
            }
            let clickBlogPage = document.getElementsByClassName('blog-page')[0];
            clickBlogPage.onclick = function () {
                view.showScreen('blogs')
            }
            //display user name
            let displayUserName = document.getElementsByClassName("display-name")[0];
            displayUserName.innerHTML = firebase.auth().currentUser.displayName;
            //quiz quiz 
            let displayst1 = document.getElementById('click-listen-one')
            displayst1.onclick = function () {
                view.showScreen('stN1')
            }
            let displayst2 = document.getElementById('click-listen-two')
            displayst2.onclick = function () {
                view.showScreen('stN2')
            }
            let displayst3 = document.getElementById('click-listen-three')
            displayst3.onclick = function () {
                view.showScreen('stN3')
            }
            view.chat();
            break;
        case 'blogs':
            content.innerHTML = components.blogs;
            let clickOnLogO = document.getElementsByClassName('back-to-home-page')[0];
            clickOnLogO.onclick = function () {
                view.showScreen('homePage');
            }

            let clickOnBackEfun = document.getElementsByClassName('back-to-efun')[0];
            clickOnBackEfun.onclick = function () {
                view.showScreen('efunHouse');
            }

            //sign out when user click on sign out button
            let clickOnSignOutButton = document.getElementsByClassName('btn-logout')[0];
            clickOnSignOutButton.onclick = function () {
                controller.signOut();
            }
            let study2 = document.getElementsByClassName('study-page')[0];
            study2.onclick = function () {
                view.showScreen('studyPage');
            }
            let clickOnBlogPage = document.getElementsByClassName('blog-page')[0];
            clickOnBlogPage.onclick = function () {
                view.showScreen('blogs')
            }
            //display user name
            //  let displayUser = document.getElementsByClassName("display-name")[0];
            //  displayUser.innerHTML = firebase.auth().currentUser.displayName;   
            let hienthiten = document.getElementsByClassName("display-name")[0];
            hienthiten.innerHTML = firebase.auth().currentUser.displayName
            view.chat();
            break;
        case 'stN1':
            content.innerHTML = components.stN1;
            controller.game();
            await controller.saveScore();
            break;
        case 'stN2':
            content.innerHTML = components.stN2;
            controller.game2();
            await controller.saveScore();
            break;
        case 'stN3':
            content.innerHTML = components.stN3;
            controller.game3();
            await controller.saveScore();
            break;
    }
}
view.chat = async function () {
    let formAddConversation = document.getElementById('form-add-conversation');
    formAddConversation.onsubmit = function (event) {
        event.preventDefault();
        // lấy title, friendEmail từ form-add-conversation
        let title = formAddConversation.title.value.trim();
        let friendEmail = formAddConversation.friendEmail.value.trim();
        // kiểm tra title, friendEmail
        let validateResult = [
            view.validate(title != '', 'title-error', 'Invalid title'),
            view.validate(friendEmail != '' && validateEmail(friendEmail), 'friend-email-error', 'Invalid friend email')
        ];
        // gửi lên controller để xử lý
        if (isPassed(validateResult)) {
            controller.addConversation(title, friendEmail);
        }
    }

    // xử lý form add message (gửi tin nhắn)
    let formAddMessage = document.getElementById('form-add-message');
    formAddMessage.onsubmit = function (event) {
        event.preventDefault();
        let messageContent = formAddMessage.messageContent.value.trim();
        if (messageContent == '') return;

        controller.sendMessage(messageContent);

        formAddMessage.reset();
    }

    // lấy conversation & cache lại trong model
    await controller.loadConversations();

    // hiển thị conversations
    view.showConversations();

    // hiển thị cuộc hội thoại hiện tại
    view.showCurrentConversation();

    // lắng nghe sự thay đổi từ phía database
    controller.listenRealtimeUpdate();

}
view.showConversations = function () {
    // lấy dữ liệu từ model và hiển thị lên giao diện
    let conversationsList = document.getElementById("conversations-list");
    conversationsList.innerHTML = "";
    for (let conversation of model.conversations) {
        let html = `
                <div class="conversation" id="conversation-${conversation.id}">
                    <p class="conversation-title">${conversation.title}</p>
                    <p class="conversation-members">
                        ${conversation.users.length} 
                        ${ (conversation.users.length == 1) ? 'member' : 'members'}

                    </p>
                </div>`;

        conversationsList.innerHTML += html;
    }

    // bắt sự kiện cho từng conversation
    for (let conversation of model.conversations) {
        let conversationDOM = document.getElementById("conversation-" + conversation.id);
        conversationDOM.onclick = function () {
            // gán lại current conversation
            let foundIndex = model.conversations.findIndex(function (item) {
                return item.id == conversation.id;
            });

            model.saveCurrentConversation(model.conversations[foundIndex]);
            // hiển thị lại current conversation
            view.showCurrentConversation();
        }
    }
}

// hiển thị các tin nhắn, thông tin chi tiết của conversation mà người dùng chọn
view.showCurrentConversation = function () {
    if (model.currentConversation == null) return;

    // hiển thị tin nhắn
    // lấy messages-list
    let currentEmail = firebase.auth().currentUser.email;
    let messagesList = document.getElementById("messages-list");
    messagesList.innerHTML = "";
    for (let message of model.currentConversation.messages) {
        let isYourMessage = (message.owner == currentEmail) ? 'your' : '';
        let html = `
        <div class="message ${isYourMessage}">
            <span>${message.content}</span>
        </div>`;
        messagesList.innerHTML += html;
    }
    // hiển thị thông tin chi tiết

    // let title = document.getElementById("current-conversation-title");
    // title.innerHTML = model.currentConversation.title;

    let members = document.getElementById("current-conversation-members");
    members.innerHTML = "";
    for (let member of model.currentConversation.users) {
        members.innerHTML += `<p>${member}</p>`;
    }

    // let createdAt = document.getElementById("current-conversation-created-at");
    // createdAt.innerHTML = model.currentConversation.createdAt;
}

view.validate = function (condition, errorTag, message) {
    if (!condition) {
        // document.getElementById(errorTag).innerHTML = message;
        view.setText(errorTag, message);
        return false;
    } else {
        // document.getElementById(errorTag).innerHTML = "";
        view.setText(errorTag, "");
        return true;
    }
}

view.chart = function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            datasets: [{
                label: 'Thời gian học',
                backgroundColor: 'rgb(0, 102, 255,0.6)',
                borderColor: 'rgb(0, 102, 255)',
                data: [65, 59, 80, 82, 56, 50, 70, 75, 87]
            }]
        },

        // Configuration options go here
        options: {}
    });
}

view.setText = function (tagId, text) {
    document.getElementById(tagId).innerHTML = text;
}

view.setActive = function (tagId, active) {
    document.getElementById(tagId).disabled = !active;
}
//animation
function bigImge(x) {
    x.style.display = "none"
    document.getElementById('move').style.display = 'block'
}

function normalImge(x) {
    x.style.display = "block"
    document.getElementById('move').style.display = 'none'
}
function bigImg(x) {
    x.style.display = "none"
    document.getElementById('move2').style.display = 'block'
}

function normalImg(x) {
    x.style.display = "block"
    document.getElementById('move2').style.display = 'none'
}
function bigImgg(x) {
    x.style.display = "none"
    document.getElementById('move3').style.display = 'block'
}

function normalImgg(x) {
    x.style.display = "block"
    document.getElementById('move3').style.display = 'none'
}
//animtion
