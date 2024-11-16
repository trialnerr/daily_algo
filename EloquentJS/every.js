// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

function every1(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

function every(array, test) {
  //no element should fail the test
  const foundFailedEl = array.some((el) => !test(el));
  return !foundFailedEl;
}

