//find method

const names=["arati","piyush","pallu","rutu","PANU"];

const isLength=(str)=>{
    return str.length===4;
}
const ans=names.find(isLength);
console.log(ans);    //it gives only first occurance (rutu) ; panu will not display