//optional chaining

const user={
    firstName:"Arati",
    address:{houseNumber:34},
}

console.log(user.firstName);
// console.log("house number=>",user.address.houseNumber);
//if address does not exist housenumber console will throw an error

console.log(user?.address?.houseNumber);       //undefined