interface TreeNode {
  val: number,
  left: TreeNode | any,
  right: TreeNode | any
}

const root: TreeNode = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 7,
    left: {
      val: 6
    },
    right: {
      val: 9
    }
  }
}

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (isTreeNode(root)) {
    const left = root.left
    root.left = root.right
    root.right = left

    invertTree(root.left)
    invertTree(root.right)
  }
  return root
}

const isTreeNode = (root: any): root is TreeNode => {
  return root != null &&
    typeof root === 'object' &&
    typeof root.val === 'number' &&
    typeof root.left === 'object' &&
    typeof root.right === 'object'
}

console.log(root)

invertTree(root)

console.log(root)
