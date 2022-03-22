
## 题目地址(485 最大连续 1 的个数)

https://leetcode-cn.com/problems/max-consecutive-ones/description/

## 题目描述

```
给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

 

 * 示例 1：
 * 
 * 
 * 输入：nums = [1,1,0,1,1,1]
 * 输出：3
 * 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入：nums = [1,0,1,1,0,1]
 * 输出：2
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 10^5
 * nums[i] 不是 0 就是 1.
 * 
 * 
 *
```

## 前置知识

- 

## 公司

- 暂无

## 思路

滑动窗口

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
var findMaxConsecutiveOnes = function(nums) {
    let i = 0
    let ans = 0
    for(let j = 0; j< nums.length; j++) {
        if (nums[j] === 0) {
            i = j + 1
        }
        ans = Math.max(ans, j - i + 1)
    }
    return ans
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(N)$
- 空间复杂度：$O(1)$


