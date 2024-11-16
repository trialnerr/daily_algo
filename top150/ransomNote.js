/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const ransomNoteFreq = freqBuilder(ransomNote);
  const magazineFreq = freqBuilder(magazine);
  for (let letter in ransomNoteFreq) {
    if (
      !magazineFreq[letter] ||
      ransomNoteFreq[letter] > magazineFreq[letter]
    ) {
      return false;
    }
  }
  return true;
};

function freqBuilder(str) {
  const obj = {};
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  return obj;
}
