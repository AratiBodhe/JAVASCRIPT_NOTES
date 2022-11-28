
const user1={
    name:"arati",
    age:90,
    about:function(hobby){
      console.log(this.name,this.age,hobby);
    }
};

const user2={
    name:"piyu",
    age:10,
}
user1.about("singing");   //arati 90
user1.about(user2,"singing");  //arati 90

user1.about.call(user2,"singing");   //piyu 10
user1.about.call(user1,"singing");   //arati 90
user1.about.call("singing");   //undefined undefined undefined

//apply method
user1.about.apply(user2,["singing","reading"]);

//bind method returns the function
const ans= about.bind(user2,"hii");
console.log(ans());