

var Name = document.getElementById("username");
var Email = document.getElementById("email");
var Pass = document.getElementById("password");

var warn = document.getElementById("warn");
var emailError = document.getElementById("emailError");

var Data = [];

if (localStorage.getItem("dataContainer") !== null) {
    Data = JSON.parse(localStorage.getItem("dataContainer")); 
}

document.getElementById('btnup').addEventListener('click', function() {
    

    var NameValue = Name.value; 
    var EmailValue = Email.value;
    var PassValue = Pass.value;

  

    if (EmailValue === "" || PassValue === "" || NameValue === "") {
        warn.classList.remove("d-none");
        return;
    }


    var validName = validation("username", /^[a-zA-Z]{3,15}$/);
    var validEmail = validation("email", /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    var validPass = validation("password", /^[A-Za-z\d]{8,}$/);


    var isEmailUsed = false;
    for (var i = 0; i < Data.length; i++) {
        if (Data[i].Email === EmailValue) {
            isEmailUsed = true;
        
        }
    }


    if (isEmailUsed) {
        emailError.textContent = "This email is already registered. Please use another email.";
        Email.classList.add("is-invalid");
        Email.classList.remove("is-valid");
        
        validEmail = false; 
    }

    
    if (validName && validEmail && validPass) {
        var data = {
            Name: NameValue,
            Email: EmailValue,
            Pass: PassValue,
        };

        Data.push(data);
        localStorage.setItem("dataContainer", JSON.stringify(Data));
        clear();
        console.log(Data);
        localStorage.setItem("loggedInUser", Email);
        window.location.href = "index.html";
    }
});

function clear() {
    Name.value = "";
    Email.value = "";
    Pass.value = "";

    Email.classList.remove("is-valid");
    Pass.classList.remove("is-valid");
    Name.classList.remove("is-valid");

    warn.classList.add("d-none");
}

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
