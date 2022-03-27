//for toggle form// 

const loginForm = document.getElementById("LoginForm");
const registrationForm = document.getElementById("RegistrationForm");
const indicator = document.getElementById("Indicator");

function register() {

    registrationForm.style.transform = "translate(0px)";
    loginForm.style.transform = "translate(0px)";
    indicator.style.transform = "translate(100px)";
}

function login() {

    registrationForm.style.transform = "translate(300px)";
    loginForm.style.transform = "translate(300px)";
    indicator.style.transform = "translate(0px)";
}