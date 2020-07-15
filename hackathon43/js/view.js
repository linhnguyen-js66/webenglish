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
            let signOut = document.getElementById('btn-logout');
            signOut.onclick = function () {
                controller.signOut();
            }

            //display user name
            let userName = document.getElementById("display-name");
            
            userName.innerHTML = firebase.auth().currentUser.displayName;
            
            break;
        case 'userInformation':
            content.innerHTML = components.userInformation;
            //sign out when user click on sign out button
            let logOut = document.getElementById('btn-logout');
            logOut.onclick = function () {
                controller.signOut();
            }

            //display user name in user page
            let nameOnNav = document.getElementById('display-user-name');
            nameOnNav.innerHTML = firebase.auth().currentUser.displayName;

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
