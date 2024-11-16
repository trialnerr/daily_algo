/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const romanToInt = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let integer = 0;
  //while the length of the string is greater than 0
  while (s.length > 0) {
    //check if s.slice(0,2) is a key in the obj.
    if (romanToInt[s.slice(0, 2)]) {
      // if it is then integer + = key's value
      integer += romanToInt[s.slice(0, 2)];
      // then reassign s to the remnants s.slice(2)
      s = s.slice(2);
    } else if (romanToInt[s.slice(0, 1)]) {
      integer += romanToInt[s.slice(0, 1)];
      s = s.slice(1);
    }
    //else check if s.shift(1) is a key in the obj
    // if it is then integer += key's value
    //reassign s to remnants s.slice(1)
  }
  return integer;
};

console.log(romanToInt('MCMXCIV'));
