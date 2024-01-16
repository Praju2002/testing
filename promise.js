// https://ekantipur.com/news/2024/01/10/170487488742768805.html

// const axios= require('axios');
// async function getdata(){
//     // axios.get('https://ekantipur.com/news/2024/01/10/170487488742768805.html');
//     const response= await axios.get('https://ekantipur.com/news/2024/01/10/170487488742768805.html');
//     console.log(response);
//     console.log("waiting");
// }
// getdata();

// const axios= require('axios');
// function getdata(){
//     // axios.get('https://ekantipur.com/news/2024/01/10/170487488742768805.html');
//     const response= axios.get('https://ekantipur.com/news/2024/01/10/170487488742768805.html').then((response)=>{
//         console.log("promise resolved");
//         console.log(response);
//     });
//     // console.log(response);
//     console.log("waiting");
// }
// getdata();

// const delayedPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isResolved = false; //true
//     if (isResolved) {
//       resolve("promise resolved");
//     } else {
//       reject("promise rejected");
//     }
//   }, 3000);
// });

// async function asyncData() {
//   try {
//     const response = await delayedPromise;
//     console.log("Async resolved", response);
//   } catch (error) {
//     console.log("Async error", error);
//   }
// }
// asyncData();

// function getData() {
//   delayedPromise
//     .then((response) => {
//       console.log("resolved", response);
//     })
//     .catch((error) => {
//       console.log("Error", error);
//     })
//     .finally(() => {
//       console.log("This is finally block");
//     });
// }
// getData();

// function delayedOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const isResolved = true; //true
//           if (isResolved) {
//             resolve("promise resolved");
//           } else {
//             reject("promise rejected");
//           }
//         }, 5000);
//       });
// }

// function delayedTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const isResolved = true; //true
//           if (isResolved) {
//             resolve("promise resolved");
//           } else {
//             reject("promise rejected");
//           }
//         }, 5000);
//       });
// }
// function delayedThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const isResolved = true; //true
//           if (isResolved) {
//             resolve("promise resolved");
//           } else {
//             reject("promise rejected");
//           }
//         }, 5000);
//       });
// }
// function delayedFour(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const isResolved = true; //true
//           if (isResolved) {
//             resolve("promise resolved");
//           } else {
//             reject("promise rejected");
//           }
//         }, 5000);
//       });
// }
// function delayedFive(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           const isResolved = true; //true
//           if (isResolved) {
//             resolve("promise resolved");
//           } else {
//             reject("promise rejected");
//           }
//         }, 10000);
//       });
// }

// async function run() {
//   const response1 = await delayedOne();
//   console.log(response1);
//   const response2 = await delayedTwo();
//   console.log(response2);
//   const response3 = await delayedThree();
//   console.log(response3);
//   const response4 = await delayedFour();
//   console.log(response4);
//   const response5 = await delayedFive();
//   console.log(response5);
//   let result= await Promise.all([//sabai promise resolve vayesi
//     delayedOne(),
//     delayedTwo(),
//     delayedThree(),
//     delayedFour(),
//     delayedFive()
//   ]);
//   console.log(result);
// }
// run();

// delayedOne().then(function(data){
//     console.log(data);
// })
// delayedTwo().then(function(data){
//     console.log(data);
// })
// delayedThree().then(function(data){
//     console.log(data);
// })
// delayedFour().then(function(data){
//     console.log(data);
// })
// delayedFive().then(function(data){
//     console.log(data);
// })

