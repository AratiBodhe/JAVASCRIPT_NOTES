//splice method
//value,delete,insert


const numbers=[1,2,3,4,5,6];

//delete
const ans=numbers.splice(2,1);
console.log(ans);
console.log("original array",numbers);

//insert using splice method

const ans2=numbers.splice(2,1,3);
console.log("ans2=>",ans2);
console.log("original after insertion=>",numbers);