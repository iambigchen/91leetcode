
## 题目地址(24. 两两交换链表中的节点)

https://leetcode-cn.com/problems/swap-nodes-in-pairs/

## 题目描述

```
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

 

示例 1：

输入：head = [1,2,3,4]
输出：[2,1,4,3]


示例 2：

输入：head = []
输出：[]


示例 3：

输入：head = [1]
输出：[1]


 

提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100
```

## 前置知识

- 

## 公司

- 暂无

## 思路

两两交换， P_A -> A -> B -> N_B

1. A -> N_B

2. B -> A

3. P_A -> B

## 关键点

因为链表的头节点变化了，所以建一个虚拟头节点，减少边界值的判断

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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let preNode = new ListNode();
    preNode.next = head;
    let A = head
    let res = head.next
    while(A && A.next) {
        let B = A.next
        let N_B = B.next
        let P_A = preNode
        A.next = N_B
        B.next = A
        P_A.next = B 

        preNode = A
        A = N_B
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


## 思路2

利用递归， 只关注当前节点和下一节点。将当前节点的next指向递归返回值，下一节点的next指向当前节点。并返回下一节点作为递归的返回值即可。

## 关键点


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
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let nextNode = head.next;
    head.next = swapPairs(nextNode.next);
    nextNode.next = head;
    return nextNode;
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


