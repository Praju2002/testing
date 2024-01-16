// var a=6.7;
// var b='c';
// console.log(b);

// var b="a";
// console.log(b);

// var a=10;
// var b=20;
// console.log("sum is:"+(a+b)+"\tthis is okay");
// console.log(`the sum of two numbers is ${a+b} . This is okay`);

// function display(a,b=90){
//     return a-b;
//     // console.log("I am general/normalfunction"+(a+b));
// }
// var sum=display(5,'9');
// console.log(`sum value is ${sum}`);
// var let and const
// const a=20; 
//  let a=30;
//  a=40;
// console.log(a);
console.log("var keyword");
var x=30;
var x=49;//using var can redeclare variable
console.log(x);
x=40;//can reassign variable value
console.log(x);

function display(){
    if(true){
        var y=99;
        console.log(y);
    }
    console.log(y);
    console.log(x);
}
// console.log(y);//this is not applicable
display();
console.log("Now let keyword");
// let p;//allowed
// p=300;
let p=100;
// let p=4000;//cant redeclare variables using let keyword
p=400; //allowed to reassign value to variable with let keyword
console.log(p);
function show(){
    if(true){
        let r=500;
        console.log(r);
    }
    // console.log(r);//now allowed because let is block scope {block}...scope ends within a block can be used in next block
    if(true){
        let r=800;
        console.log(r);
    }
}
show();
console.log("const  keyword");
// const a;//not allowed
const a=50;//must initialize variable
// const a=90//not allowed re declaration not allowed
// a=900;//reassign not allowed
console.log(a);
function visible(){
    if(true){
        const u=300;
        console.log(u);
    }
    // console.log(u);//const is a block scoped ,using variable with const keyword are not allowed to accesed from outside of the block
    if(true){
        const u=999;
        console.log(u);
    }
}
visible();

console.log("nullish coalescing");
var g;
var h = null ?? "this is not allowed";
console.log(h);
var i=console.log("hello");
console.log(i);
// console.log(g);
var m=10;
var msg=m==11 ?"equal":"sorry";
console.log(msg);
