
## 题目地址(109. 有序链表转换二叉搜索树)

https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/

## 题目描述

```
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

```

## 前置知识

- 

## 公司

- 暂无

## 思路

通过快慢节点，可以找到链表的中间节点。中间节点是当前树的根节点，再分别求出左节点和右节点即可。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null
    return dfs(head, null)
};

function dfs (head, tail) {
    if (head === tail) return null
    let fast = head
    let slow = head
    while(fast != tail && fast.next != tail) {
        fast = fast.next.next
        slow = slow.next
    }
    let res = new TreeNode(slow.val)
    res.left = dfs(head, slow)
    res.right = dfs(slow.next, tail)
    return res
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(logn)$
- 空间复杂度：$O(logn)$


