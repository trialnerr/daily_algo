// Design an algorithm to encode a list of strings to a single string. 
// The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode
// Example 1:

// Input: ["neet","code","love","you"]
// Output:["neet","code","love","you"]

// Example 2:

// Input: ["we","say",":","yes"]
// Output: ["we","say",":","yes"]

class Solution {
    /**
   * @param {string[]} strs
   * @returns {string}
   */
    encode(strs: string[]): string {

        let resultStr: string = "";
        for (const str of strs){
            resultStr += " " + str; 
        }
        resultStr = resultStr.trimStart();
        return resultStr; 
    }

    /**
   * @param {string} str
   * @returns {string[]}
   */
    decode(str: string): string[] {

        if (str === "") return []; 
        console.log(str);
        return str.split(" "); 
    }
}

console.log("".split(" ")); 
const encodeDecode: Solution = new Solution; 
// console.log(encodeDecode.decode(encodeDecode.encode(["neet", "code", "love", "you"])));
console.log(encodeDecode.encode([]));

