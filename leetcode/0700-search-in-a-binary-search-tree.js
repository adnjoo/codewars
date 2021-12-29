var searchBST = function (root, val) {
  if (root == null) return null;
  if (root.val == val) return root;

  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

// java solution: https://www.youtube.com/watch?v=sE8q8RSW71Y&ab_channel=NickWhite
