
## 题目地址(129. 求根节点到叶节点数字之和)

https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

## 题目描述

```
给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。

每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。

计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。

 

示例 1：

输入：root = [1,2,3]
输出：25
解释：
从根到叶子节点路径 1->2 代表数字 12
从根到叶子节点路径 1->3 代表数字 13
因此，数字总和 = 12 + 13 = 25

示例 2：

输入：root = [4,9,0,5,1]
输出：1026
解释：
从根到叶子节点路径 4->9->5 代表数字 495
从根到叶子节点路径 4->9->1 代表数字 491
从根到叶子节点路径 4->0 代表数字 40
因此，数字总和 = 495 + 491 + 40 = 1026


 

提示：

树中节点的数目在范围 [1, 1000] 内
0 <= Node.val <= 9
树的深度不超过 10
```

## 前置知识

- 

## 公司

- 暂无

## 思路

bfs, 遍历每个节点，将该节点的值更新成父节点*10+当前价节点的值即可

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
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
 * @return {number}
 */
  function sumNumbers(root) {
    if (!root) return 0
    let query = [root]
    let res = 0
    while(query.length) {
        let curLevel = query
        query = []
        for (let i = 0; i < curLevel.length; i++) {
            if (curLevel[i].left) {
                curLevel[i].left.val = curLevel[i].val * 10 + curLevel[i].left.val
                query.push(curLevel[i].left)
            }
            if (curLevel[i].right) {
                curLevel[i].right.val = curLevel[i].val * 10 + curLevel[i].right.val
                query.push(curLevel[i].right)
            }
            if (!curLevel[i].left && !curLevel[i].right) {
                res += curLevel[i].val
            }
        }
    }
    return res
  }
// @lc code=end

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(h)$

## 思路2

dfs, 计算每条枝的值，并相加

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
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
 * @return {number}
 */
function sumNumbers(root) {
    let res = 0
    function dfs (node, parentVal) {
        parentVal = parentVal * 10 + node.val
        if (node.left) {
            dfs(node.left, parentVal)
        }
        if (node.right) {
            dfs(node.right, parentVal)
        }
        if (!node.left && !node.right) {
            res += parentVal
        }
    }
    dfs(root, 0)
    return res
  }
// @lc code=end

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(h)$


