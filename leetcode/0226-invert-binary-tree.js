// iterative method

// recursive method
var invertTree = function (root) {
  // L R then process

  const reverseNodes = (node) => {
    // base case
    if (node == null) {
      return;
    }
    reverseNodes(node.left);
    reverseNodes(node.right);

    let hold = node.left;
    node.left = node.right;
    node.right = hold;
  };
  reverseNodes(root);
  return root;
};


let bt1 = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
}

console.log(
  invertTree(bt1)
)

/*
   4
  2-7
1-3-6-9

   4
  7-2
9-6-3-1

*/

// advice: https://youtu.be/589pNBMX3dI
