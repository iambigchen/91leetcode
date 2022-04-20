
## 题目地址(234. 回文链表)

 https://leetcode-cn.com/problems/palindrome-linked-list/description/

## 题目描述

```
* 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,2,1]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 * 
 * 
 * 
 * 
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
```

## 前置知识

- 

## 公司

- 暂无

## 思路

快慢指针来找到中间节点，在找中间节点的同时，将前面链表进行反转。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

var isPalindrome = function(head) {
    let slow = head
    let fast = head
    let pre = null
    while(fast && fast.next) {
        fast = fast.next.next
        let next = slow.next
        slow.next = pre
        pre = slow
        slow = next
    }
    if (fast) {
        slow = slow.next
    }
    while(slow) {
        if (slow.val !== pre.val) return false
        pre = pre.next;
        slow = slow.next;
    }
    return true
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


