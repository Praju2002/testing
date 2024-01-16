function sum(){
    let a=50;
    let b=30;
    let sum=a+b;
    console.log(sum);
}
sum();

//anonymous function
 var sum= function(){
    let a=950;
    let b=30;
    let sum=a+b;
    console.log(sum);
 }
 sum();

 //arrow function
 var sum = () =>{
    let a=50;
    let b=300;
    let sum=a+b;
    console.log(sum);
 }
 sum();

 function Addition(r,s){
    console.log(`the sum is${r+s}`);
 }
 Addition(5,4);
 var add=(r,s)=>console.log(`the sum is${r+s}`);
 add(4,9);

 var add= function(r,s){
    console.log(`the sum is${r+s}`);
 }
 add(3,9);
//callback function using arrow function
 setTimeout(()=>{
    console.log("all good");
 },2000);//call back function two parameters one is function one is time 

 setTimeout(welcome,3000);
 function welcome(){
    console.log("hello welcome");
 }
  setTimeout(function(){
    console.log("Anonymous function");
  },4000);