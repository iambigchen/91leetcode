
## 题目地址(61. 旋转链表)

https://leetcode-cn.com/problems/rotate-list/

## 题目描述

```
给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

 

示例 1：

输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]


示例 2：

输入：head = [0,1,2], k = 4
输出：[2,0,1]


 

提示：

链表中节点的数目在范围 [0, 500] 内
-100 <= Node.val <= 100
0 <= k <= 2 * 109
```

## 前置知识

- 

## 公司

- 暂无

## 思路

通过快慢指针，让快指针先走k步后，慢指针在走，等快指针到链表尾部时，慢指针就是倒数k。让右移，只需要将链表最后一位的next指向head，将倒数第k位的next指向null即可。

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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let count = 0
    let now = head
    while(now) {
        now = now.next
        count++
    }
    k = k % count

    let fast = (slow = head)
    while(fast && fast.next) {
        fast = fast.next
        if (k-- <= 0) {
            slow = slow.next
        }
    }

    fast.next = head
    let res = slow.next
    slow.next = null
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


