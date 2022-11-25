
const myProfile={
    name:"arati",
    "my_Id":678,
}
let getName=myProfile["name"];
const getId=myProfile["my_Id"];
console.log(getName,getId);
console.log("after changing name");

getName="myname changed";
console.log(getName,getId);

//DESTRUCTURING
// const{name,my_Id}=myProfile;
// console.log(name,my_Id);      //arati 678

// const{myName, id}=myProfile;
// console.log(myName,id);      //undefined undefined

const {name:showName,my_Id: showId }=myProfile;
console.log(showName,showId);