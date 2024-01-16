function Person(name, age) {
  //kunai function bhitra arko function xa vane main function le garda bhitra ko function can use this
  this.name = name; //this vaneko afai ho
  this.age = age;

  this.getName = function () {
    return this.name;
  };
  // this.getAge=function(){
  //     return this.age;
  // }
}
// Person.prototype.getAge=()=>{//this is not valid in arrow function
//     return this.age
// }
// Person.prototype.getAge = function () {
//   return this.age;
// };

// let person1 = new Person("jack", 20); //Person ko instance haru jati pani banauna milxa
// let person2 = new Person("jane", 44);

// console.log(person1.getName());
// console.log(person1.getAge());

//resuce-single value dine
//hoisting

// console.log(name);
// const name="hello world";
//deadzone ...reference error
// const name;
// console.log(name);
// name="hello world";
// console.log(name);

//closure

// function PersonOne() {
//   console.log(name);
//     function PersonTwo(){
//     let name = "hello world";
//     }
//     PersonTwo();
// }


