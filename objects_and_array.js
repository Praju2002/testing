//javascript arrays

//array declare
let points=new Array(3);//object

console.log("length of array points",points.length);

points[0]=22;
points[1]=33;
points[2]=44;
points[3]=55;

console.log(points[3]);
console.log(points[0]);
console.log(points.length);

let numbers= new Array(5,9,6,7);//3

console.log("length of array number",numbers.length);
console.log(numbers[3]);
numbers[4]=66;
console.log(numbers[4]);

let vehicles=['bus','bike','van',8];
vehicles[4]=6;
console.log("length of array vehicle",vehicles.length);
console.log(vehicles[3]);

for(i=0;i<vehicles.length;i++){
    console.log(vehicles[i]);
}
for(let a in vehicles){
    console.log(vehicles[a]);
}

//map()
var result=numbers.map((number)=>number*10)
// var result=numbers.map(function(number){
//     return number*10;
// })
// var result=numbers.map(multiplyByTen);
// function multiplyByTen(number){
//     return number*10;
// }
console.log("updated array",result);
console.log("original array",numbers);

//javascript objects
var student={
    name:"ram",
    age:15,
    address:'lalitpur',
    'full name':"ram bahadur",
    info:function(){
        return this.name+" "+this.address;
    }
};
console.log(student.name);
console.log(student['name']);
console.log(student['full name']);//. is not accepted
console.log(student.info());

for(let b in student){
    console.log(student[b]);
}

var students=[{
    name:"hari",
    address:"ktm",
    faculty:"computer",
    semester:4,
    'roll no':210

},
{
    name:"sita",
    address:"pkr",
    faculty:"it",
    semester:3,
    'roll no':211

},
{
    name:"rita",
    address:"bkt",
    faculty:"civil",
    semester:1,
    'roll no':212

},
{
    name:"geeta",
    address:"brt",
    faculty:"it",
    semester:4,
    'roll no':213

},
{
    name:"praju",
    address:"kusunti",
    faculty:"comp",
    semester:5,
    'roll no':214

},
{
    name:"sambhavi",
    address:"kalanki",
    faculty:"comp",
    semester:5,
    'roll no':215

}
]
for(let b in students){
    console.log("Details of:",students[b].name);
    console.log(students[b].name);
    console.log(students[b].address);
    console.log(students[b].faculty);
    console.log(students[b].semester);
    console.log(students[b]['roll no'])
}
