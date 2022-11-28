//Array Methods

//FOrach method accepts callback ;
const numbers=[1,2,3,4,5];

// function mul(){
//     for(let i=0;i<numbers.length;i++){
//         console.log(`${numbers[i]}*2=> ${numbers[i]*2}`)
//     }
// };
// mul();

console.log("using foreach");
function myFunc(number,index){
console.log(`${number}*3=> ${number*3}`)
}
numbers.forEach(myFunc);

numbers.forEach((number)=>{
console.log(`${number*2}`);
});

const data=[
    {firstName:"arati",age:89},
    {firstName:"pooja,",age:8},
    {firstName:"priti",age:10},
];

const getData=(user,index)=>{
console.log(user.firstName, user.age,index);
}
data.forEach(getData);

