// let a = 1;
// console.log(a)
// Accessible yes Reason: چون در سطح گلوبال تعریف شده


// {
// let a = 1;
// console.log(a)
// Accessible yes Reason: چون در بلاک خود قابل دسترسی هست
// }
// console.log(a)
// Accessible No Reason: زیرا let که در بلاک مخصوص خود تعریف شود بلاک اسکوپ هست و در سطح گلوبال قابل دسترس نیست



// function test() {
// let a = 1;
// console.log(a)
// Accessible yes Reason: چون در بلاک فایشن خود قابل دسترسی هست
// }
// test()
// console.log(a)
// Accessible No Reason: زیرا let که در بلاک مخصوص خود تعریف شود فایشن اسکوپ هست و در سطح گلوبال قابل دسترس نیست



// var a = 1;
// console.log(a)
// Accessible yes Reason: چون در سطح گلوبال تعریف شده


// {
// var a = 1;
// console.log(a)
// Accessible yes Reason: چون در بلاک خود قابل دسترسی هست
// }
// console.log(a)
// Accessible yes Reason: زیرا متغیر var در گلوبال اسکوپ هست و میشه بهش دسترسی داشت خارج از بلاک



// function test() {
// var a = 1;
// console.log(a)
// Accessible yes Reason: چون در بلاک فایشن خود قابل دسترسی هست
// }
// test()
// console.log(a)
// Accessible No Reason: خیر فقط در سطح داخل تایع قایل دسترسی هست



// const a = 1;
// console.log(a)
// Accessible yes Reason: چون در سطح گلوبال تعریف شده


// {
// const a = 1;
// console.log(a)
// Accessible yes Reason: چون در بلاک خود قابل دسترسی هست
// }
// console.log(a)
// Accessible No Reason: زیرا const که در بلاک مخصوص خود تعریف شود بلاک اسکوپ هست و در سطح گلوبال قابل دسترس نیست



// function test() {
// const a = 1;
// console.log(a)
// Accessible yes Reason: چون در بلاک فایشن خود قابل دسترسی هست
// }
// test()
// console.log(a)
// Accessible No Reason: زیرا const که در بلاک مخصوص خود تعریف شود فایشن اسکوپ هست و در سطح گلوبال قابل دسترس نیست

// const user = {
//     name: "Nafas"
// };
// user.name = "Sara";
// چون خود Object عوض نشده.
// فقط property داخلش تغییر کرده.



// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// let name = 'hello';
// console.log(reverseString(name));



// JavaScript اول در Scope فعلی دنبال متغیر می‌گردد؛ اگر پیدا نکرد، به Scope بیرونی می‌رود.
// let x = 10;
// {
//     let x = 20;
//     console.log(x);
// }
// console.log(x);


// function sum(a, b) {
//     return a + b;
// }
// const result = sum(2, 3);
// console.log(result);



// function sum(a, b) {
//     console.log(a + b);
// }
// const result = sum(2, 3);
// console.log(result);

let x = "global";

function outer() {
    let x = "outer";

    function inner() {
        let x = "inner";
        console.log(x);
    }

    inner();
}

outer();