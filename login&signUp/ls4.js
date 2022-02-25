document.querySelector("form").addEventListener("submit", fn4);
console.log("entered ls4")
var s4 = JSON.parse(localStorage.getItem("DB4")) || [];
function fn4 (event){
    event.preventDefault();
    var var1 = document.querySelector("#jobtitle").value;
    var obj4 = {
        jobTitle : var1,
    }
    s4.push(obj4);
    localStorage.setItem("DB4", JSON.stringify(s4));
    window.location.href = "ls5.html";
}
