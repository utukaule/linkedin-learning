document.querySelector("form").addEventListener("submit", fn1);

// whenever refreshing page it'll be empty so user stack should be taken from local storage
// var userStack = [];
var s1 = JSON.parse(localStorage.getItem("DB1")) || [];
var profile = [];
function fn1 (event){
    event.preventDefault();
     var email = document.querySelector("#email").value;
     var pass = document.querySelector("#pass").value;
    var obj1 = {
        emailAdd : email,
        passwd : pass,
    };
    s1.push(obj1);
    profile.push(obj1);
    localStorage.setItem("DB1", JSON.stringify(s1));
    localStorage.setItem("usrProfileDB", JSON.stringify(profile));
    

    // After storing into localStorage user can go to any location using
    window.location.href = "ls2.html";

    


}