
## 题目地址(146. LRU 缓存机制)

https://leetcode-cn.com/problems/lru-cache/

## 题目描述

```
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。

实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

 

进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

 

示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4


 

提示：

1 <= capacity <= 3000
0 <= key <= 10000
0 <= value <= 105
最多调用 2 * 105 次 get 和 put
```

## 前置知识

- 

## 公司

- 暂无

## 思路

时间负责度为1，最先想到的应该是链表。双向链表来实现 remove操作。可以利用hashmap来存储每个节点，从而快速访问到每个值。每次get或put时，都将该节点删除后，添加到head。保持链表的尾部是最旧的。

## 关键点

建立虚拟头节点和虚拟尾节点，从而可以快速访问到链表的头、尾节点。 

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} capacity
 */
class DoubleLinkedListNode{
    constructor (key, value){
        this.key = key
        this.value = value
        this.next = null
        this.pre = null
    }
}


var LRUCache = function(capacity) {
    this.size = capacity
    this.map = {}
    this.head = new DoubleLinkedListNode(null, null)
    this.tail = new DoubleLinkedListNode(null, null)
    this.head.next =this.tail
    this.tail.pre = this.head
    this.usedSpace = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map[key]) {
        let node = this.map[key]
        this.remove(node)
        this.addHead(node)
        return node.value
    }
    return -1
};
LRUCache.prototype.addHead = function(node) {
    this.map[node.key] = node
    let cur = this.head.next
    this.head.next = node
    node.pre = this.head
    cur.pre = node
    node.next = cur
};
LRUCache.prototype.remove = function(node) {
    let pre = node.pre
    let next = node.next
    pre.next = next
    next.pre = pre
    node.next = null
    node.pre = null
    delete this.map[node.key]
};
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map[key]) {
        let node = this.map[key]
        node.value = value
        this.remove(node)
        this.addHead(node)
        this.usedSpace++
    } else {
        if (this.usedSpace === this.size) {
            this.remove(this.tail.pre)
            this.usedSpace--
        }
        let node = new DoubleLinkedListNode(key, value)
        this.addHead(node)
    }
};


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(1)$
- 空间复杂度：$O(n)$


