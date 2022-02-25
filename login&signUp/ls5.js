// var DB = JSON.parse(localStorage.getItem("DB1"));
document.querySelector("form").addEventListener("submit", fn5);
var s5 =  []; //JSON.parse(localStorage.getItem("DB5")) ||
console.log("entered ls5");
function fn5 (event){
    event.preventDefault();
    var code = document.querySelector("#code1").value;
    
    
    if(code=="12345"){
        var obj5 = {
            verificationCode : code,
        };
        s5.push(obj5);
        localStorage.setItem("DB5", JSON.stringify(s5));
        window.location.href = "ls6.html";
    }
    else {
        alert("Entered wrong code");
    }
}