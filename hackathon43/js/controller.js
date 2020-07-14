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

controller.signOut = async function (currentUser){
    //sign out
    await firebase.auth().signOut();
}