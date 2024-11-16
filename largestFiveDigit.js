function largestFiveDigit(digits) {
  let highestNumber = 0;
  for (let i = 0; i < digits.length; i++) {
    let current5 = Number(digits.slice(i, i + 5));
    if (current5 > highestNumber) {
      highestNumber = current5;
    }
  }
  return highestNumber;
}

console.log(largestFiveDigit('1234567890')); 