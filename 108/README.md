
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

- 时间复杂度：$O(nlogn)$
- 空间复杂度：$O(h)$ h为树的高度



## 题目地址(108. 将有序数组转换为二叉搜索树)

https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/

## 题目描述

```
给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

 

示例 1：

输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：



示例 2：

输入：nums = [1,3]
输出：[3,1]
解释：[1,3] 和 [3,1] 都是高度平衡二叉搜索树。


 

提示：

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 按 严格递增 顺序排列
```

## 前置知识

- 

## 公司

- 暂无

## 思路

因为给的数组是排序的，所以取中间值作为root构建树即可

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null
    let mid = parseInt((nums.length -1) / 2)
    let root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid+1))
    return root
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(logn)$
- 空间复杂度：$O(n)$


