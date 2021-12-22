
## 题目地址(1382. 将二叉搜索树变平衡)

https://leetcode-cn.com/problems/balance-a-binary-search-tree/

## 题目描述

```
给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

如果有多种构造方法，请你返回任意一种。

 

示例：

输入：root = [1,null,2,null,3,null,4,null,null]
输出：[2,1,3,null,null,null,4]
解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。


 

提示：

树节点的数目在 1 到 10^4 之间。
树节点的值互不相同，且在 1 到 10^5 之间。
```

## 前置知识

- 

## 公司

- 暂无

## 思路

二叉搜索树，通过中序遍历即可成一个顺序的数组，再通过数组构建平衡树

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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let arr = []
    function bfs (node) {
        if (!node) return
        bfs(node.left)
        arr.push(node.val)
        bfs(node.right)
    }
    bfs(root)

    function build (nums) {
        if (!nums.length) return null
        let mid = parseInt((nums.length - 1) / 2)
        let root2 = new TreeNode(nums[mid])
        root2.left = build(nums.slice(0, mid))
        root2.right = build(nums.slice(mid+1))
        return root2
    }

    return build(arr)
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


