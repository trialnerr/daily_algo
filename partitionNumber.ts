// From wikipedia https://en.wikipedia.org/wiki/Partition_(number_theory)

// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition.

// For example, 4 can be partitioned in five distinct ways:

// 4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1.

// We can write:
// enum(4) -> [[4],[3,1],[2,2],[2,1,1],[1,1,1,1]] and

// enum(5) -> [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]].



function part(n) {
    let partitions = []; 
  
    const helper = (remainder, splittingNum, currCombination) => {
        if (remainder === 0) {
            partitions = [...partitions, [...currCombination]]; 
            return; 
        }
    
        for (let i = splittingNum; i <= remainder; i++){
       
            currCombination.push(i);
            helper(remainder - i, i, currCombination);
            currCombination.pop();
        
        }
    };
  
    helper(n, 1, []);
    return partitions; 
  
}

console.log(part(5));
// [ 1, 1, 1, 1, 1 ], => 1 
//   [ 1, 1, 1, 2 ], => 2 
//   [ 1, 1, 3 ], => 3
//   [ 1, 2, 2 ], => 4 
//   [ 1, 4 ], 
//   [ 2, 3 ], => 6 
//   [ 5 ] => 5


