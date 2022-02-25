var uN  = JSON.parse(localStorage.getItem("usrNames"));
var Fname = uN[0].firstName;
var Lname = uN[0].lastName;

document.querySelector("#FN").value = Fname;
document.querySelector("#LN").value =  Lname;

document.