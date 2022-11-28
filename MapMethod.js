//map method retuns an arry, if we don;t return anything we get undefined elements 

const numbers=[1,2,3,4,5];
const display=(number)=>{
console.log(number);    //1,2,3,4,5
}
const result=numbers.map(display);
console.log(result); //undefined  (not  returning anything );

function getData(number){
    return `${number*2}`
}
const getResult=numbers.map(getData);
console.log(getResult);  //[2,4,6,8,10]

const data=[
    {firstName:"arati",age:89},
    {firstName:"pooja,",age:8},
    {firstName:"priti",age:10},
];

const getName=(userData)=>{
    return `${userData.firstName}`;
}

const res=data.map(getName);
console.log("res=>",res);
