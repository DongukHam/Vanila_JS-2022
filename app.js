// const title = document.getElementById("title");

// console.dir(title);

// title.innerText = "Got you!!"
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title);

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.className === clickedClass){
        h1.className = "";
    }else {
        h1.className = clickedClass;
    }

    if(h1.classList.contain(clickedClass)){
        h1.classList.remove(clickedClass);
    }else {
        h1.classList.add(clickedClass);
    }

    h1.classList.toggle("clicked");
    
    
    // const currentColor = h1.style.color;
    // let newColor
    // if(currentColor === "blue"){
    //     newColor = "tomato"
    // } else {
    // newColor = "blue";
    // }
    // h1.style.color = newColor;
}

function handleMouseEnter() {
    h1.innerHTML = "mouse is here!";
}

function handleMouseLeave() {
    h1.innerHTML = "mouse is left!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copied!");
}

function handleWindowOffline() {
    alert("SOS no wifi");
}

function handleWindowOnline() {
    alert("Network is connected")
}

// console.log(h1.innerText);

// h1.innerText = "hello";
// h1.style.color = "blue";

// h1.onclick = handleTitleClick;
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


// const a= 10 , b = 2;
// let myName='David Ham';

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello " + myName);

// myName = "Nicola"

// console.log("My new name is " + myName);


// const amIFat = null;
// let something;
// console.log(something, amIFat);

// [array]
// const daysOfWeek = ["mon","tue","wed","thu","fri","sat","sun"]

// console.log(daysOfWeek);
// get item from array
// console.log(daysOfWeek[5]);
// add one more
// daysOfWeek[7] = "holiday";
// daysOfWeek.push("lotto");
// console.log(daysOfWeek);

// const playerName = 'juwon';
// const playerPoints = 121212;
// const playerHansome = true;
// const playerFat = 'not fat';

// const player = {name:'juwon', point:121212, handsome:true, fat:'not big'}

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);
// player.point=999999;
// player.lastName='ham';
// console.log(player);

// function sayHello(name) {
//     console.log(`Hello! My name is ` + name)
// }

// alert("Welcome!");
// sayHello(`David Ham`);

// function plus(a, b) {
//     console.log(a + b);
// }
// function divide(a,b){
//     console.log(a/b);
// }

// plus(4,5);
// divide(4,2);

// const player = {
//     name:`juwon`,
//     sayHello: function(otherPerson) {
//         console.log(`hello ` + otherPerson + ` nice to meet you`)
//     }
// };

// player.sayHello('dayeon');

// const calculator = {
//     plus: function(a,b) {
//         return a+b;
//     },
//     minus: function(a,b) {
//         return a-b;
//     },
//     multiple: function(a,b) {
//         return a*b;
//     },
//     divide: function(a,b) {
//         return a/b;
//     },
//     power: function(a,b) {
//         return a**b;
//     }
// };

// const plusResult = calculator.plus(5,1);
// const minusResult = calculator.minus(5,1);
// const multiResult = calculator.multiple(5,1);
// const divResult = calculator.divide(5,1);
// const powerResult = calculator.power(2, 3)

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge);



// const age = parseInt(prompt('How old are you?'));

// console.log(isNaN(age));

// if(isNaN(age) || age<0){
//     console.log("Please write a number");
// }
// else if(age<18){
//     console.log("you are too young");
// }
// else if(age >=18 && age <=50 && age != 100){
//     console.log("You can drink");
// }
// else if(age ===100){
//     console.log("Wow, you are wise!");
// }
// else{
//     console.log("You can't drink");
// };


// else if(age >=18 || age <=50)