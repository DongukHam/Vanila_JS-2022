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

const calculator = {
    add: function(a,b) {
        console.log(a+b);
    },
    minus: function(a,b) {
        console.log(a-b);
    },
    multiple: function(a,b) {
        console.log(a*b);
    },
    divide: function(a,b) {
        console.log(a/b);
    }
};

calculator.add(5,1);
calculator.minus(5,1);
calculator.multiple(5,1);
calculator.divide(5,1);