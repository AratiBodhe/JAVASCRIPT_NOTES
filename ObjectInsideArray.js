const obj=[
    {name:"Arati", id:"45"},
    {name:"Piyush", id:"45"},
];
// console.log(obj);

//iteration
for(user of obj){
    console.log(user);
}

//nested destructuring

//here we are destructuring array

const[user1,user2]=obj;
console.log("user1=>",user1);

//hre we are destructing object 
const [{id},{name}]=obj;
console.log("output of nested destructuring",id,name);