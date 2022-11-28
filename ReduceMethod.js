//reduce method

const numbers=[1,2,3,4,5];

function getSum(acc, currentValue){
    return acc+currentValue;
}
const sum=numbers.reduce(getSum);
console.log(sum);