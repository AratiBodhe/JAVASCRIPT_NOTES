

function multiplyNNumbers(a,b,...c){
console.log(c);         //rest parameter store the rest params in an array
};
multiplyNNumbers(6,7,20,20,90);

const addAll=(...numbers)=>{
  let total=0;
  console.log(typeof numbers);      //object
  for(number of numbers){
    total=total+number;
  }
  return total;
}
const result=addAll(9,0,8,7,6,5,4,3,2,1);
console.log(result);