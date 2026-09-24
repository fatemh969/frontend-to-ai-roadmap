// sayHello();
// function sayHello() {
//     console.log("hello");
// }
//hoist mish


// hello();
// const hello = () => { };
//hoist nemishe Temporal Dead Zone

// console.log(a);
// var a = 10;
//undifiand


// console.log(a);
// let a = 10;
//بازه‌ای بین شروع Scope و لحظه‌ای که متغیر let یا const مقداردهی می‌شود.


// Function Declaration
// function greet() {
//     console.log("hi");
// }
//✅ Hoisted


// Function Expression
// const greet = function () {
//     console.log("hi");
// };
// ❌ قابل استفاده قبل از تعریف نیست.


// Arrow Function
// const greet = () => {
//     console.log("hi");
// };
// ❌ قابل استفاده قبل از تعریف نیست.


// foo();
// function foo() {
//     console.log("A");
// }

// foo();
// var foo = function () {
//     console.log("A");
// };

// console.log(a);
// var a = 5;
// console.log(a);

// console.log(a);
// let a = 5;


// function fizzBuzz(n) {
//     if (n % 3 === 0 && n % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (n % 3 === 0) {
//         console.log("Fizz");
//     } else if (n % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(n);
//     }
// }

// fizzBuzz(15);

// var a = 1;
// function test() {
//     console.log(a);
//     var a = 2;
//     console.log(a);
// }
// test();

// var a = 1;
// function test() {
//     console.log(a);
//     let a = 2;
//     console.log(a);
// }
// test();

// function test() {
//     console.log(a);
//     if (true) {
//         var a = 10;
//     }
//     console.log(a);
// }
// test();

// خود آبجکت تابع را چاپ کن.
// console.log(foo);
// function foo() {
//     return "hello";
// }