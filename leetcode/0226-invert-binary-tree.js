/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// recursive
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

let r1 = [4, 2, 7, 1, 3, 6, 9];

console.log(invertTree(r1));

// advice: https://youtu.be/589pNBMX3dI
