//function    returning function

//also called higher order function

function myFunc(){
    function hello(){
        console.log("returning hello function");
    }
    return hello;
};
const ans=myFunc();
console.log(ans());
