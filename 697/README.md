
## 题目地址(697. 数组的度)

https://leetcode-cn.com/problems/degree-of-an-array/

## 题目描述

```
给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。

你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

 

示例 1：

输入：nums = [1,2,2,3,1]
输出：2
解释：
输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
连续子数组里面拥有相同度的有如下所示：
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。


示例 2：

输入：nums = [1,2,2,3,1,4,2]
输出：6
解释：
数组的度是 3 ，因为元素 2 重复出现 3 次。
所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。


 

提示：

nums.length 在 1 到 50,000 范围内。
nums[i] 是一个在 0 到 49,999 范围内的整数。
```

## 前置知识

- 

## 公司

- 暂无

## 思路

和347题类型，用map存每个值出现的频率，再进行排序。通过排序后的值，取最大范围。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = {}
    let max = 0
    for (let index = 0; index < nums.length; index++) {
        const e = nums[index];
        map[e] = map[e] ? map[e] + 1 : 1
        max = Math.max(max, map[e])
    }
    let keys = Object.keys(map)
    keys.sort((a, b) => map[b] - map[a])
    let res = nums.length
    for (var i = 0; i < keys.length; i++) {
        if (map[keys[i]] === max) {
            let start = nums.indexOf(+keys[i])
            let end = nums.lastIndexOf(+keys[i])
            res = Math.min(res, end - start + 1)
        } else {
            break
        }
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(longN)$
- 空间复杂度：$O(n)$


