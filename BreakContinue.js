
let fullName="AratiBodhe";
console.log(fullName);
for(let i=0; i<fullName.length; i++){
    if(i==2){
        // continue;     //ArtiBodhe
        break;        //Ar
    }
    console.log(fullName[i]);
}