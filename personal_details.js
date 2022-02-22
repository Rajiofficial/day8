//Write a “person” class to hold all the details.
class personal_details{
    constructor(){
        console.log("please submite your details")
    }
    raji(){
    let a={gmailid:"rajfernanto764@gmail.com",
    qualification:"MSC(cs)",
    passedout:"2022",
    collegename:"poombuhar college",
    collegeplace:"melaiyur",
    interestofarea:"software developer",
    skills:["javascript","html","css","python"],
    mystrength:["i am a honest person","self motivated","hardwork"],
    languages:["english","tamil"],
    native:"poombuhar"}
    raji_obj=a;
    return a;
    }
  
    
}
let raji_obj={}
let s= new personal_details()
s.raji()
console.log(raji_obj)
console.log(s.raji())