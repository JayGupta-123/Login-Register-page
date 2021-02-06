var login = document.querySelector('#loginform');
var register = document.querySelector('#registerform');
var btn = document.querySelector('.btn');

function loginMove(){
    login.style.left = "50px";
    register.style.left = "400px";
    btn.style.left = "0px";
}

function registerMove(){
    login.style.left = "-400px";
    register.style.left = "50px";
    btn.style.left = "110px";
}