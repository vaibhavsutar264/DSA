console.log("Hello, this is an external JavaScript file!");

function twosumcheck(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }
}

console.log(twosumcheck([2, 4, 5, 7, 3], 9), "twosumcheck");

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

console.log(optimizedTwoSumCheck([1, 3, 7, 9, 2], 11), "optimizedTwoSumCheck");

//max area calculation

function maxarea(nums) {
  let max = 0;
  let height;
  let width;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      height = Math.min(nums[i], nums[j]);
      width = j - i;
      max = Math.max(height * width, max);
    }
  }
  return max;
}

console.log(maxarea([7, 1, 2, 3, 9]), "maxarea");

function optimalMaxArea(nums) {
  let max = 0;
  let p1 = 0;
  let p2 = nums.length - 1;
  let height;
  let width;
  while (p1 < p2) {
    height = Math.min(nums[p1], nums[p2]);
    width = Math.abs(p2 - p1);
    max = Math.max(height * width, max);

    if (nums[p1] <= nums[p2]) {
      //jr p1 cha value lahan ahe p2 peksha tr p1 cha index vadhvaycha karan p2 max value ahe so p2 cha max value height ne ahe so max value p2 la multiply karunach honar ahe
      p1++;
      //ata p1 cha value change zala so while loop again run karnar
    } else {
      p2--;
    }
  }
  return max;
}

console.log(optimalMaxArea([7, 1, 2, 3, 9]), "optimalMaxArea");

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

console.log(
  trappedRainwater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]),
  "trappedRainwater"
);

function buildString(string) {
  const stringArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "#") {
      stringArray.push(string[i]);
    } else {
      stringArray.pop();
    }
  }

  return stringArray;
}

function hashcheckwithstring(s, t) {
  const firststring = buildString(s);
  const secondString = buildString(t);
  if (JSON.stringify(firststring) !== JSON.stringify(secondString)) {
    return false;
  }
  return true;
}

console.log(hashcheckwithstring("kb#c", "ak#c"), "hashcheckwithstring");

function longestsubstringcalculation(string) {
  let longestsubstring = 0;
  let max = 0;
  let seenChars = {};
  for (let i = 0; i < string.length; i++) {
    if (!seenChars[string[i]]) {
      seenChars[string[i]] = true;
      max++;
      longestsubstring = Math.max(longestsubstring, max);
    } else {
      seenChars = {};
      max = 0;
    }
  }
  return longestsubstring;
}

console.log(
  longestsubstringcalculation("acabb"),
  "longestsubstringcalculation"
);

function longestsubstringoptimalcalculation(string) {
  let longestsubstring = 0;
  let max = 0;
  let seenChars = {};
  let left = 0;
  for (let right = 0; right < string.length; right++) {
    const currentchar = string[right];
    const previouslyseen = seenChars[currentchar];
    if (previouslyseen >= left) {
      left = previouslyseen + 1;
    }
    seenChars[currentchar] = right;
    longestsubstring = Math.max(longestsubstring, right - left + 1);
  }
  return longestsubstring;
}

console.log(
  longestsubstringoptimalcalculation("abccabb"),
  "longestsubstringoptimalcalculation"
);

const validatePalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isAlmostPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        validatePalindrome(s, left + 1, right) ||
        validatePalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
};

console.log(isAlmostPalindrome("abccfba"), "isAlmostPalindrome");

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
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------

var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next; //ethe next value store kela update krnya agodr
    current.next = prev; // reverse krya sathi next value prev keli
    prev = current; // prev value update krnya sathi because for next loop previous value hi current asnar
    current = next; //current update kela to make loop iteration goes on
  }
  return prev;
};

var checkCycle = function (head) {
  let current = head;
  let seenNodes = {};
  while (!seenNodes[current]) {
    if (current.next == null) {
      return false;
    }
    seenNodes[current] = true;
    current = current.next;
  }
  return current;
};

printList(linkedList);
console.log("after reverse");
printList(reverseList(linkedList));

const parenthesis = {
  "{": "}",
  "[": "]",
  "(": ")",
};

function isValidParenthesis(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (parenthesis[s[i]]) {
      stack.push(s[i]);
    } else {
      let leftBracket = stack.pop();
      let rightbracket = parenthesis[leftBracket];
      if (rightbracket !== s[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isValidParenthesis("()[)){}"), "isValidParenthesis");

class queuesStructure {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(value) {
    this.in.push(value);
    return this.in;
  }
  dequeue() {
    if (this.in.length) {
      this.out.push(this.in.pop());
    }
  }
  peak() {
    if (this.out.length) {
      return this.out[this.out.length - 1];
    }
  }
  isEmpty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}

console.log(new queuesStructure().enqueue(2), "queuesStructure");
console.log(new queuesStructure().enqueue(2), "queuesStructure");
console.log(new queuesStructure().enqueue(2), "queuesStructure");
console.log(new queuesStructure().dequeue(), "queuesStructure");
console.log(new queuesStructure().dequeue(), "queuesStructure");
console.log(new queuesStructure().peak(), "queuesStructure");
console.log(new queuesStructure().isEmpty(), "queuesStructure");

//find the kth largest element of the quick sort

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const partitionIdx = function (array, left, right) {
  let pivotElement = array[right];
  let partition = left;
  for (let i = left; i < right; i++) {
    if (array[i] <= pivotElement) {
      swap(array, partition, i);
      partition++;
    }
  }

  swap(array, partition, right);
  return partition;
};

const quickSort = function (array, left, right) {
  if (left < right) {
    const partitionIndex = partitionIdx(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
};

const kthelement = function (array, kthelm) {
  const elementtofind = array.length - kthelm;
  quickSort(array, 0, array.length - 1);
  return array[elementtofind];
};

console.log(kthelement([5, 4, 3, 2, 1], 2), "kthelement");

//given an array of integers sorted in ascendingorder, return thestarting and ending index of a fiven target value in an array , i.e.[x,y]

// for example
//array = [1,3,3,5,5,5,6,8]
//if target value is 5 then
// first 5 is at index 3 and last 5 is at index 5
// so output is [3,5]

const binarysearch = function (array, left, right, target) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] == target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const checktargetValue = function (array, target) {
  const firstTarget = binarysearch(array, 0, array.length - 1, target);

  let startPos = firstTarget;
  let endPos = firstTarget;
  let temp1;
  let temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarysearch(array, 0, startPos - 1, target);
  }

  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarysearch(array, endPos + 1, array.length - 1, target);
  }

  endPos = temp2;
  return [startPos, endPos];
};

console.log(
  checktargetValue([1, 3, 5, 5, 5, 5, 6, 7, 8], 2),
  "checktargetValue"
);

//find the max deppth of a binary tree

// Define a class Node to represent nodes in a binary tree
class Node {
    constructor(item) {
      this.data = item;
      this.left = this.right = null;
    }
  }
  
  // Initialize a variable 'root' to represent the root of the binary tree
  let root;
  
  // Create a binary tree with the following structure:
  //        1
  //       / \
  //      2   3
  //     / \
  //    4   5
  root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  // Define a function to find the maximum depth of a binary tree
  const maxDepthOfTree = function (node, currentDepth) {
    // Base case: If the current node is null, return the current depth
    if (!node) {
      return currentDepth;
    }
  
    // Increment the current depth for the current node
    currentDepth++;
  
    // Recursively calculate the maximum depth by exploring both left and right subtrees
    return Math.max(
      maxDepthOfTree(node.left, currentDepth),
      maxDepthOfTree(node.right, currentDepth)
    );
  };
  
  // Call the maxDepthOfTree function with the root of the tree and initial depth 0
  console.log(maxDepthOfTree(root, 0), "maxDepthOfTree");



    // Create a binary tree with the level order:
  //        3
  //       / \
  //      9   20
  //         / \
  //        15   7
  //Input: root = [3,9,20,null,null,15,7]
  //Output: [[3],[9,20],[15,7]]

   const bfsInTree = function(root){
    const data = []
    const q= [root]
    while(q.length){
        let node = q.shift()
        data.push(node?.value)

        if(node.left){
            data.push(node?.left)
        }
        if(node.right){
            data.push(node?.right)
        }
    }
    return data
   }

   console.log(bfsInTree(root), "bfsInTree");




   /*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(values) {
      const queue = [this];
      let i = 0;
      while (queue.length > 0) {
        let current = queue.shift();
        for (let side of ["left", "right"]) {
          if (!current[side]) {
            if (values[i] !== null) {
              current[side] = new TreeNode(values[i]);
            }
            i++;
            if (i >= values.length) return this;
          }
          if (current[side]) queue.push(current[side]);
        }
      }
      return this;
    }
  }
  
  const tree = new TreeNode(3);
  tree.insert([6,1,9,2,null,4,null,5,null,null,null,null,8,null,null,null]);
  // ------- Code to generate our binary tree -------
  
  // ------- Our Solution -------
  const levelOrder = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];
    
    while(queue.length) {
      const currentLevelValues = [];
      let length = queue.length, count = 0;
  
      while(count < length) {
        const currentNode = queue.shift();
        
        currentLevelValues.push(currentNode.value);
        
        if(currentNode.left) {
          queue.push(currentNode.left)
        }
        
        if(currentNode.right) {
          queue.push(currentNode.right)
        }
  
        count++;
      }
      
      result.push(currentLevelValues);
    }
    
    return result;
  };
  
  console.log(levelOrder(tree),"levelOrder")


//   class Node {
//     constructor(item) {
//       this.data = item;
//       this.left = this.right = null;
//     }
//   }
  
  // Initialize a variable 'root' to represent the root of the binary tree
  
  // Create a binary tree with the following structure:
  //        1
  //       / \
  //      2   3
  //     / \
  //    4   5
    let rightviewroot;
    rightviewroot = new Node(1);
  rightviewroot.left = new Node(2);
  rightviewroot.right = new Node(3);
  rightviewroot.left.left = new Node(4);
  rightviewroot.left.right = new Node(5);
  
  // Function to get the right view of the binary tree

  const getRightView = function (root) {
    // Result array to store the values of nodes on the right side
    const rightViewArray = [];
  
    // Queue for level order traversal
    const queue = [];
  
    if (root) {
      // Enqueue the root node
      queue.push(root);
  
      // Perform level order traversal
      while (queue.length > 0) {
        // Get the size of the current level
        const levelSize = queue.length;
  
        // Traverse the current level and add the last node to the right view array
        for (let i = 0; i < levelSize; i++) {
          const node = queue.shift();
  
          // Add the last node of each level to the right view array
          if (i === levelSize - 1) {
            rightViewArray.push(node.data);
          }
  
          // Enqueue the left and right children, if they exist
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
        }
      }
    }
  
    return rightViewArray;
  };
  
  // Call the getRightView function with the root of the tree
  console.log(getRightView(rightviewroot), "getRightView");


  class TreeNodeForNodeCount {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(values) {
      const queue = [this];
      let i = 0;
      while (queue.length > 0) {
        let current = queue.shift();
        for (let side of ["left", "right"]) {
          if (!current[side]) {
            if (values[i] !== null) {
              current[side] = new TreeNode(values[i]);
            }
            i++;
            if (i >= values.length) return this;
          }
          if (current[side]) queue.push(current[side]);
        }
      }
      return this;
    }
  }
  
  const treeForCountingNodes = new TreeNodeForNodeCount();
  treeForCountingNodes.insert([1,1,1,1,1,1,1,1,1,1,1, null, null, null]);

  const gettotalheightoftree = (root)=>{
    let height = 0
    while(root.left!== null){
      height++
      root = root.left
    }
    return height
  }

  const nodeExists = function(idxToFind, height, node) {
    let left = 0, right = Math.pow(2, height) - 1, count = 0;
    
    while(count < height) {
      const midOfNode = Math.ceil((left + right) / 2);
      
      if(idxToFind >= midOfNode) {
        node = node.right;
        left = midOfNode;
      } else {
        node = node.left;
        right = midOfNode - 1;
      }
      
      count++;
    }
    
    return node !== null;
  }



  const getnumberofnodesinatree = function (root) {
    // Result array to store the values of nodes on the right side
    const totalheight = gettotalheightoftree(root)
 
    const upperNodes = Math.pow(2,totalheight) - 1

    let left = 0 
    let right = upperNodes

    while(left<right){
      const indextofind = Math.ceil((left+right)/2)
      if(nodeExists(indextofind, totalheight, root)){
        left = indextofind
      }else{
        right = indextofind -1 
      }
    }
     return upperNodes + left + 1
  };


  
  // Call the getRightView function with the root of the tree
  console.log(getnumberofnodesinatree(treeForCountingNodes), "getnumberofnodesinatree");

  //find the tree is valid or not means all the left value of a node should be lesser than root value and allthe right side value of root should be greaterthan root value


  const dfs = function(root, min, max){
    if(root.left){
     if(!dfs(root.left,min,root.value)){
      return false
     }
    }
    if(root.right){
     if(!dfs(root.right,root.value,max)){
      return false
     }
    }
    return true
  }

  const isTreeValid = (root)=>{
    if(!root) return false
    return dfs(root,-Infinity,Infinity)
  }


  //heap datastructure

  class heapDatastructure{
    constructor(comparator = (a,b)=>a>b){
      this._heap = [];
      this._comparator = comparator;


    }

    size(){
      return this._heap.length;
    }

    peek(){
      return this._heap[0]
    }

    isEmpty(){
      return this._heap.length == 0
    }

    _parent(index){
      return Math.floor((index - 1)/2);
    }
    _leftChild(index){
      return index*2 + 1
    }

    _rightChild(index){
      return index*2 + 2
    }j
    _swap(i,j){
      [this._heap[i],this._heap[j]] = [this._heap[j],this._heap[i]]
    }

    _compare(i,j){
      return this._comparator(this._heap[i],)
    }
    _shiftUp(){
      let nodeIndex = this.size() - 1
      while(nodeIndex > 0 && this._comparator(nodeIndex, this._parent(nodeIndex))){
        this._swap(nodeIndex,this._parent(nodeIndex))
        nodeIndex = this._parent(nodeIndex)
      }
    }

    _push(val){
      this._heap.push(val)
      this._shiftUp()
      return this.size()
    }


  }


  const bfsdirectionstotraverseinfoursideinarray = [[-1,0],[0,1],[1,0],[0,-1]]
  const dfsfortwodimensionalarray = (matrix,row,col, seen, values)=>{
    if(row<0 || col < 0 || row > matrix.length -1 || col > matrix[0].length -1 || seen[row][col] == true) return false

    values.push(matrix[row][col])

    seen[row][col] = true
    
    for (let i = 0; i < bfsdirectionstotraverseinfoursideinarray.length; i++) {
      const currentdir = bfsdirectionstotraverseinfoursideinarray[i]
      dfsfortwodimensionalarray(matrix,row + currentdir[0], col + currentdir[1],seen,values)
      
    }
     
  }


  const twodimensionalarraytraversal = (matrix)=>{
      let seen = new Array(matrix.length).fill(0).map((item)=> new Array(matrix[0].length).fill(false))
      let values = []
      dfsfortwodimensionalarray(matrix,0,0,seen,values)
      return values
  }

  console.log(twodimensionalarraytraversal([[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24]]), "twodimensionalarraytraversal")

  const bfsdirectionstocountNumberOfIslands = [[-1,0],[0,1],[1,0],[0,-1]]
  const countNumberOfIslands = function(matrix){
    if(!matrix) return
    let numberofislands = 0 
    for (let row = 0; row < matrix.length; row++) {
       for (let col = 0; col < matrix[0].length; col++) {
         const currentElement = matrix[row][col]
         if(currentElement === 1){
          numberofislands++
          matrix[row][col] = 0
          const queue = []
          queue.push([row,col])

          while(queue.length){
            const currentIslandPos = queue.shift()
            const currentIslandRow = currentIslandPos[0]
            const currentIslandCol = currentIslandPos[1]
            for (let i = 0; i < bfsdirectionstocountNumberOfIslands.length; i++) {
              const currentRowDir = bfsdirectionstocountNumberOfIslands[i];
              let nextRow = currentIslandRow + currentRowDir[0]
              let nextCol = currentIslandCol + currentRowDir[1]
              if(nextRow < 0 || nextCol < 0 || nextRow >= matrix.length || nextCol >= matrix[0].length) continue
              // else if(matrix[nextRow][nextCol] == 1){
                if(matrix[nextRow][nextCol] == 1){
                queue.push([nextRow,nextCol]);
                matrix[nextRow][nextCol] = 0
              }
              
            }
          }
         }
        
       }      
    }
    return numberofislands
  }

  console.log(countNumberOfIslands([
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1]
  ]))



  const rottenOranges = function(matrix){
    const queue = []
    let freshOranges = 0
    for (let row = 0; row < matrix.length; row++) {
       for (let col = 0; col < matrix[0].length; col++) {
          if(matrix[row][col] == 2){
            queue.push([row,col])
          }

          if(matrix[row][col] == 1){
            freshOranges++
          }
         
       }      
    }
  let currentQueueSize = queue.length
  let minutes = 0

     while(queue.length) {
      if(currentQueueSize == 0){
        minutes++
        currentQueueSize = queue.length
      }

      let currentOrangeIndex = queue.shift()
      currentQueueSize--
      let currentOrangeIndexRow = currentOrangeIndex[0]
      let currentOrangeIndexCol = currentOrangeIndex[1]
      for (let i = 0; i < bfsdirectionstotraverseinfoursideinarray.length; i++) {
        let currentDir = bfsdirectionstotraverseinfoursideinarray[i]
        let nextRow = currentOrangeIndexRow + currentDir[0]
        let nextCol = currentOrangeIndexCol + currentDir[1]
        if(nextRow < 0 || nextCol < 0 || nextRow >= matrix.length || nextCol >= matrix[0].length) continue
        if(matrix[nextRow][nextCol] == 1){
          matrix[nextRow][nextCol] = 2
          freshOranges--
          queue.push([nextRow,nextCol])
        }
      }

      
     }

     if(freshOranges > 0){
      return -1
     }

     return minutes
  }


  console.log(rottenOranges([
    [2, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1]
  ]),"rottenOranges")




  const bfsingraphs = (graph)=>{
    const queue = [0]
    let values = []
    let seen = {}
    while(queue.length){
      const vertex = queue.shift()
      seen[vertex]= true
      values.push(vertex)
      const connections = graph[vertex]
      for (let i = 0; i < connections.length; i++) {
        const element = connections[i];
        if(!seen[element]){
          queue.push(element)
        }
        
      }

    }

   return values
  
  }

  console.log(bfsingraphs([
    [1,3],
    [0],
    [3,8],
    [0,4,5,2],
    [3,6],
    [3],
    [4,7],
    [6],
    [2]
  ]),"bfsingraphs")


  const dfsingraphs = (vertex,values,seen,graph)=>{
   values.push(vertex)
   seen[vertex] = true
   const connection = graph[vertex]
   for (let i = 0; i < connection.length; i++) {
    const element = connection[i];
    if(!seen[element]){
      dfsingraphs(element,values,seen,graph)
    }
   }

   return values
  
  }

  console.log(dfsingraphs(0,[],{},[
    [1,3],
    [0],
    [3,8],
    [0,4,5,2],
    [3,6],
    [3],
    [4,7],
    [6],
    [2]
  ]),"dfsingraphs")

  const dfsforinformtime = (currentId,adjlist,informTime)=>{
    if(adjlist[currentId].length === 0) {
      return 0;
    }
     let max = 0
     let subordinates = adjlist[currentId]
     for (let i = 0; i < subordinates.length; i++) {
      const element = subordinates[i];
      max = Math.max(max,dfsforinformtime(element,adjlist,informTime))
      
     }
     return max + informTime[currentId]
  }


  const dfsofgraphswithmaxInformTimeOfEmployees = (n,headId,managers,informTime)=>{
      let adjList = managers.map(()=>[])
      for (let employee = 0; employee < n; employee++) {
          let manager = managers[employee]
          if(managers[employee] == -1) continue
          adjList[manager].push(employee)       
      }
      return dfsforinformtime(headId,adjList,informTime)  
  }

  console.log(dfsofgraphswithmaxInformTimeOfEmployees(8,4,[2,2,4,6,-1,4,4,5],[0,0,4,0,7,3,6,0]),"dfsofgraphswithmaxInformTimeOfEmployees")


  const iscoursecomplete = (n,prerequisist)=>{
    let adjList = new Array(n).fill(0).map((item)=> [])
    for (let i = 0; i < prerequisist.length; i++) {
      const element = prerequisist[i];
      adjList[element[1]].push(element[0])
      
    }

    for (let v = 0; v < n; v++) {
      const element = adjList[v];
      let queue = []
      let seen = {}
      for (let i = 0; i < element.length; i++) {
        const elementOFAdjList = element[i];
        queue.push(elementOFAdjList)
        
      }

      while(queue.length){
        const currentElm = queue.shift()
        seen[currentElm] = true
        if(currentElm === v) return false;
        const adjacent = adjList[currentElm];
        for(let i = 0; i < adjacent.length; i++) {
          const next = adjacent[i];
          if(!seen[next]) {
            queue.push(next);
          }
        }
      }
      
    }

    return true
  }

  console.log(iscoursecomplete(6,[[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]),"dfsofgraphswithmaxInformTimeOfEmployees")

  //dijkstra algorithm

  const times =[[1,2,9],[1,4,2],[2,5,1],[4,2,4],[4,5,6],[3,2,3],[5,3,7],[3,1,5]]
  const k= 1
  const N=5
  // const networkTotalTime = (times,k,N)=>{
  //    const distances = new Array(N).fill(Infinity);
  //    const adjList = distances.map(()=>[])
  //    distances[k-1] = 0
  //    for (let i = 0; i < times.length; i++) {
  //     const source = times[i][0]
  //     const target = times[i][1]
  //     const weight = times[i][2]

  //     adjList[source-1].push([target,weight])
      
  //    }

  //    const heap = new heapDatastructure((a,b)=> distances[a] < distances[b])

  //    heap._heap.push(k-1)

  //    while(!heap.isEmpty()){
  //     const currentVertex = heap._heap.shift()
  //     const adj = adjList[currentVertex]
  //     for (let i = 0; i < adj.length; i++) {
  //       const neighboringVertex = adj[i][0];
  //       const neighboringVertexWeight = adj[i][1];

  //       if(distances[currentVertex] + neighboringVertexWeight < distances[neighboringVertex]){
  //         distances[neighboringVertex] = distances[currentVertex] + neighboringVertexWeight
  //         heap._heap.push(neighboringVertex)
  //       }
        
  //     }

  //    }

  // }

  const networkTotalTime = (times,k,N) =>{
    const distances = new Array(N).fill(Infinity)
    const adjList = distances.map(()=> [])
    distances[k-1]= 0
    for (let i = 0; i < times.length; i++) {
      const source = times[i][0];
      const target = times[i][1];
      const weight = times[i][2];
      adjList[source-1].push([target,weight])
    }
    const heap = new heapDatastructure((a,b)=> distances[a] < distances[b])

    heap._heap.push(k-1)

    while(!heap.isEmpty()){
      const currentvertex = heap._heap.pop()
      const adjToCurrentVertex = adjList[currentvertex]
      for (let i = 0; i < adjToCurrentVertex.length; i++) {
        const neighboringVertexses = adjToCurrentVertex[i][0];
        const neighboringVertexsesWeight = adjToCurrentVertex[i][1];
        if(distances[currentvertex] + neighboringVertexsesWeight < distances[neighboringVertexses]){
          distances[neighboringVertexses] = distances[currentvertex] + neighboringVertexsesWeight
          heap._heap.push(currentvertex)
        }
        
      }
    }
    const ans = Math.max(...distances)
    return ans === Infinity ? -1 : ans
  }

  
  console.log(networkTotalTime(times, k,N),"networkTotalTime")


  const minCost = (i, costArray)=>{
    if(i == 0 || i==1) return costArray[i]
    return costArray[i]+ Math.min(minCost(i-1,costArray),minCost(i-2,costArray))
  }

  const minCostClimbing = (costArray)=>{
     let n = costArray.length
     return Math.min(minCost(n-1,costArray),minCost(n-2,costArray))
  }

  console.log(minCostClimbing([20,15,30,6],"minCostClimbing"));

  const optimizedminCost = (i, costArray,dynamicProgrammingOptimization)=>{
    if(i == 0 || i==1) return costArray[i]
    if(dynamicProgrammingOptimization[i]) return dynamicProgrammingOptimization[i]
    dynamicProgrammingOptimization[i] = costArray[i]+ Math.min(optimizedminCost(i-1,costArray,dynamicProgrammingOptimization),optimizedminCost(i-2,costArray,dynamicProgrammingOptimization))
    return dynamicProgrammingOptimization[i]
  }

  const optimizedminCostClimbing = (costArray)=>{
     let n = costArray.length
     let dynamicProgrammingOptimization = []
     return Math.min(optimizedminCost(n-1,costArray,dynamicProgrammingOptimization),optimizedminCost(n-2,costArray,dynamicProgrammingOptimization))
  }

  console.log(optimizedminCostClimbing([20,15,30,6],"optimizedminCostClimbing"));

  const optimizedBottomUpminCostClimbing = (costArray)=>{
    let n = costArray.length
    let dynamicProgrammingOptimization = []
    for (let i = 0; i < n; i++) {
      if(i<2){
        dynamicProgrammingOptimization[i] = costArray[i]
      }else{
        dynamicProgrammingOptimization[i] = costArray[i] + Math.min(dynamicProgrammingOptimization[i-1],dynamicProgrammingOptimization[i-2])
      }
    }
    return Math.min(dynamicProgrammingOptimization[n-1],dynamicProgrammingOptimization[n-2])
 }

 console.log(optimizedBottomUpminCostClimbing([20,15,30,6]),"optimizedBottomUpminCostClimbing");

 // in a chess how much probability of a knight to step out of chess board

//  [
//   [0,1,2,3,4,5],
//   [0,1,2,3,4,5],
//   [0,1,2,3,4,5],
//   [0,1,2,3,4,5],
//   [0,1,2,3,4,5],
//   [0,1,2,3,4,5]
// ]

const directions = [
  [-2,-1],
  [-1,2],
  [1,-2],
  [2,-1],
  [2,1],
  [1,2],
  [-1,2],
  [-2,1],
]

 const knightProbability = (n,k,r,c)=>{
  if(r<0 || c< 0 || n < 0 || r>n || c>n){
    return 0
  }
  if(k === 0){
    return 1
  }

  let res = 0
  for (let index = 0; index < directions.length; index++) {
  let current = directions[index]
    res += knightProbability(n,k-1,r+current[0],c+current[1])/8
    
  }

  return res
 }

 console.log(knightProbability(6,3,2,2),"knightProbability");
  
