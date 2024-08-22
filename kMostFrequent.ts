// Top K Elements in List
// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

//input: an array and an integer k 
//output: array of length k containing the k most frequent elements

// Example 1:
// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]

// {0: 1, 2: 2, 3: 3}

// Example 2:
// Input: nums = [7,7], k = 1
// Output: [7]


const kMostFrequent = (nums: number[], k: number): number[] => {

    //declare an output array and assign it to an empty array 
    //declare an object freqObj and assign it to a empty object
    //declare a number largestNum and assign it to -infinity 
    //loop through nums keeping track of freq in freObj, we also want to keep updating largestNum 
    //start a loop from largestNum to largestNum - k and store the elements with those frequencies in the output array
    //return output array

    const mostFrequent: number[] = []; 
    const freqObj: Map<number, number> = new Map(); 
    let mostAppearances: number = -Infinity; 

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; 
        const value = freqObj.has(num) ? freqObj.get(num)! + 1 : 1;
        freqObj.set(num, value);
        if (freqObj.get(num)! > mostAppearances) mostAppearances = freqObj.get(num)!; 
    }
 
    freqObj.forEach((value, key) => {

        if (value > mostAppearances - k){
            mostFrequent.push(key);
        }
    });

    return mostFrequent; 
};
//failed test
const nums = [4, 1, -1, 2, -1, 2, 3];
const k = 2;
console.log(kMostFrequent(nums, k));


//adjusted solution: 
const topKFrequent = (nums: number[], k: number): number[] => {

    const freqMap: Map<number, number> = new Map();

    for (const num of nums) {
        
        freqMap.set(num, (freqMap.get(num) || 0) + 1); 
        
    }

    const freqArray: [number, number][] = Array.from(freqMap.entries()); 
    const sortedArray = freqArray.sort((a, b) => b[1] - a[1]); 
   
    return sortedArray.slice(0, k).map(a => a[0]); 
};

//FIXED!!
console.log(topKFrequent(nums, k));