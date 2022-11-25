
let array1=["1","2"];
let array2=array1.slice(0); //clone using slice method
array1.push("3");
console.log(array1);        
console.log(array2);

//second way
console.log("using concat method");
let arr1=["1","2"];
let arr2=[].concat(arr1);
arr1.push("4");
console.log(arr1);        
console.log(arr2);

//spread operator
console.log("using spread operator");

let first=[4,5,6];
let second=[...first];
first.push(9,8);
console.log(first);
console.log(second);