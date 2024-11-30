
var loggedInEmail = localStorage.getItem("loggedInUser");
var Data = JSON.parse(localStorage.getItem("dataContainer"));

if (Data && loggedInEmail) {
    var userName = "SWEAT"; 
    for (var i = 0; i < Data.length; i++) {
        if (Data[i].Email === loggedInEmail) {
            userName = Data[i].Name;
            break;
        }
    }
   
    document.getElementById("hello").innerText = "Welcome, " + userName + "!";
} else {
   
    window.location.href = "index.html";
}

 
document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});
