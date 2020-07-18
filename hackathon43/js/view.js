//Display and handle to console
let view = {};

view.showScreen = async function (screenName){
    let content = document.getElementById('home-page');

    switch (screenName) {
        case 'homePage':
            content.innerHTML = components.homePage; //Display EFUN home page

            let signUpLink = document.getElementById('sign-up-link'); // Take onclick event to sign up site
            signUpLink.onclick = function(){
                view.showScreen('signUp');
            }
            
            firebase.auth().onAuthStateChanged(function(user) {
                if(user != null) {
                    let removeFreeTrialButton = document.getElementById('sign-up-link');
                    removeFreeTrialButton.innerHTML = `
                    <li class="nav-item"><a class="navbar-avataruser" href="#"><img src="./img/phuong.jpg" alt="avatar" class="rounded-circle" height="30"><b class="display-name"></b></a></li>
                    `;
                    removeFreeTrialButton.onclick = function () {
                    view.showScreen('userInformation');
                    }
                    let linkToCourse = document.getElementById('efun-house-link');
                    linkToCourse.onclick = function (){
                        view.showScreen('efunHouse');
                    }
                }
            });
            break;

        case 'signIn':
            content.innerHTML = components.signIn;
            
            let homePageLink = document.getElementById('home--page--link'); // Take onclick event to home page site
            homePageLink.onclick = function(){
                view.showScreen('homePage');
            }

            let signUp = document.getElementById('sign--up'); //Take onclick event to sign up site
            signUp.onclick = function(){
                view.showScreen('signUp');
            }

            let forgotPassword = document.getElementById('forgot-password');
            forgotPassword.onclick = function(){
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
             signInLink.onclick = function(){
               view.showScreen('signIn');
            }

            let homePage = document.getElementById('home-page-container'); //Take onclick event to home page site
            homePage.onclick = function(){
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
        
        case 'efunHouse':
            content.innerHTML = components.efunHouse;

            //link to user information when click on avatar or username
            let userInfor = document.getElementById('user-information');
            userInfor.onclick = function (){
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

            break;
        
        case 'userInformation':
            content.innerHTML = components.userInformation;

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

            let clickOnEfunHouse = document.getElementsByClassName('back-to-efun')[0];
            clickOnEfunHouse.onclick = function(){
                view.showScreen('efunHouse');
            }

            document.getElementById('name-field').value = firebase.auth().currentUser.displayName;
            document.getElementById('email-field').value = firebase.auth().currentUser.email;
            document.getElementById('phone-number').value = firebase.auth().currentUser.phoneNumber;
            document.getElementById('birthday').value = firebase.auth().currentUser.birthday;
            document.getElementById('city').value = firebase.auth().currentUser.city;

            // validate user input in profile form
            let profileForm = document.getElementById('profile-form');
            profileForm.onsubmit = function (event) {
                event.preventDefault();
                
                let nameField = document.getElementById('name-field').value;
                let emailField = document.getElementById('email-field').value;
                let phoneNumber = document.getElementById('phone-number').value;
                let birthday = document.getElementById('birthday').value;
                let city = document.getElementById('city').value;

                // get user data in profile form
                // document.getElementById('name-field').value = firebase.auth().currentUser.displayName;
                // document.getElementById('email-field').value = firebase.auth().currentUser.email;
                // document.getElementById('phone-number').value = firebase.auth().currentUser.phoneNumber;
                // document.getElementById('birthday').value = firebase.auth().currentUser.birthday;
                // document.getElementById('city').value = firebase.auth().currentUser.city;
                
                let validateField = [
                    view.validate(nameField != "", "name-error", "Input your name"),
                    view.validate(emailField != "" && validateEmail(emailField), "email-error", "Invalid email"),
                    view.validate(phoneNumber != "" && validatePhoneNumber(phoneNumber), "phone-number-error", "Invalid phone number"),
                    view.validate(birthday != "", "birthday-error", "Input your birthday"),
                    view.validate(city != "", "city-error", "Input your city")
                ]
                
                if (isPassed(validateField)) {
                    //send data to controller
                    controller.updateProfileForm(nameField, emailField, phoneNumber, birthday, city);
                }
            }
            
            let changePasswordForm = document.getElementById('change-password-form');
            changePasswordForm.onsubmit = function (event) {
                event.preventDefault();
                let newPassword = document.getElementById('input-new-password').value;
                let validatePasswordInputted = view.validate(newPassword != "" && validatePassword(newPassword), "password-error", "Invalid password.");
                if(validatePasswordInputted){
                    controller.changePassword(newPassword);
                }
            }

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

            // let practicalExercise = document.getElementsByClassName('study-page')[0];
            // practicalExercise.onclick = function () {
            //     view.showScreen('studyPage');
            // }

            //sign out when user click on sign out button
            let clickOnLogOutButton = document.getElementsByClassName('btn-logout')[0];
            clickOnLogOutButton.onclick = function () {
                controller.signOut();
            }
            
            //display user name
            let displayUserName = document.getElementsByClassName("display-name")[0];
            displayUserName.innerHTML = firebase.auth().currentUser.displayName;

            break;
        case 'forgotPassword':
            content.innerHTML = components.forgotPassword;
            break;
            
    }       
}

view.validate = function (condition, errorTag, message) {
    if (!condition) {
        view.setText(errorTag, message);
        return false;
    } else {
        view.setText(errorTag, "");
        return true;
    }
}

view.setText = function (tagId, text) {
    document.getElementById(tagId).innerHTML = text;
}

view.setActive = function (tagId, active) {
    document.getElementById(tagId).disabled = !active;
}
