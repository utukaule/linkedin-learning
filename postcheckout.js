var uN  = JSON.parse(localStorage.getItem("usrNames"));
var Fname = uN[0].firstName;
var Lname = uN[0].lastName;

document.querySelector("#FN").value = Fname;
document.querySelector("#LN").value =  Lname;

function monthly (){
    document.querySelector("#month").style.color = "green";
    ocument.querySelector("#annually").style.color = "black";
}
function annual(){
    document.querySelector("#annually").style.color = "green";
    document.querySelector("#month").style.color = "black";
}