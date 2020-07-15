window.onload = function() {
    view.showScreen('homePage');
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user);
        if(user != null) {
            view.showScreen("efunHouse");
        }else if(user == null){
            view.showScreen("homePage");
        }
    });
}