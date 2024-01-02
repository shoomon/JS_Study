document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";

    const link = document.querySelector("a");

    function onLoginSubmit(event){
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        console.log(username);
        paintGreeings();
    }

    function paintGreeings(){
        const username = localStorage.getItem(USERNAME_KEY);
        greeting.classList.remove(HIDDEN_CLASSNAME);
        greeting.innerText = "Hello " + username;
    }

    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if(savedUsername === null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }else{
        paintGreeings();
    }
})
