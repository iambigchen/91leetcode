
## 题目地址(239. 滑动窗口最大值)

https://leetcode-cn.com/problems/sliding-window-maximum/

## 题目描述

```
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

 

示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7


示例 2：

输入：nums = [1], k = 1
输出：[1]


示例 3：

输入：nums = [1,-1], k = 1
输出：[1,-1]


示例 4：

输入：nums = [9,11], k = 2
输出：[11]


示例 5：

输入：nums = [4,-2], k = 2
输出：[4]

 

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
```

## 前置知识

- 

## 公司

- 暂无

## 思路

暴力解法

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = []
    for(let s = 0; s <= nums.length - k; s++) {
        res.push(find(nums, s, s + k))
    }
    return res
};

function find (nums, s, e) {
    let max = -Infinity
    for(let i = s; i < e; i++) {
        max = Math.max(nums[i], max)
    }
    return max
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n**2)$
- 空间复杂度：$O(n)$


## 思路2

我们只需要维护一个栈，每次窗口移动一次，先往栈push一个值。栈只需要维护，每次push时，比该值小的都去除。当push结束后，再删除数组最左边的值，以便于下次push时，栈中都是窗口内的值。这样栈底的值就一直都是窗口内最大值。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = []
    const dequeue = new Dequeue([]); 
    for(let i = 0; i < k-1; i++) {
        dequeue.push(nums[i])
    }

    for(let i = k-1; i < nums.length; i++) {
        dequeue.push(nums[i])
        res.push(dequeue.max())
        dequeue.shift(nums[i-k+1])
    }
    
    return res
};

class Dequeue {
    constructor (list) {
        this.list = list
    }
    push(val) {
        let nums = this.list
        while(nums[nums.length - 1] < val) {
            nums.pop();
        }
        nums.push(val)
    }
    shift (val) {
        if (this.list[0] === val) {
            this.list.shift();
        }
    }
    max () {
        return this.list[0]
    }
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n**2)$
- 空间复杂度：$O(n)$


