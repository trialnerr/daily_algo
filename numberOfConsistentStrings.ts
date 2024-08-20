// You are given a string allowed consisting of distinct characters and an array of strings words.
// A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.

// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.

// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.


const numberOfConsistentStrings = (allowed: string, words: string[]): number => {
   
    //initialize a variable consistentStrings and assign it to 
    let consistentStrings: number = words.length; 
    for (const word of words){
        for (const letter of word){
            if (!allowed.includes(letter)){
                consistentStrings--; 
                break; 
            }
        }
    }
  
    return consistentStrings;
};

//currently the time complexity is O(N*M) ~ O(N^2) where N is the length of the words array and M is the average length of each word
//this is because we are looping through the words array and for each word (in the worst case) we are looping through the entire word itself 

//but we can improve it to O(n) by using a set instead of a string. However this will add some space complexity because we need to store allowed characters in a set
//this solution is O(n^2) because have to loop 

const efficientConsistentStrings = (allowed: string, words: string[]): number => {

    const allowedSet: Set<string> = new Set(allowed);
    let consistentStrings: number = words.length; 

    for (const word of words){
        for (const letter of word) {
            if (!allowedSet.has(letter)) {
                consistentStrings--;
                break;
            }
        }
    }
    return consistentStrings; 
};
const allowed = "ab", words = ["ad","bd","aaab","baa","badab"];
console.log(numberOfConsistentStrings(allowed, words)); //2
console.log(efficientConsistentStrings(allowed, words)); //2
