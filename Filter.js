//callback of filter return boolean value
//it creates the arary of true values

const numbers=[4,2,7,9,12,45];

const isEven=(number)=>{
 return number%2==0;
};
 const result=numbers.filter(isEven);
 console.log("result is",result);

 //delete the given number using filter method

 const nums=[78,3,45,23,12,37,46];
let givenNum=23;
 function getRestData(number){
  return number !=givenNum;
 }
 const res=nums.filter(getRestData);
 console.log("res=>",res);
