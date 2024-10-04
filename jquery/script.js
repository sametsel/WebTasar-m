
// let kaan = {
//     name:"kaan",
//     yearOfBirth:2008,
//     jox:"student",
// }
// val =kaan;
// console.log(val);
// console.log(typeof val);


// function student(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
// }
// student.prototype.calculateAge=function(){
//     return 2024-this.yearOfBirth;
// }
// let kaan=new student("kaan",2009,"student");
// let aylin =new student("aylin",2006,"student");

// console.log(kaan.name);
// console.log(kaan.yearOfBirth);
// console.log(kaan.job);
// console.log(kaan.calculateAge());
// console.log("---------------------");
// console.log(aylin.name);
// console.log(aylin.yearOfBirth);
// console.log(aylin.job);
// console.log(aylin.calculateAge());


//Object.create
let personProto={
    calculateAge: function(){
        return 2024 -this.yearOfBirth;
    }
}
let kaan =Object.create(personProto);
console.log(kaan);