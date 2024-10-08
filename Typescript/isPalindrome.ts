// Given a string s, return true if it is a palindrome, otherwise return false.
// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:
// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.
// Example 2:

// Input: s = "tab a cat"
// Output: false
// Explanation: "tabacat" is not a palindrome.


const isPalindrome = (str: string): boolean => {
    
    
    //make lowercase and remove spaces 
    const strLowerNoSpace = str.toLowerCase().replace(" ", "");
    //remove non-alphanumeric characters
    const alphaNumStr = strLowerNoSpace.replace(/([^0-9a-zA-Z])/g, "");
    if (alphaNumStr.length === 0 || alphaNumStr.length === 1) return true; 
    //declare two pointer left and right
    let [ left, right ]: number[] = [0, alphaNumStr.length -1];
    //while front < end check if front and end are ===
    while ( left < right ){
        if (alphaNumStr[left] !== alphaNumStr[right]){
            return false;
        }
        left++;
        right--; 
    }
    //if not return false
    return true;
}; 

console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("1amma1"));
console.log(isPalindrome("tab a cat"));
console.log(isPalindrome("tab! a cat!-123young&**Andbdbvg123"));

//This solution is O(N) where N is the length of the input string 