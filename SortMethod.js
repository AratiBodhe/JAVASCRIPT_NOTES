

//sort method changes the original array
const numbers=[5,6,10,45,34];
const ans=numbers.sort();
// '0'=48
// '1'=49
// '2'=50
// '3'=51
// '4'=52
// '5'=53
// '6'=54
// '7'=55
// '8'=56
// '9'=57

//numbers array looks like
// [53,54,48,52,51];
// ANS= [48,51,52,53,54]     [10,34,45,5,6];
console.log(ans); // (sorting using ascii value)

const names=["arati","piyush","pallu","rutu","PANU"];
console.log(names.sort());      //["PANU",'arati', 'pallu', 'piyush', 'rutu']

//how to get expected output using sort method
function getAssendingOrder(a,b){
    return a-b;
}
//if a-b gives positive dont swap otherwise swap the numbers
const order=numbers.sort(getAssendingOrder);
console.log("expected=>",order);