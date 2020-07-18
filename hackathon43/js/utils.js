//returns true if the value is true and vice versa
function isPassed(validateResult) {
    let isFail = validateResult.includes(false);

    if(isFail == true) {
        return false;
    }

    return true;
    // return !isFail;
}

//check email format
// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

function validateEmail(elementValue){      
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
} 

//check phone number format
function validatePhoneNumber(telephoneNumber){
    const phoneNum = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return phoneNum.test(telephoneNumber);
}

//raw data from firebase
function refineData (rawData) {
    let data = rawData.data();
    data.id = rawData.id;
    return data;
}

//validate password form
function validatePassword (password){
    const newPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return newPassword.test(password);
}