window.onload = function() {
    view.showScreen('homePage');
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        if(user != null && user.emailVerified) {
            if(!user.emailVerified){
                view.showScreen('signIn');
            }else{
                view.showScreen("efunHouse");
            }
            // if(view.showScreen("homePage")){
            //     let removeFreeTrialButton = document.getElementById('sign-up-link');
            //     removeFreeTrialButton.innerHTML = `
            //     <li class="nav-item"><a class="navbar-avataruser" href="#"><img src="./img/phuong.jpg" alt="avatar" class="rounded-circle" height="30"><b class="display-name"></b></a></li>
            //     `;
            //     removeFreeTrialButton.onclick = function () {
            //         view.showScreen('userInformation');
            //     }
            // }
        }else if(user == null){
            view.showScreen("homePage");
        }
    });
}