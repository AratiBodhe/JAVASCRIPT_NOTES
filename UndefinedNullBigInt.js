//undefined

let myName;
console.log(typeof myName);      //undefined
myName="arati";
console.log(myName, typeof myName);

//for const we will get an error
// const pi;
// console.log(typeof pi);


//null 
// null is primitive value and type of null is an object

let myVariable=null;
console.log(myVariable);
console.log(typeof null);

//bigint

let num="123";
console.log(num);
console.log(Number.MAX_SAFE_INTEGER);  //int has limit 
let myBigNum= BigInt(999999999999999999999999);
// let myBigNum= 999999999999999999999n    this way also we can create bignit 
console.log(myBigNum, typeof myBigNum);
