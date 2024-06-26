//Async-await
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve(200);
    }, 2000);
  });
}
async function gettData() {
  console.log("getting data1..");
  await getData(1);
  console.log("getting data1..");
  await getData(2);
  console.log("getting data1..");
  await getData(13);
  console.log("getting data1..");
  await getData(14);
  console.log("getting data1..");
  await getData(15);
  console.log("getting data1..");
  await getData(15);
  console.log("getting data1..");
  await getData(16);
}
//IIFE Function;
(async function () {
  console.log("getting data1..");
  await getData(1);
  console.log("getting data1..");
  await getData(2);
  console.log("getting data1..");
  await getData(13);
  console.log("getting data1..");
  await getData(14);
  console.log("getting data1..");
  await getData(15);
  console.log("getting data1..");
  await getData(15);
  console.log("getting data1..");
  await getData(16);
})();

// //async-await

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 3000);
//   });
// }
// async function getWeatherData() {
//   await api();
//   await api();
// }

// //promise chain
// function asyncFun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 3000);
//   });
// }
// function asyncFun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("happy");
//     }, 3000);
//   });
// }
// console.log("fatchig data1....");

// asyncFun1()
//   .then((res) => {
//     console.log("gatting data");
//   })

//   .then((res) => {
//     return asyncFun2();
//   })
//   .then((res) => {
//     console.log("success");
//   });

// promsie concepts
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     resolve("succeful");
//     //     reject("error");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise fullfiled", res);
// });
// let myPromise = getPromise();
// myPromise.catch(() => {
//   console.log("rejectd");
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//     }, 5000);
//   });
// }

//Asychnohronus state
// function getData(name, Password, getPassword) {
//   setTimeout(() => {
//     console.log("Name", name);
//     console.log("password", Password);

//     if (getPassword) {
//       getPassword();
//     }
//   }, 2000);
// }
//callback Hell;
// getData("Ali Ahmad", "123", () => {
//   console.log("geiing data 2");
//   getData("usam", "999", () => {
//     console.log("getteing data of my nick name and old password");
//   }),
//     getData("Next user", "nill");
// });
