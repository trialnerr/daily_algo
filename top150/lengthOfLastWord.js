/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  //trim the word
  s = s.trim();
  //split along spaces
  const words = s.split(' ');
  //check the last word's length
  return words.at(-1).length;
};
