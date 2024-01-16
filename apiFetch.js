// https://dummyjson.com/docsersonOne();
// const apiUrl='https://dummyjson.com/RESOURCE/?delay=1000'

// fetch('https://dummyjson.com/products/1').then(function(response){
//   console.log(response);
// })
// microtask queue...fetch ko queue...high priority
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())//call a method to convert response to json...this will return another promise
// .then(data => console.log(data))

// fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json()) //call a method to convert response to json...this will return another promise
//   .then(function one(data) {
//     data.images.map(item=>{
//     console.log(item);
//   });
//   })

// fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json()) //call a method to convert response to json...this will return another promise
//   .then(function one(data) {
//     //console.log(data.images);
//     const[a,b,c,d,e]=[...data.images];
//     console.log(a);
//     // console.log(b);
//     // console.log(c);
//     // console.log(d);
//     // console.log(e);
//   });

//  fetch('https://dummyjson.com/products/1')
//  .then(res => res.json())
//  .then(function(data){
//      const [a]=data.images;
//      console.log(a);
//  })

//  fetch('https://dummyjson.com/products/1')
//  .then(res => res.json())
//  .then(data => data.images.forEach(item => console.log(item)))

//get all products
//  fetch('https://dummyjson.com/products')
//  .then(res => res.json())
//  .then(data =>{for(let b in data.products){
//     console.log(data.products[b]);
// }
// })

//get a single product
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(data=>console.log(data))

//search products
// fetch('https://dummyjson.com/products/search?q=phone')
// .then(res => res.json())
// .then(function(data){
//     for(let b in data.products){
//         console.log("Details of:",data.products[b].title);
//         console.log(data.products[b].id);
//         console.log(data.products[b].title);
//         console.log(data.products[b].price);
//         console.log(data.products[b].stock);
//         console.log(data.products[b].discountPercentage);
//         console.log(data.products[b].brand);
//         console.log(data.products[b].category);
//         console.log(data.products[b].images);
//         data.products[b].images.forEach(item => console.log(item));
//     }
// })

//destructuring
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(function(data){
//     const [a,_,c,...rest]=data.images;
//     console.log(a);
//     console.log(c);
//     console.log(rest);
// })

//spread operator
//  let num1=[1,2,3,4,5]
//  let num2=[6,7,8,9,10]
//  let combinednum=[...num1,...num2];
//  console.log(combinednum);

//object destructuring
// let student={
// name:"ram",
// age:14,

// address:{
// country:"USA",
// state:"Boston",
// getAddress: function(){
//     return this.country;
// }
// }

// }
// console.log(student.address.country);
// console.log(student.address.state);
//Optional chaining (?.)
// console.log(student.address.getAddress?.());//safest way

// let {name:firstname ,age,location,address}=student;
// console.log(firstname);
// console.log(age);
// console.log(location);

// let teacher={
//     faculty:"computer",
//     id:101
// }

// let combinedobject={...student,...teacher};
// console.log(combinedobject);

//login user and get token
// let userToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcwNTI0ODA5MywiZXhwIjoxNzA1MjUxNjkzfQ.kbxh61RzVjIYd1h2CAmIBBHQmwKKU0VySCud_M2HCzU";
// fetch("https://dummyjson.com/auth/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     username: "kminchelle",
//     password: "0lelplR",
//     expiresInMins: 60, //optional
//   }),
// })
//   .then((res) => res.json())
//   .then((res) => {
//     // userToken = res.token;
//     // console.log(res.token);
//     console.log(res);
//   });
// console.log(userToken);

// /* providing token in bearer */
// fetch("https://dummyjson.com/auth/me", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${userToken}`,
//   },
// })
//   .then((res) => res.json())
//   .then(console.log);

// fetch("https://dummyjson.com/auth/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     username: "kminchelle",
//     password: "0lelplR",
//     expiresInMins: 60, // optional
//   }),
// })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Login failed with status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((userData) => {
//     return fetch("https://dummyjson.com/auth/me", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${userData.token}`,
//       },
//     });
//   })
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Fetching user data failed with status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((userData) => console.log("userData", userData))
//   .catch((error) => console.error("Error:", error));

fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      expiresInMins: 60, // optional
    }),
})
  .then((res) => res.json())
  .then((res) => {
    const userData = res;
    return fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization:
          `Bearer ${userData.token}`,
      },
    });
  })
  .then((res) => res.json())
  .then(res => console.log("userData", res));
  
