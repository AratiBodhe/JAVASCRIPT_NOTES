//Lexical Scope

console.log("lexical scope");
const myVar="arati";
const myApp=()=>{

    const myFunc=()=>{
        console.log("inside myFunc=>",myVar);

        function nested(){
            console.log("nested===>",myVar);
        }
        nested();
    }
    console.log("inside myapp->",myVar);
    myFunc();
    console.log("end......")
};
myApp();