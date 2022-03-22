
## 题目地址(101. 对称二叉树)

https://leetcode-cn.com/problems/symmetric-tree/description/

## 题目描述

```
给你一个二叉树的根节点 root ， 检查它是否轴对称

 

* 示例 1：
 * 
 * 
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 * 
 *
```

## 前置知识

- 

## 公司

- 暂无

## 思路

BFS

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
var isSymmetric = function(root) {
    if (!root) return false
    let query = [root]
    while(query.length) {
        let curLevel = query
        query = []
        let arr = []
        for(let i = 0; i < curLevel.length; i ++) {
            let node = curLevel[i]
            if (node.left) {
                query.push(node.left)
                arr.push(node.left.val)
            } else {
                arr.push('#')
            }
            if (node.right) {
                query.push(node.right)
                arr.push(node.right.val)
            } else {
                arr.push('#')
            }
        }
        if (!isSy(arr)) {
            return false
        }
    }
    return true

    function isSy (list) {
        let l = 0
        let r = list.length - 1
        while(l < r) {
            if (list[r] === list[l]) {
                l++
                r--
            } else {
                return false
            }
        }
        return true
    }
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


