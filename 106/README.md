
## 题目地址(105. 从中序与后序遍历序列构造二叉树)

https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/

## 题目描述

```
根据一棵树的中序遍历与后序遍历构造二叉树。

 

示例 1:

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]


output [3,9,20,null,null,15,7]
```

## 前置知识

- 

## 公司

- 暂无

## 思路

和105题类似，只是把前序遍历缓存了后序遍历

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length) return null
    let len = postorder.length
    let root = new TreeNode(postorder[len - 1])
    let i = inorder.indexOf(root.val)
    root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i))
    root.right = buildTree(inorder.slice(i+1), postorder.slice(i, len -1))
    return root
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


