//FUNCTION DECLARATION

function add(a,b){
    return a+b
};

const result=add(10,20);
console.log(result);

//function expression

// MOST IMPORTANT...............
//RETURN THE RESULT FROM FUNCTION EXPRESSION OR PRINT THE OUTPUT INSIDE FUNCTION EXPRESSION
const ans=function(a,b){
    console.log(a+b);
};
ans(10,40);


const getResult=function (a,b){
    return a*b;
}
console.log(getResult(4,5));
const mul=getResult(6,7);
console.log(mul);


//last example

const operations=function(c,d,f){
c+d+f;
};
const rse=operations(5,5,5); //undefined
console.log(rse);
console.log(operations(3,3,3));//undefined

//eg
const airth=function(a,b){
    res=a+b;
};
console.log(airth(10,15)); //undefined
const getRes=airth(9,7);
console.log(getRes); //undefined
