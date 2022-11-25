// console.log("array")

//INTRODUCTION TO ARRAY (REFERENCE DATA TYPE)
//ordered collection of elements

//HOW TO CREATE ARRAY
let fruits=["banana","apple","grapes"];
let mixedArray=[1, "hello", 2.8];
console.log(mixedArray);
console.log(fruits);
console.log(fruits[0]);

//arrays are mutuable
//changing the specific element of an array

fruits[1]="mango";
console.log("changing specific element of an array",fruits);
console.log(Array.isArray(fruits));
//ARRAY INDEXING


//pushpop, shift unshift
console.log("shift unshift")
let myFruits=["banana","apple","grapes"];
console.log(`${myFruits} and length is ${myFruits.length}`);
myFruits.push("added");
console.log(`${myFruits} and length is ${myFruits.length}` );


// let newArray=[];
//  newArray=fruits.push("mango");
// console.log(`${newArray} and length is ${newArray.length}` ); (4 and length is undefined)
// console.log(newArray);

console.log("pop method")
let popFruits=["banana","apple","grapes"];
// popFruits.pop();
// console.log(popFruits)     //banana apple

console.log(popFruits.pop()) //return grapes

//unshift shift work same as push pop , difference is unshift methods add the element at the start
