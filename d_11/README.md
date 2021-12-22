
## 题目地址(142. 环形链表 II)

https://leetcode-cn.com/problems/linked-list-cycle-ii/

## 题目描述

```
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

 

示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：

输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：

输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。


 

提示：

链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引

 

进阶：你是否可以使用 O(1) 空间解决此题？
```

## 前置知识

- 

## 公司

- 暂无

## 思路

定义快慢指针，快指针的速度是慢指针的两倍。如果他们第一次相遇时，将快指针放到链表的头部，再次相遇的时候，就是环的入口。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head == null || head.next == null) return null;
    let fast = (slow = head);
    do {
        if (fast != null && fast.next != null) {
            fast = fast.next.next;
        } else {
            fast = null;
        }
        slow = slow.next;
    } while (fast != slow);
    if (fast == null) return null;
    fast = head;
    while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


