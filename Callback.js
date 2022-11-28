//callback function

function myFunc2(name){
console.log("inside myfunc2");
console.log(`myname is ${name}`)
}

function myFunc(callback){
 console.log("inside my myfuc");
 callback("arati");
}

myFunc(myFunc2);