const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}



// function handleLinkClick(event){
//     console.log(event);
//     alert("Clicked!");
// }

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username) {
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const button = document.createElement("button");
    button.innerText = "Logout";
    greeting.appendChild(button);
    button.addEventListener("click", deleteUser);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);

}

function deleteUser(event){
    localStorage.removeItem(USERNAME_KEY);
}




// link.addEventListener("click", handleLinkClick);

// with () automatically execute the function
