const doSomething = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve("resolve data");
      } else {
        reject("error");
      }
    }, 3000);
  });
};

console.log(1);
console.log(2);
console.log(3);
doSomething(true)
    .then((data) => {
    console.log(data);
});
.catch(err => {
    console.warn(err);
})
console.log(4);
console.log(5);
console.log(6);
