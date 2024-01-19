console.log("Hello, this is an external JavaScript file!");

function twosumcheck(nums, target){
    for( let i=0; i< nums.length ; i++){
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i] ,nums[j]]
            }
        }
    }
}

console.log(twosumcheck([2,4,5,7,3],9),"twosumcheck");

// Function to check if there are two numbers in the given array
// that add up to the specified target value.
function optimizedTwoSumCheck(nums, target) {
    // Create an empty object to store the complement of each number
    // along with its index.
    const hashmaps = {};

    // Loop through the array elements.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the value that, when added to the current number,
        // gives the target sum.
        const complement = target - nums[i];

        // Check if the complement exists in the hashmaps object.
        if (hashmaps[nums[i]]) {
            // If found, return the indices of the two numbers that add up to the target.
            return [i, hashmaps[nums[i]]];
        } else {
            // If not found, store the complement along with its index in the hashmaps object.
            hashmaps[complement] = i;
        }
    }

    // If no matching pair is found, return null or an appropriate indicator.
    return null;
}

// Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// const result = optimizedTwoSumCheck(nums, target);
// console.log(result); // Output: [1, 0] (indices of numbers 7 and 2 that add up to 9)


console.log(optimizedTwoSumCheck([1,3,7,9,2],11),"optimizedTwoSumCheck");

//max area calculation

function maxarea(nums){
    let max = 0;
    let height;
    let width;
    for (let i = 0; i < nums.length; i++) {
       for (let j = i+1; j < nums.length; j++) {
        height = Math.min(nums[i],nums[j])
        width = j-i
        max= Math.max(height*width,max)
       }        
    }
    return max
}

console.log(maxarea([7,1,2,3,9]),"maxarea");

function optimalMaxArea(nums){
    let max = 0;
    let p1 = 0;
    let p2 = nums.length -1
    let height;
    let width ;
    while(p1<p2){
        height = Math.min(nums[p1],nums[p2])
        width = Math.abs(p2-p1)
        max = Math.max(height*width,max)

        if(nums[p1] <= nums[p2] ){
            //jr p1 cha value lahan ahe p2 peksha tr p1 cha index vadhvaycha karan p2 max value ahe so p2 cha max value height ne ahe so max value p2 la multiply karunach honar ahe 
            p1++
            //ata p1 cha value change zala so while loop again run karnar
        }else{
            p2--
        }
    }
    return max
}

console.log(optimalMaxArea([7,1,2,3,9]),"optimalMaxArea");



// Function to calculate the trapped rainwater in an array of heights.
function trappedRainwater(nums) {
    // Initialize a variable to store the total trapped rainwater.
    let maxTrappedRainWater = 0;

    // Iterate through each position (p) in the array.
    for (let p = 0; p < nums.length; p++) {
        // Initialize left and right pointers for each position.
        let leftp = p;
        let rightp = p;

        // Initialize variables to store the maximum heights on the left and right sides.
        let maxleft = 0;
        let maxright = 0;

        // Traverse the array to the left of the current position and find the maximum height.
        while (leftp >= 0) {
            maxleft = Math.max(maxleft, nums[leftp]);
            leftp--;
        }

        // Traverse the array to the right of the current position and find the maximum height.
        while (rightp <= nums.length - 1) {
            maxright = Math.max(maxright, nums[rightp]);
            rightp++;
        }

        // Calculate the current trapped rainwater at the current position.
        const currentRainWater = Math.min(maxleft, maxright) - nums[p];

        // If the current trapped rainwater is positive, add it to the total.
        if (currentRainWater > 0) {
            maxTrappedRainWater += currentRainWater;
        }
    }

    // Return the total trapped rainwater.
    return maxTrappedRainWater;
}

console.log(trappedRainwater([0,1,0,2,1,0,3,1,0,1,2]),"trappedRainwater");

function buildString(string){
    const stringArray = []
for (let i = 0; i < string.length; i++) {
    if(string[i] !== "#"){
        stringArray.push(string[i])
    }else{
        stringArray.pop()
    }
}

return stringArray
}


function hashcheckwithstring(s,t){
    const firststring = buildString(s)
    const secondString = buildString(t)
    if(JSON.stringify(firststring) !== JSON.stringify(secondString)){
        return false
    }
    return true
}

console.log(hashcheckwithstring("kb#c","ak#c"),"hashcheckwithstring");



function longestsubstringcalculation(string){
  let longestsubstring = 0
  let max = 0
  let seenChars = {}
  for (let i = 0; i < string.length; i++) {
     if(!seenChars[string[i]]){
        seenChars[string[i]] = true
        max++
        longestsubstring = Math.max(longestsubstring,max)
     } else{
        seenChars ={}
        max= 0
     }   
  }
  return longestsubstring
}

console.log(longestsubstringcalculation("acabb"),"longestsubstringcalculation");


function longestsubstringoptimalcalculation(string){
    let longestsubstring = 0
    let max = 0
    let seenChars = {};
    let left= 0
    for (let right = 0; right < string.length; right++) {
      const currentchar = string[right]  
      const previouslyseen = seenChars[currentchar]
      if(previouslyseen >= left){
         left = previouslyseen + 1
      }
      seenChars[currentchar] = right
      longestsubstring = Math.max(longestsubstring,right - left+1)
    }
    return longestsubstring
  }
  
  console.log(longestsubstringoptimalcalculation("abccabb"),"longestsubstringoptimalcalculation");




  const validatePalindrome = (s,left, right)=>{
    while(left < right){
      if(s[left] !== s[right]){
       return false
      }
      left++
      right--
    }
    return true
  }

  const isAlmostPalindrome = (s)=>{
     let left = 0 ;
     let right = s.length -1 
     while(left < right){
       if(s[left] !== s[right]){
        return validatePalindrome(s, left+1, right) || validatePalindrome(s, left, right-1)
       }
       left++
       right--
     }

     return true
  }

  console.log(isAlmostPalindrome("abccfba"),"isAlmostPalindrome");


  /*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  // ---- Generate our linked list ----
  const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);
  
  // ---- Generate our linked list ----
  
  const printList = (head) => {
    if(!head) {
      return;
    }
  
    console.log(head.val);
    printList(head.next);
  }
  
  // --------- Our solution -----------
  
  var reverseList = function(head) {
    let prev = null
    let current = head
    while(current){
        let next = current.next  //ethe next value store kela update krnya agodr


        current.next = prev // reverse krya sathi next value prev keli

        prev = current // prev value update krnya sathi because for next loop previous value hi current asnar
        current = next //current update kela to make loop iteration goes on


    }
    return prev
  };
  
  printList(linkedList);
  console.log('after reverse')
  printList(reverseList(linkedList))