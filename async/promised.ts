// Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.

// Hint: take a look at the Promise object docs on MDN.

function promised(val: unknown) {
  return new Promise((resolve, reject) => {
    resolve(setTimeout(() => console.log(val), 2000) );
  })
}