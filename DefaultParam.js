
const add=(a,b)=>{
    return a+b;
}
// const result=add(4);    //NAN
// console.log(result);


const getResult=(a,b=5)=>{
return a+b;
};
const result=getResult(4);
console.log(result);