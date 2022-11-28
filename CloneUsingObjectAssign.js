//clone using object.assign

const obj={
    name:"Arati",
    id:123,
};

const obj2=obj;
console.log("obj2=>",obj2);

obj["gender"]="female";

console.log("obj",obj);
console.log("obj2=>",obj2);

//here gender is added in both object , if we want to add gender in only obj then we have to use object.assign

const obj3=Object.assign({},obj);

obj.surname="bodhe";

console.log("obj=>",obj);
console.log("obj3",obj3);
