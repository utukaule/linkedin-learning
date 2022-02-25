var homeusr = JSON.parse(localStorage.getItem("signInDataBase"));
var userMail = homeusr[0].emailAd;
// document.querySelector("#usrName").append(userMail);
var DB = JSON.parse(localStorage.getItem("DB4"));
console.log(DB);
for(var i=0;i<DB.length;i++){
    if(userMail==DB[i].Mail){
        document.querySelector("#usrName").append(DB[i].FirstName);
        console.log(DB[i].FirstName);
        break;
    }
}