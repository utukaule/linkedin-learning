
    var login = JSON.parse(localStorage.getItem("newlogin"));

console.log(login)
document.querySelector("#getdata").append(login);

//var logarr = JSON.parse( localStorage.getItem("logindata") ) || [];
var password = JSON.parse(localStorage.getItem("password"));
// var email =  JSON.parse(localStorage.getItem("email"));
// var logdata = {
//     email:email[0].email,
//     password:password,

// }
// logarr.push(logdata);
// localStorage.setItem("logindata", JSON.stringify(logarr));
document.querySelector('form').addEventListener('submit',creatfun);
function creatfun(event){
    event.preventDefault();
    var pass = document.querySelector("#inputpwd").value;
   
    
    for(var i=0;i<password.length;i++)
    {
        if(password[i].passwor===pass)
        {
            window.location.href='index.html';
            break;
        }
        else
        {
            document.querySelector("#warn").style.display="block"
           
           break;
        }
    }
}


function showpass(){
        var input = document.querySelector("#inputpwd");
        var show = document.querySelector("#showpwd");
        var hide = document.querySelector("#hidepwd");

        if(input.type === 'password'){
            input.type = "text";
            show.style.display = "none";
            hide.style.display = "inline";

        }
        else{
            
            input.type = "password";
            show.style.display = "inline";
            hide.style.display = "none";
        }

    }