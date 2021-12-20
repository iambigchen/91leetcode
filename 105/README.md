
## 题目地址(105. 从前序与中序遍历序列构造二叉树)

https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

## 题目描述

```
给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。

 

示例 1:

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]


示例 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]


 

提示:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均无重复元素
inorder 均出现在 preorder
preorder 保证为二叉树的前序遍历序列
inorder 保证为二叉树的中序遍历序列
```

## 前置知识

- 

## 公司

- 暂无

## 思路

前序遍历时，第一项就是根节点。通过中序遍历的结果，可以通过root来找到 root所在的位置，在root的左侧都是左枝，右边是右枝。同时也知道左枝节点数位i个。所以前序遍历的左枝范围是 1 到 i， i到最后是前序遍历的右枝范围。

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
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null
    let root = new TreeNode(preorder[0])
    let i = inorder.indexOf(root.val)
    root.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i))
    root.right = buildTree(preorder.slice(i+1), inorder.slice(i+1))
    return root
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


