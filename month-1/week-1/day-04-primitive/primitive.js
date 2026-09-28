// let a = 10;
// let b = a;
// b = 20;
// console.log(a);
// console.log(b);


// const user1 = {
//     name: "Nafas"
// };
// const user2 = user1;
// user2.name = "Sara";
// console.log(user1.name);



// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);

const arr1 = [1, 2, 3];

const arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);