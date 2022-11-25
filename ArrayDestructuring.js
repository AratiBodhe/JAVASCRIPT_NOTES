//ARRAY DESTRUCRING

//TRADITIONAL METHOD

const first=["val1","val2"];
let firstValue=first[0];
console.log("first value is ",firstValue);
let secondValue=first[1];
console.log("second value is",first[1]);

//using destructuring

let [firstval,secondval]=first;
firstval ="value changed";
console.log(firstval,secondval);

//can not changed the value in case of const

// const [firstval,secondval]=first;
// firstval ="value changed";
// console.log(firstval,secondval);

//fetching specific element from an array using destructuring

const arr=[1,2,3,4,5];
let [ , , , ,value]=arr;
console.log(value);