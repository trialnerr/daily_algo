function countBs(string) {
  let countB = 0;
  for (let char of string) {
    if (char === 'B') countB++;
  }
  return countB;
}

function countChar(string, char) {
  let count = 0;
  for (let letter of string) {
    if (letter === char) count++;
  }
  return count;
}
console.log(countBs('BOB'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
