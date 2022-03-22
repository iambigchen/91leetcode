## 题目地址(35. 索插入位置)

https://leetcode-cn.com/problems/search-insert-position/

## 题目描述

```
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

 

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4
示例 4:

输入: nums = [1,3,5,6], target = 0
输出: 0
示例 5:

输入: nums = [1], target = 0
输出: 0
 

提示:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 为无重复元素的升序排列数组
-104 <= target <= 104

```

## 前置知识

- 

## 公司

- 暂无

## 思路

双指针，分别指向数组的首尾。取中间值，与目标值比较。如果大于目标值，说明右边指针需要左移。如果小于目标值，说明左指针需要右移

## 关键点

数组必须是顺序排列才可以  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0
    let r = nums.length - 1
    while(l <= r) {
        let mid = (l + r) >> 1
        if (target < nums[mid]) {
            r--
        }
        if (target > nums[mid]) {
            l++
        }
        if (target == nums[mid]) {
            return mid
        }
    }
    return l
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(logn)$
- 空间复杂度：$O(1)$


