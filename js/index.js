var emailUser=document.getElementById('email')
var PassUser=document.getElementById('password')
var warn = document.getElementById("warn");

var loginPassword = document.getElementById("loginPassword");
var loginError = document.getElementById("loginError");


Data = JSON.parse(localStorage.getItem("dataContainer")); 

document.getElementById('login').addEventListener("click", function() {
    
    if (validation('email',/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)&&validation('password',/^[A-Za-z\d]{8,}$/)) {
        
        var emailValue = emailUser.value;
        var passwordValue = PassUser.value;
    
        var userFound = false; 
        var passwordCorrect = false;
    
        for (var i = 0; i < Data.length; i++) {
            if (Data[i].Email === emailValue) {
                userFound = true; 
    
                if (Data[i].Pass === passwordValue) {
                    passwordCorrect = true; 
                }
        
            }
        }
        localStorage.setItem("loggedInUser", emailValue);
        clear()
    
    }

   
    if (!userFound) {
    
        loginError.textContent = "This email is not registered. Please sign up first.";
    } else if (!passwordCorrect) {

        loginError.textContent = "Incorrect password. Please try again.";
    } else {
        
        window.location.href = "home.html"; 
    }
});



function validation(id, regex) {
    var myElement = document.getElementById(id);
    var testString = myElement.value;
    if (regex.test(testString)) {
        myElement.classList.add("is-valid");
        myElement.classList.remove("is-invalid");
        return true;
    } else {
        myElement.classList.add("is-invalid");
        myElement.classList.remove("is-valid");
        return false;
    }
}
function clear() {

    emailUser.value = "";
    PassUser.value = "";

    emailUser.classList.remove("is-valid");
    PassUser.classList.remove("is-valid");
    

}