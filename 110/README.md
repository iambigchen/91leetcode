
## 题目地址(110. 平衡二叉树)

https://leetcode-cn.com/problems/balanced-binary-tree/

## 题目描述

```
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

 

示例 1：

输入：root = [3,9,20,null,null,15,7]
输出：true


示例 2：

输入：root = [1,2,2,3,3,null,null,4,4]
输出：false


示例 3：

输入：root = []
输出：true


 

提示：

树中的节点数在范围 [0, 5000] 内
-104 <= Node.val <= 104
```

## 前置知识

- 

## 公司

- 暂无

## 思路

判断是否为高度平衡二叉树，只需要判断 h(node.left) - h(node.right) > 1 && node.left是高度平衡二叉树 && node.right是高度平衡二叉树

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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    function dfs (node) {
        if (!node) return 0
        let l = dfs(node.left)
        let r = dfs(node.right)
        return Math.max(l, r) + 1
    }
    if (!root) return true
    if (Math.abs(dfs(root.left) - dfs(root.right)) > 1) return false
    return (isBalanced(root.left) && isBalanced(root.right))
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(N)$
- 空间复杂度：$O(h)$ h为树的高度


