
const app=()=>{
    const inside=()=>{
        console.log("inside")
    }
    console.log("inside app");
    inside();
}
app();