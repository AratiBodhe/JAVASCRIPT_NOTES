//let and const are block scope
//var is function scope

{
    const firstName="arati";
    let lastName="bodhe"
    var age=90
}

//  console.log(firstValue,lastName);  //(error /not define)
console.log(age);
 {
    const firstName="arati";
    let lastName="bodhe";
    var age=89
    console.log(firstName,lastName)
}
console.log(age);      //89


//function scope
function scopeChain(){
    var hobby="playing";
    console.log(hobby);
}
scopeChain();
// console.log(hobby);        //error (undefined);

function getData(){
    let id=345;
    console.log(id)
};
getData();
console.log(id);  //error not defined