//trim()
// toLowerCase()
// toUpperCase()
// slice

//trim()
let myName="arati         ";
console.log(myName.length)   //14
myName.trim();
console.log(myName.length);     //14
// trim gives new string
let updatedName=myName.trim();
console.log(updatedName.length);



console.log(updatedName.toUpperCase());
console.log(updatedName.toLowerCase());
//strings are immutable
updatedName=updatedName.toUpperCase();
console.log(updatedName);
updatedName=updatedName.toLowerCase();
console.log(updatedName);

// slice method
// (start index, end index)
let surname="bodhe";
let newString= surname.slice(0,3);    //bod
//slice does not include the last index
console.log(newString);

newString=surname.slice(1) //odhe
console.log(newString);