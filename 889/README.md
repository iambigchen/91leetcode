
## 题目地址(889. 根据前序和后序遍历构造二叉树)

https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/

## 题目描述

```
根据前序和后序遍历构造二叉树

 

示例 1:

 输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
 输出：[1,2,3,4,5,6,7]
```

## 前置知识

- 

## 公司

- 暂无

## 思路

和105、106题类似，区别是没有中序遍历所以无法通过root的值找到左枝数量，但是preorder[1]是postorder的左枝最后一项，所以可以通过preorder[1]计算左枝数量

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
var constructFromPrePost = function(preorder, postorder) {
    if (!postorder.length) return null
    let root = new TreeNode(preorder[0])
    let i = postorder.indexOf(preorder[1])

    root.left = constructFromPrePost(preorder.slice(1, i+2), postorder.slice(0, i+1))
    root.right = constructFromPrePost(preorder.slice(i+2), postorder.slice(i+1, postorder.length -1))
    return root
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


