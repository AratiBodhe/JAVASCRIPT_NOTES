const numbers=[2,4,6,8,10];

const ans=numbers.every((number)=>number%2==0);
console.log(ans);
//every method accepts callback and return boolean value. (if all elements return true it returns true otherwise false)

const mixNumbers=[1,3,5,78];
const output=mixNumbers.every((num)=>{
num%2 !==0
});
console.log(output);