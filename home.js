var homeusr = JSON.parse(localStorage.getItem("signInDataBase"));
var userMail = homeusr[0].emailAd;
var stack =[]; // JSON.parse(localStorage.getItem("usrNames")) || 
// document.querySelector("#usrName").append(userMail);
var DB = JSON.parse(localStorage.getItem("DB4"));
// console.log(DB);
for(var i=0;i<DB.length;i++){
    if(userMail==DB[i].Mail){
        document.querySelector("#usrName").append(DB[i].FirstName);
        // console.log(DB[i].FirstName);
        var fn = DB[i].FirstName;
        var ln = DB[i].LastName;
        var obj = {
            firstName : fn,
            lastName : ln,
        };
        stack.push(obj);
        localStorage.setItem("usrNames",JSON.stringify(stack));
        break;
    }
}

function signOut (){
    alert("you are signed out successfully.")
    document.querySelector("#usrName").textContent = "";
}