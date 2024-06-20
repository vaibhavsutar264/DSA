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

//max area calculation maxbetween 7 and 9 is 7 and deferencein indexes of both is 4-0=4 so 7*4 = 28

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
  // let height;
  // let width;
  while (p1 < p2) {
    let height = Math.min(nums[p1], nums[p2]);
    let width = Math.abs(p2 - p1);
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

// function longestsubstringcalculation(string) {
//   let longestsubstring = 0;
//   let max = 0;
//   let seenChars = {};
//   for (let i = 0; i < string.length; i++) {
//     if (!seenChars[string[i]]) {
//       seenChars[string[i]] = true;
//       max++;
//       longestsubstring = Math.max(longestsubstring, max);
//     } else {
//       seenChars = {};
//       max = 0;
//     }
//   }
//   return longestsubstring;
// }

// console.log(
//   longestsubstringcalculation("acabb"),
//   "longestsubstringcalculation"
// );

function longestsubstringcalculation(string) {
  let left = 0;
  let right = 0;
  let max = 0;
  let seen = {};
  while (right < string.length) {
    if (!seen[string[right]]) {
      seen[string[right]] = true;
      max = Math.max(max, right - left + 1);
      right++;
    } else {
      while (string[left] !== string[right]) {
        seen[string[left]] = false;
        left++;
      }
      seen[string[left]] = false;
      left++;
    }
    right++;
  }

  return max;
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
console.log(linkedList, "linkedList");

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------

// var reverseList = function (head) {
//   let prev = null;
//   let current = head;
//   while (current) {
//     let next = current.next; //ethe next value store kela update krnya agodr
//     current.next = prev; // reverse krya sathi next value prev keli
//     prev = current; // prev value update krnya sathi because for next loop previous value hi current asnar
//     current = next; //current update kela to make loop iteration goes on
//   }
//   return prev;
// };

var reverseList = function (head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// var checkCycle = function (head) {
//   let current = head;
//   let seenNodes = {};
//   while (!seenNodes[current]) {
//     if (current.next == null) {
//       return false;
//     }
//     seenNodes[current] = true;
//     current = current.next;
//   }
//   return current;
// };

var checkCycle = (head) => {
  let current = head;
  let seen = {};
  while (!seen[current.val]) {
    if (current.next == null) {
      return false;
    }
    seen[current.val] = true;
    current = current.next;
  }
  return true;
};

console.log(checkCycle(linkedList), "checkCycle");
printList(linkedList);
console.log("after reverse");
// printList(reverseList(linkedList));

function isValidParenthesis(s) {
  const parenthesis = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
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

console.log(isValidParenthesis("()][{}"), "isValidParenthesis");

// class queuesStructure {
//   constructor() {
//     this.in = [];
//     this.out = [];
//   }

//   enqueue(value) {
//     this.in.push(value);
//     return this.in;
//   }
//   dequeue() {
//     if (this.in.length) {
//       this.out.push(this.in.pop());
//     }
//   }
//   peak() {
//     if (this.out.length) {
//       return this.out[this.out.length - 1];
//     }
//   }
//   isEmpty() {
//     return this.in.length === 0 && this.out.length === 0;
//   }
// }

// console.log(new queuesStructure().enqueue(2), "queuesStructure");
// console.log(new queuesStructure().enqueue(2), "queuesStructure");
// console.log(new queuesStructure().enqueue(2), "queuesStructure");
// console.log(new queuesStructure().dequeue(), "queuesStructure");
// console.log(new queuesStructure().dequeue(), "queuesStructure");
// console.log(new queuesStructure().peak(), "queuesStructure");
// console.log(new queuesStructure().isEmpty(), "queuesStructure");

//find the kth largest element of the quick sort

class queuesStructure {
  constructor() {
    this.in = [];
    this.out = [];
  }
  enqueue(val) {
    this.in.push(val);
    console.log(this.in);
    return this.in;
  }
  dequeue() {
    if (this.in.length > 0) {
      this.out.push(this.in.pop());
    }
  }
  peak() {
    return this.in[this.in.length - 1];
  }
  isEmpty() {
    return this.in.length === 0 && this.out.length == 0;
  }
}
const queue = new queuesStructure();
console.log(queue.enqueue(2), "queuesStructure");
console.log(queue.enqueue(4), "queuesStructure");
console.log(queue.dequeue(), "dequeue");
console.log(queue.peak(), "peak");
console.log(queue.isEmpty(), "isEmpty");
console.log(queue.enqueue(99), "queuesStructure");

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
  checktargetValue([1, 3, 5, 5, 5, 5, 6, 7, 8], 5),
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

class tempNodeP {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let rootp = new tempNodeP(1);
rootp.left = new tempNodeP(1);
rootp.right = new tempNodeP(1);
rootp.left.left = new tempNodeP(1);
rootp.right.left = new tempNodeP(1);

const checkMaxTreeDepth = (node, currentDepth) => {
  if (!node) {
    return currentDepth;
  }
  currentDepth++;
  return Math.max(
    checkMaxTreeDepth(node.left, currentDepth),
    checkMaxTreeDepth(node.right, currentDepth)
  );
};

console.log(checkMaxTreeDepth(rootp, 0), "checkMaxTreeDepth");

// Create a binary tree with the level order:
//        3
//       / \
//      9   20
//         / \
//        15   7
//Input: root = [3,9,20,null,null,15,7]
//Output: [[3],[9,20],[15,7]]

const bfsInTree = function (root) {
  const data = [];
  const q = [root];
  while (q.length) {
    let node = q.shift();
    data.push(node?.value);

    if (node.left) {
      data.push(node?.left);
    }
    if (node.right) {
      data.push(node?.right);
    }
  }
  return data;
};

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
tree.insert([
  6,
  1,
  9,
  2,
  null,
  4,
  null,
  5,
  null,
  null,
  null,
  null,
  8,
  null,
  null,
  null,
]);
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
const levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const currentLevelValues = [];
    let length = queue.length,
      count = 0;

    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      count++;
    }

    result.push(currentLevelValues);
  }

  return result;
};

console.log(levelOrder(tree), "levelOrder");

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
treeForCountingNodes.insert([
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  null,
  null,
  null,
]);

const gettotalheightoftree = (root) => {
  let height = 0;
  while (root.left !== null) {
    height++;
    root = root.left;
  }
  return height;
};

const nodeExists = function (idxToFind, height, node) {
  let left = 0,
    right = Math.pow(2, height) - 1,
    count = 0;

  while (count < height) {
    const midOfNode = Math.ceil((left + right) / 2);

    if (idxToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }

    count++;
  }

  return node !== null;
};

const getnumberofnodesinatree = function (root) {
  // Result array to store the values of nodes on the right side
  const totalheight = gettotalheightoftree(root);

  const upperNodes = Math.pow(2, totalheight) - 1;

  let left = 0;
  let right = upperNodes;

  while (left < right) {
    const indextofind = Math.ceil((left + right) / 2);
    if (nodeExists(indextofind, totalheight, root)) {
      left = indextofind;
    } else {
      right = indextofind - 1;
    }
  }
  return upperNodes + left + 1;
};

// Call the getRightView function with the root of the tree
console.log(
  getnumberofnodesinatree(treeForCountingNodes),
  "getnumberofnodesinatree"
);

//find the tree is valid or not means all the left value of a node should be lesser than root value and allthe right side value of root should be greaterthan root value

const dfs = function (root, min, max) {
  if (root.left) {
    if (!dfs(root.left, min, root.value)) {
      return false;
    }
  }
  if (root.right) {
    if (!dfs(root.right, root.value, max)) {
      return false;
    }
  }
  return true;
};

const isTreeValid = (root) => {
  if (!root) return false;
  return dfs(root, -Infinity, Infinity);
};

//heap datastructure

class heapDatastructure {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length == 0;
  }

  _parent(index) {
    return Math.floor((index - 1) / 2);
  }
  _leftChild(index) {
    return index * 2 + 1;
  }

  _rightChild(index) {
    return index * 2 + 2;
  }
  j;
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i]);
  }
  _shiftUp() {
    let nodeIndex = this.size() - 1;
    while (
      nodeIndex > 0 &&
      this._comparator(nodeIndex, this._parent(nodeIndex))
    ) {
      this._swap(nodeIndex, this._parent(nodeIndex));
      nodeIndex = this._parent(nodeIndex);
    }
  }

  _push(val) {
    this._heap.push(val);
    this._shiftUp();
    return this.size();
  }
}

const bfsdirectionstotraverseinfoursideinarray = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const dfsfortwodimensionalarray = (matrix, row, col, seen, values) => {
  if (
    row < 0 ||
    col < 0 ||
    row > matrix.length - 1 ||
    col > matrix[0].length - 1 ||
    seen[row][col] == true
  )
    return false;

  values.push(matrix[row][col]);

  seen[row][col] = true;

  for (let i = 0; i < bfsdirectionstotraverseinfoursideinarray.length; i++) {
    const currentdir = bfsdirectionstotraverseinfoursideinarray[i];
    dfsfortwodimensionalarray(
      matrix,
      row + currentdir[0],
      col + currentdir[1],
      seen,
      values
    );
  }
};

const twodimensionalarraytraversal = (matrix) => {
  let seen = new Array(matrix.length)
    .fill(0)
    .map((item) => new Array(matrix[0].length).fill(false));
  let values = [];
  dfsfortwodimensionalarray(matrix, 0, 0, seen, values);
  return values;
};

console.log(
  twodimensionalarraytraversal([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
  ]),
  "twodimensionalarraytraversal"
);

const bfsdirectionstocountNumberOfIslands = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const countNumberOfIslands = function (matrix) {
  if (!matrix) return;
  let numberofislands = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      const currentElement = matrix[row][col];
      if (currentElement === 1) {
        numberofislands++;
        matrix[row][col] = 0;
        const queue = [];
        queue.push([row, col]);

        while (queue.length) {
          const currentIslandPos = queue.shift();
          const currentIslandRow = currentIslandPos[0];
          const currentIslandCol = currentIslandPos[1];
          for (let i = 0; i < bfsdirectionstocountNumberOfIslands.length; i++) {
            const currentRowDir = bfsdirectionstocountNumberOfIslands[i];
            let nextRow = currentIslandRow + currentRowDir[0];
            let nextCol = currentIslandCol + currentRowDir[1];
            if (
              nextRow < 0 ||
              nextCol < 0 ||
              nextRow >= matrix.length ||
              nextCol >= matrix[0].length
            )
              continue;
            // else if(matrix[nextRow][nextCol] == 1){
            if (matrix[nextRow][nextCol] == 1) {
              queue.push([nextRow, nextCol]);
              matrix[nextRow][nextCol] = 0;
            }
          }
        }
      }
    }
  }
  return numberofislands;
};

console.log(
  countNumberOfIslands([
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
  ])
);

const rottenOranges = function (matrix) {
  const queue = [];
  let freshOranges = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] == 2) {
        queue.push([row, col]);
      }

      if (matrix[row][col] == 1) {
        freshOranges++;
      }
    }
  }
  let currentQueueSize = queue.length;
  let minutes = 0;

  while (queue.length) {
    if (currentQueueSize == 0) {
      minutes++;
      currentQueueSize = queue.length;
    }

    let currentOrangeIndex = queue.shift();
    currentQueueSize--;
    let currentOrangeIndexRow = currentOrangeIndex[0];
    let currentOrangeIndexCol = currentOrangeIndex[1];
    for (let i = 0; i < bfsdirectionstotraverseinfoursideinarray.length; i++) {
      let currentDir = bfsdirectionstotraverseinfoursideinarray[i];
      let nextRow = currentOrangeIndexRow + currentDir[0];
      let nextCol = currentOrangeIndexCol + currentDir[1];
      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= matrix.length ||
        nextCol >= matrix[0].length
      )
        continue;
      if (matrix[nextRow][nextCol] == 1) {
        matrix[nextRow][nextCol] = 2;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }

  if (freshOranges > 0) {
    return -1;
  }

  return minutes;
};

console.log(
  rottenOranges([
    [2, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
  ]),
  "rottenOranges"
);

const bfsingraphs = (graph) => {
  const queue = [0];
  let values = [];
  let seen = {};
  while (queue.length) {
    const vertex = queue.shift();
    seen[vertex] = true;
    values.push(vertex);
    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const element = connections[i];
      if (!seen[element]) {
        queue.push(element);
      }
    }
  }

  return values;
};

console.log(
  bfsingraphs([
    [1, 3],
    [0],
    [3, 8],
    [0, 4, 5, 2],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2],
  ]),
  "bfsingraphs"
);

const dfsingraphs = (vertex, values, seen, graph) => {
  values.push(vertex);
  seen[vertex] = true;
  const connection = graph[vertex];
  for (let i = 0; i < connection.length; i++) {
    const element = connection[i];
    if (!seen[element]) {
      dfsingraphs(element, values, seen, graph);
    }
  }

  return values;
};

console.log(
  dfsingraphs(0, [], {}, [
    [1, 3],
    [0],
    [3, 8],
    [0, 4, 5, 2],
    [3, 6],
    [3],
    [4, 7],
    [6],
    [2],
  ]),
  "dfsingraphs"
);

const dfsforinformtime = (currentId, adjlist, informTime) => {
  if (adjlist[currentId].length === 0) {
    return 0;
  }
  let max = 0;
  let subordinates = adjlist[currentId];
  for (let i = 0; i < subordinates.length; i++) {
    const element = subordinates[i];
    max = Math.max(max, dfsforinformtime(element, adjlist, informTime));
  }
  return max + informTime[currentId];
};

const dfsofgraphswithmaxInformTimeOfEmployees = (
  n,
  headId,
  managers,
  informTime
) => {
  let adjList = managers.map(() => []);
  for (let employee = 0; employee < n; employee++) {
    let manager = managers[employee];
    if (managers[employee] == -1) continue;
    adjList[manager].push(employee);
  }
  return dfsforinformtime(headId, adjList, informTime);
};

console.log(
  dfsofgraphswithmaxInformTimeOfEmployees(
    8,
    4,
    [2, 2, 4, 6, -1, 4, 4, 5],
    [0, 0, 4, 0, 7, 3, 6, 0]
  ),
  "dfsofgraphswithmaxInformTimeOfEmployees"
);

const iscoursecomplete = (n, prerequisist) => {
  let adjList = new Array(n).fill(0).map((item) => []);
  for (let i = 0; i < prerequisist.length; i++) {
    const element = prerequisist[i];
    adjList[element[1]].push(element[0]);
  }

  for (let v = 0; v < n; v++) {
    const element = adjList[v];
    let queue = [];
    let seen = {};
    for (let i = 0; i < element.length; i++) {
      const elementOFAdjList = element[i];
      queue.push(elementOFAdjList);
    }

    while (queue.length) {
      const currentElm = queue.shift();
      seen[currentElm] = true;
      if (currentElm === v) return false;
      const adjacent = adjList[currentElm];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
};

console.log(
  iscoursecomplete(6, [
    [1, 0],
    [2, 1],
    [2, 5],
    [0, 3],
    [4, 3],
    [3, 5],
    [4, 5],
  ]),
  "dfsofgraphswithmaxInformTimeOfEmployees"
);

//dijkstra algorithm

const times = [
  [1, 2, 9],
  [1, 4, 2],
  [2, 5, 1],
  [4, 2, 4],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];
const k = 1;
const N = 5;
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

const networkTotalTime = (times, k, N) => {
  const distances = new Array(N).fill(Infinity);
  const adjList = distances.map(() => []);
  distances[k - 1] = 0;
  for (let i = 0; i < times.length; i++) {
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    adjList[source - 1].push([target, weight]);
  }
  const heap = new heapDatastructure((a, b) => distances[a] < distances[b]);

  heap._heap.push(k - 1);

  while (!heap.isEmpty()) {
    const currentvertex = heap._heap.pop();
    const adjToCurrentVertex = adjList[currentvertex];
    for (let i = 0; i < adjToCurrentVertex.length; i++) {
      const neighboringVertexses = adjToCurrentVertex[i][0];
      const neighboringVertexsesWeight = adjToCurrentVertex[i][1];
      if (
        distances[currentvertex] + neighboringVertexsesWeight <
        distances[neighboringVertexses]
      ) {
        distances[neighboringVertexses] =
          distances[currentvertex] + neighboringVertexsesWeight;
        heap._heap.push(currentvertex);
      }
    }
  }
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

console.log(networkTotalTime(times, k, N), "networkTotalTime");

const minCost = (i, costArray) => {
  if (i == 0 || i == 1) return costArray[i];
  return (
    costArray[i] +
    Math.min(minCost(i - 1, costArray), minCost(i - 2, costArray))
  );
};

const minCostClimbing = (costArray) => {
  let n = costArray.length;
  return Math.min(minCost(n - 1, costArray), minCost(n - 2, costArray));
};

console.log(minCostClimbing([20, 15, 30, 6], "minCostClimbing"));

const optimizedminCost = (i, costArray, dynamicProgrammingOptimization) => {
  if (i == 0 || i == 1) return costArray[i];
  if (dynamicProgrammingOptimization[i])
    return dynamicProgrammingOptimization[i];
  dynamicProgrammingOptimization[i] =
    costArray[i] +
    Math.min(
      optimizedminCost(i - 1, costArray, dynamicProgrammingOptimization),
      optimizedminCost(i - 2, costArray, dynamicProgrammingOptimization)
    );
  return dynamicProgrammingOptimization[i];
};

const optimizedminCostClimbing = (costArray) => {
  let n = costArray.length;
  let dynamicProgrammingOptimization = [];
  return Math.min(
    optimizedminCost(n - 1, costArray, dynamicProgrammingOptimization),
    optimizedminCost(n - 2, costArray, dynamicProgrammingOptimization)
  );
};

console.log(
  optimizedminCostClimbing([20, 15, 30, 6], "optimizedminCostClimbing")
);

const optimizedBottomUpminCostClimbing = (costArray) => {
  let n = costArray.length;
  let dynamicProgrammingOptimization = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      dynamicProgrammingOptimization[i] = costArray[i];
    } else {
      dynamicProgrammingOptimization[i] =
        costArray[i] +
        Math.min(
          dynamicProgrammingOptimization[i - 1],
          dynamicProgrammingOptimization[i - 2]
        );
    }
  }
  return Math.min(
    dynamicProgrammingOptimization[n - 1],
    dynamicProgrammingOptimization[n - 2]
  );
};

console.log(
  optimizedBottomUpminCostClimbing([20, 15, 30, 6]),
  "optimizedBottomUpminCostClimbing"
);

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
  [-2, -1],
  [-1, 2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
  [-1, 2],
  [-2, 1],
];

const knightProbability = (n, k, r, c) => {
  if (r < 0 || c < 0 || n < 0 || r > n || c > n) {
    return 0;
  }
  if (k == 0) {
    return 1;
  }
  let res = 0;
  for (let index = 0; index < directions.length; index++) {
    let current = directions[index];
    res += knightProbability(n, k - 1, r + current[0], c + current[1]) / 8;
  }
  return res;
};

console.log(knightProbability(6, 3, 2, 2), "knightProbability");

const getBoxId = function (row, col) {
  const rowVal = Math.floor(row / 3) * 3;
  const colVal = Math.floor(col / 3);

  return rowVal + colVal;
};

const isValid = function (box, row, col, num) {
  if (box[num] || row[num] || col[num]) {
    return false;
  } else {
    return true;
  }
};

const solveBacktrack = function (board, boxes, rows, cols, r, c) {
  if (r === board.length || c === board[0].length) {
    return true;
  } else {
    if (board[r][c] === ".") {
      for (let num = 1; num <= 9; num++) {
        const numVal = num.toString();
        board[r][c] = numVal;

        const boxId = getBoxId(r, c);
        const box = boxes[boxId];
        const row = rows[r];
        const col = cols[c];

        if (isValid(box, row, col, numVal)) {
          box[numVal] = true;
          row[numVal] = true;
          col[numVal] = true;

          if (c === board[0].length - 1) {
            if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
              return true;
            }
          } else {
            if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
              return true;
            }
          }

          delete box[numVal];
          delete row[numVal];
          delete col[numVal];
        }

        board[r][c] = ".";
      }
    } else {
      if (c === board[0].length - 1) {
        if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
          return true;
        }
      } else {
        if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
          return true;
        }
      }
    }
  }

  return false;
};

var solveSudoku = function (board) {
  const n = board.length;
  const boxes = new Array(n),
    rows = new Array(n),
    cols = new Array(n);

  for (let i = 0; i < n; i++) {
    boxes[i] = {};
    rows[i] = {};
    cols[i] = {};
  }

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (board[r][c] !== ".") {
        const boxId = getBoxId(r, c);
        const val = board[r][c];
        boxes[boxId][val] = true;
        rows[r][val] = true;
        cols[c][val] = true;
      }
    }
  }

  solveBacktrack(board, boxes, rows, cols, 0, 0);
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// solveSudoku(board)
console.log(solveSudoku(board), "solveSudoku(board)v");
// console.log(board);

class Persons {
  constructor(personVal) {
    this.name = personVal;
    this.children = [];
    this.isAlive = true;
  }
}

class monarchy {
  constructor(king) {
    this.king = new Persons(king);
    this._person = {
      [this.king.name]: this.king,
    };
  }

  birth(childrenName, parentName) {
    let parent = this._person(parentName);
    let newchild = new Persons(childrenName);
    parent.children.push(newchild);
    this._person[newchild.name] = newchild;
  }

  death(name) {
    const personname = this._person[name];
    if (!personname) {
      return null;
    }
    personname.isAlive = false;
  }
  _dfs(personParent, order) {
    if (!personParent.isAlive) {
      return;
    }
    let personsParentName = personParent.name;
    order.push(personsParentName);
    for (let index = 0; index < personParent.children?.length; index++) {
      let children = this._person[personParent.children[index]];
      this._dfs(children, order);
    }
  }
  getOrderOfSuccession() {
    const order = [];
    _dfs(this.king, order);
    return order;
  }
}

// monarchy("king")
// monarchy.ki
const recursivelargestElementInArray = (arr, length, max) => {
  if (length < 0) return max;
  if (arr[length] > max) {
    max = arr[length];
  }
  return recursivelargestElementInArray(arr, length - 1, max);
};

const largestElementInArray = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let max = arr[0];

  max = recursivelargestElementInArray(arr, arr.length, max);
  return max;
};

console.log(largestElementInArray(), "largestElementInArray");

const fibonacciwithdphelper = (n, dp) => {
  if (n <= 1) return n;
  // console.log(dp[n])
  if (!dp[n]) {
    dp[n] = fibonacciwithdphelper(n - 1, dp) + fibonacciwithdphelper(n - 2, dp);
    return dp[n];
  } else {
    return dp[n];
  }
};

const fibonacciwithdp = (n) => {
  let dp = new Array(n + 1);
  return fibonacciwithdphelper(n, dp);
};

console.log(fibonacciwithdp(120), "fibonacciwithdp");

//Write code for binary search for arr=[2,3,5,7,5,9,3,5,7] and sort it without repeating character
const sortWithoutrepeatingAndBinarySearchphelper = (
  withoutRepeatedArray,
  target
) => {
  let left = 0;
  let right = withoutRepeatedArray.length;
  while (left < right) {
    let mid = Math.floor((right - left) / 2);
    if (withoutRepeatedArray[mid] == target) {
      return withoutRepeatedArray[mid];
    } else if (withoutRepeatedArray[mid] > target) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
};
const sortWithoutrepeatingAndBinarySearch = (array, target) => {
  // let withoutRepeatedArray = [array[0]]
  // for(let i=1;i<array.length;i++){
  //   if(array[i] !== array[i-1]){
  //     withoutRepeatedArray.push(array[i])
  //   }
  // }
  array.sort((a, b) => {
    return a - b;
  });
  let withoutRepeatedArray = [...new Set([...array])];
  return sortWithoutrepeatingAndBinarySearchphelper(
    withoutRepeatedArray,
    target
  );
};

console.log(
  sortWithoutrepeatingAndBinarySearch([2, 3, 5, 7, 5, 9, 3, 5, 7], 11),
  "sortWithoutrepeatingAndBinarySearch"
);

//sort an array without sort method of javascript

const sortArrayWithoutArraySortMethod = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(
  sortArrayWithoutArraySortMethod([2, 3, 1, 7, 4]),
  "sortArrayWithoutArraySortMethod"
);

const maxNumberAddition = (arr) => {
  let res = "";
  for (let i = 9; i > 0; i--) {
    const selectedFirstDigitOfNum = arr.filter(
      (item) => item.toString()[0] == i.toString()
    );
    selectedFirstDigitOfNum.sort((a, b) => b - a);
    for (let m = selectedFirstDigitOfNum.length; m > 0; m--) {
      // let left=1
      let right = selectedFirstDigitOfNum[0]?.toString().length;
      while (right > 0) {
        if (
          selectedFirstDigitOfNum[m - 1] &&
          Number(selectedFirstDigitOfNum[m]?.toString()[right]) &&
          Number(selectedFirstDigitOfNum[m - 1]?.toString()[right]) &&
          Number(selectedFirstDigitOfNum[m]?.toString()[right]) >
            Number(selectedFirstDigitOfNum[m - 1]?.toString()[right])
        ) {
          let temp = selectedFirstDigitOfNum[m];
          console.log(temp);
          selectedFirstDigitOfNum[m] = selectedFirstDigitOfNum[m - 1];
          selectedFirstDigitOfNum[m - 1] = temp;
          console.log(selectedFirstDigitOfNum, "selectedFirstDigitOfNumss");
        }
        right--;
      }
    }

    res += selectedFirstDigitOfNum.join("");
  }
  return res;
};

console.log(
  maxNumberAddition([4321, 587, 61, 982, 981, 75, 99, 44]),
  "maxNumberAddition"
);

// var EventEmitter = require("events");
// var crazy = new EventEmitter();
// crazy.on("event1", function () {
//   console.log("event1 fired!");
//   setImmediate(function () {
//     crazy.emit("event2");
//   });
// });
// crazy.on("event2", function () {
//   console.log("event2 fired!");
//   setImmediate(function () {
//     crazy.emit("event3");
//   });
// });
// crazy.on("event3", function () {
//   console.log("event3 fired!");
//   setImmediate(function () {
//     crazy.emit("event1");
//   });
// });
// crazy.emit("event1");


//output

// event1 fired!
// event2 fired!
// event3 fired!
// event1 fired!
// event2 fired!
// event3 fired!
// ...continues till we manually break this loop


const minSwap = (arr) => {
 let swapCount = 0
 let p1 = 0;
 let p2= arr.length-1
 while(p1<p2){
  if(arr[p1] > arr[p2]){
    let temp = arr[p1]
    arr[p1] =arr[p2]
    arr[p2] = temp
    swapCount++
    p2--
  }else{
    p2--
  }
 }
 return [swapCount,arr]
};

console.log(
  minSwap([7, 1, 3, 2, 4, 5, 6]),
  "minSwap"
);


// var isValidParenthesis = function(s) {
//   let map = new Map()
//   map.set("{","}")
//   map.set("(",")")
//   map.set("[","]")
//   //hyta made agodr new Hasmap banvun tyanna parenthesis che opposites assign kele
//   let stack = []
//   //new stack banavla jya amade apan parenthesis push karnar ahot ani check krnar ahot ki hya parenthesis cheopposite tya hashmap made present ahe ka jr asen tr mg thik ahe ani nasen tr mag return false
//   for(let i=0;i<s.length;i++){
//       if(map.has(s[i])){
//           //for example "(" for this this parenthesispresent in hashmaps so push in stack for checking opposite of this parenthesis in next iteration
//           stack.push(s[i])
//           // "(" this value pushed in stack
//       }else{
//           let prev = stack.pop()
//           //prev = "("
          
//           if(map.get(prev) !== s[i]){
//               // map.get(prev) = ")" and next iteration s[i] = ")"
//               return false
//           }
//       }
//   }
//   return stack.length == 0 //this is to checkl all parenthesis present in stack or not 
// };



// var evalRPN = function(tokens) {
//   let stack = []
//   for(let i =0; i<tokens.length;i++){
//       if(tokens[i] !== "+" && tokens[i] !== "-" && tokens[i] !== "*" && tokens[i] !== "/"){
//           //if there are numbers only then add in stack with Number function
//           stack.push(Number(tokens[i]))
//       }else{
//           //if there are no numbers then solve problem
//           let otpt = 0
//           switch(tokens[i]){
//               //for checking which calculation we need to do
//               case "+": 
//               //if tokens[i] == + then we need to add previous two element of the stack
//                  otpt = stack[stack.length-2] + stack[stack.length-1];
//                  //after the excution for calculations completed then loop break karne jr break ny kela tr khalche pn case execute hotat mhanun switch case made khup important ahe break key waparne
//                  break;
//               case "-" :
//               // previous cha previous elemnet sonbat minus karne
//               otpt =  stack[stack.length-2] - stack[stack.length-1];
//               break;
//               case "*" :
//               otpt =  stack[stack.length-2] * stack[stack.length-1];
//               break;
//               case "/" :
//               if(stack[stack.length-2] / stack[stack.length-1] > 0){
//                   //in general condition lavle because output made variation yet hote 1 cha difference yet hota 
//                  otpt =  Math.floor(stack[stack.length-2] / stack[stack.length-1]);
//               }else{
//                  otpt =  Math.ceil(stack[stack.length-2] / stack[stack.length-1]);
//               }
              
//               break;
//               default :
//               otpt = 0
//               break;
//           }
//           //calculations zalya nntr previous 2 elements kadun taakne ani otpt insert krne 
//           stack.pop()
//           stack.pop()
//           stack.push(otpt)

//       }
//   }
//   return Math.floor(stack.join(""))
// };



function urlify(str,trueLength){
  console.log(trueLength)
  let emptySpaces =0
  for(let i=0;i<str.length;i++){
    if(str[i] == " "){
      emptySpaces++
    }
  }
  let newLength = trueLength+2*emptySpaces;
  let newS = ""
  for (let index = trueLength-1; index >=0; index--) {
      if(str[index] == " "){
        newS = newS + "%20"
        newLength = newLength-3
      } else{
        newS = newS + str[index]
        newLength--
      } 
  }

  return   newS


}

console.log(urlify("john smith david   ","john smith david   ".length),"urlify")


function isPermutationPalindrome(str) {
  let seen = new Map();
  for (let char of str) {
    seen.set(char, (seen.get(char) || 0) + 1);
  }

  let oddCount = 0;
  for (let count of seen.values()) {
    if (count % 2 !== 0) {
      oddCount++;
      if (oddCount > 1) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPermutationPalindrome("radar"), "isPermutationPalindrome");


function oneWayEdits(str1,str2) {
 let newString = ""
 let edits = 1
 let p1 = 0
 let p2 = 0
  if(str1.length !== str2.length){
 while(p1<str1.length && p2<str2.length){

    if(str1[p1] == str2[p2]){
      newString += str1[p1] 
      p1++;
      p2++
    }else{
      if(edits >0){
        newString += str1[p1] 
       
      }

      p1++
      edits--
      
    }
  }

 }else{
  while(p1<str1.length && p2<str2.length){

    if(str1[p1] == str2[p2]){
      newString += str1[p1] 
      p1++;
      p2++
    }else{
      if(edits >0){
        newString += str1[p1] 
       
      }
      p1++
      p2++
      edits--
      
    }
  }
 }
 console.log(newString)
  return str1 == newString
}
console.log(oneWayEdits("pale","ple"), "oneWayEdits");

function consecutiveString(str) {
  let consecutiveStringRes = ""
  let countOfEachChar = 0

  for(let i=0;i<str.length;i++){
    countOfEachChar++
    if(str[i] != str[i+1]){
      consecutiveStringRes+=str[i]+countOfEachChar
      countOfEachChar=0
    }
  }

  return consecutiveStringRes
}
console.log(consecutiveString("aaaabbccccddd"), "consecutiveString");


function sortStack(stack,elementToPush) {
  //ya made apan temp made stack madle te elemnt je elementToPush peksha jast ahe tyanna insert karaycha ani mg stack made elemnt push karaycha ani mg temp made alele sarve elemnt push kraycha
  let temp = []
  let lastIndex = stack.length -1
  while(stack[lastIndex] > elementToPush){
    temp.push(stack.pop())
    lastIndex--
  }
  stack.push(elementToPush)
  while(temp.length){
    stack.push(temp.pop())
  }
  return stack
}
console.log(sortStack([1,3,5,7,9],2), "sortStack");


class Animal {
  constructor(name,type){
    this.name = name,
    this.type = type,
    this.order = null
  }
}

class AnimalShelter {
   constructor(){
    this.dogs = []
    this.cats = []
    this.timestamp = 0
   }

   enqueueAny(animal){
    animal.order = this.timestamp++
    if(animal.type == "dog"){
      this.dogs.push(animal)
    } else{
      this.cats.push(animal)
    }

   }

   enqueueDog(animal){
    if(animal.type !== "dog"){
      return null
    }
    return this.dogs.push(animal)
   }
   enqueueCat(animal){
    if(animal.type !== "cat"){
      return null
    }
    return this.cats.push(animal)
   }

   dequeueDog(){
    if(this.dogs.length){
      return this.dogs.shift()
    }
   }
   dequeueCat(){
    if(this.cats.length){
      return this.cats.shift()
    }
   }
}

let animalInstance = new AnimalShelter()

animalInstance.enqueueAny(new Animal("german shefard","dog"))
animalInstance.enqueueAny(new Animal("kitty1","cat"))
animalInstance.enqueueAny(new Animal("kitty2","cat"))
animalInstance.enqueueAny(new Animal("dog2","dog"))
animalInstance.dequeueDog()
animalInstance.dequeueCat()

console.log(animalInstance,"animalInstance")


//magic number DP

//Given the array [-1, 0, 1, 2, 4, 10], the magic index is 4 because A[4] = 4.

function magicNumberHelper(arr,start,end,dp){
  if(start > end){
    return 
  }
   let mid = Math.floor((start+end)/2)
   console.log(mid,arr[mid])
   if(dp[mid] !== -1){
    return dp[mid]
   }
   if(arr[mid] == mid){
    return mid
   }else if(arr[mid] > mid){
    return dp[mid] = magicNumberHelper(arr,start,mid-1,dp)
   }else if(arr[mid] < mid){
    return dp[mid] = magicNumberHelper(arr,mid+1,end,dp)
   }
}

function magicNumber(arr) {
  let dp = new Array(arr.length).fill(-1)
  return magicNumberHelper(arr,0,arr.length-1,dp)
}
console.log(magicNumber([-1, 0, 1, 2, 3, 5]), "magicNumber");


function recursiveMultiplyHelper(smaller,bigger){
  if(smaller == 0) return 0
  if(smaller == 1) return bigger
  let mid = Math.floor(smaller/2)
  //ha function to prent aat made jato jo prent smaller ==1 chi condition hit hote ani jevha hi condition hit hote tevha mg te return bigger krte
  let halfProduct = recursiveMultiplyHelper(mid,bigger)
  if(smaller %2 == 0){
    //jr value even asen tr halfProduct 2 vela return karaycha half + half = full
    return halfProduct + halfProduct
  }else{
    //jr value odd asen tr mg half+half+bigger cha value karan value odd ahe 
    return halfProduct + halfProduct +bigger
  }
}

function recursiveMultiply(num1,num2) {
  let smaller = num1>num2 ? num2 : num1
  let bigger = num1>num2 ? num1 : num2
  return recursiveMultiplyHelper(smaller,bigger)
}
console.log(recursiveMultiply(8,9), "recursiveMultiply");
//output is 72



function getPermutations(str) {
  // Base case: if the string is empty, return an array with an empty string
  if (str.length === 0) {
      return [''];
  }

  // Array to store all permutations
  let permutations = [];

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
      // Extract the current character
      let char = str[i]; //a

      // Form the remaining substring by excluding the current character
      let remaining = str.slice(0,i) + str.slice(i+1,str.length)
      //  console.log(remaining,"remaining")
      
      // Recursively get permutations of the remaining substring
      let remainingPermutations = getPermutations(remaining);
      // console.log(remainingPermutations,"remainingPermutations")
      //bc //cb //here inside of this remainingPermutations b is char and its remainingPermutation was only the c so in inside forloop for b it has been added with by char +perm = bc and if you talk about cb it is due to 2 for loop ran let i=0;i<str.length thats why 

      // Append the current character to each permutation of the remaining characters
      for (let perm of remainingPermutations) {
          permutations.push(char + perm); //abc ,acb

      }
  }

  return permutations;
}



// Example usage
console.log(getPermutations("abc"),"getPermutations");

function permuteUnique(nums) {
  const results = [];
  nums.sort(); // Sort to handle duplicates

  function backtrack(path, used) {
      if (path.length === nums.length) {
          results.push([...path]);
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          if (used[i]) continue; // Skip used elements
          if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; // Skip duplicates
          //standard backtrack method 
          path.push(nums[i]);
          used[i] = true;
          backtrack(path, used);
          path.pop();
          used[i] = false;
      }
  }

  backtrack([], Array(nums.length).fill(false));
  return results;
}


// Example usage
console.log(permuteUnique(['a', 'a', 'b']),"permuteUnique");




