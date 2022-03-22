
## 题目地址(337. 打家劫舍 III)

https://leetcode-cn.com/problems/house-robber-iii/

## 题目描述

```
小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

 

示例 1:

输入: root = [3,2,3,null,3,null,1]
输出: 7 
解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7

示例 2:

输入: root = [3,4,5,1,3,null,1]
输出: 9
解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9


 

提示：

树的节点数在 [1, 104] 范围内
0 <= Node.val <= 104
```

## 前置知识

- 

## 公司

- 暂无

## 思路

利用递归，每个节点都有两种情况，抢和不抢。如果抢则，两个子节点都不能抢。如果不抢，则左节点可以抢和不抢，右节点也是如此，取这两种情况的最大值即可。

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
 * @return {number}
 */
 function helper(root) {
    if (root === null) return [0, 0];
    // 0: rob 1: notRob
    const l = helper(root.left);
    const r = helper(root.right);
  
    const robed = root.val + l[1] + r[1];
    const notRobed = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
  
    return [robed, notRobed];
  }
  /**
   * @param {TreeNode} root
   * @return {number}
   */
var rob = function (root) {
    const [robed, notRobed] = helper(root);
    return Math.max(robed, notRobed);
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

