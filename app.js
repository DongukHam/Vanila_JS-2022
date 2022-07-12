// const title = document.getElementById("title");

// console.dir(title);

// title.innerText = "Got you!!"
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title);

const title = document.querySelector(".hello h1");
console.log(title.innerText);

title.innerText = "hello"




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