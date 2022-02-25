document.querySelector("form").addEventListener("submit", fn3);
var s3 = JSON.parse(localStorage.getItem("DB3")) || [];

function fn3 (event){
    event.preventDefault();
    var ctryName = document.querySelector("#countryName").value;
    var cname = document.querySelector("#cityName").value;
    
    var obj3 = {
        Country : ctryName,
        City : cname,
    };
    s3.push(obj3);
    localStorage.setItem("DB3", JSON.stringify(s3));
    
    window.location.href = "ls4.html";
}