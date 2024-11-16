const longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) {
    return '';
  }

  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstStr[i] !== strs[j][i]) {
        return firstStr.slice(0, i);
      }
    }
  }

  return firstStr;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // Output: "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // Output: ""


//REFACTOR!