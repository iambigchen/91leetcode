
## 题目地址(1381. 设计一个支持增量操作的栈)

https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/

## 题目描述

```
请你设计一个支持下述操作的栈。

实现自定义栈类 CustomStack ：

CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
int pop()：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 -1 。
void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。

 

示例：

输入：
["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"]
[[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
输出：
[null,null,null,2,null,null,null,null,null,103,202,201,-1]
解释：
CustomStack customStack = new CustomStack(3); // 栈是空的 []
customStack.push(1);                          // 栈变为 [1]
customStack.push(2);                          // 栈变为 [1, 2]
customStack.pop();                            // 返回 2 --> 返回栈顶值 2，栈变为 [1]
customStack.push(2);                          // 栈变为 [1, 2]
customStack.push(3);                          // 栈变为 [1, 2, 3]
customStack.push(4);                          // 栈仍然是 [1, 2, 3]，不能添加其他元素使栈大小变为 4
customStack.increment(5, 100);                // 栈变为 [101, 102, 103]
customStack.increment(2, 100);                // 栈变为 [201, 202, 103]
customStack.pop();                            // 返回 103 --> 返回栈顶值 103，栈变为 [201, 202]
customStack.pop();                            // 返回 202 --> 返回栈顶值 202，栈变为 [201]
customStack.pop();                            // 返回 201 --> 返回栈顶值 201，栈变为 []
customStack.pop();                            // 返回 -1 --> 栈为空，返回 -1


 

提示：

1 <= maxSize <= 1000
1 <= x <= 1000
1 <= k <= 1000
0 <= val <= 100
每种方法 increment，push 以及 pop 分别最多调用 1000 次
```

## 前置知识

- 

## 公司

- 暂无

## 思路

用数组模拟栈

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize
    this.val = []
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.val.length < this.maxSize) {
        this.val.push(x)
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.val.length === 0) {
        return -1
    }
    return this.val.pop()
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for(var i =0; i< k;i++) {
        if (i < this.val.length) {
            this.val[i] = this.val[i] + val
        }
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$




## 思路

用increments来存所有的increment操作，increment[i]表示前i个值都加increment[i]值

在pop的时候，只需要把栈顶值取出，加increment[i]。在更新维护increment[i-1]，将increment[i-1] 变成 increment[i] + increment[i-1]。然后重置increment[i]为0即可

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

var CustomStack = function(maxSize) {
    this.maxSize = maxSize
    this.list = []
    this.increments = Array(maxSize).fill(0)
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.list.length < this.maxSize) {
        this.list.push(x)
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.list.length === 0) return -1
    let i = this.list.length - 1
    this.increments[i-1] += this.increments[i]
    let res = this.list.pop() + this.increments[i]
    this.increments[i] = 0
    return res
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let i = Math.min(k, this.list.length) -1
    if (i >= 0) {
        this.increments[i] += val
    }
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$