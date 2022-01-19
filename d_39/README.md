
## 题目地址(493. 翻转对)

https://leetcode-cn.com/problems/reverse-pairs/

## 题目描述

```
给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。

你需要返回给定数组中的重要翻转对的数量。

示例 1:

输入: [1,3,2,3,1]
输出: 2


示例 2:

输入: [2,4,3,5,1]
输出: 3


注意:

给定数组的长度不会超过50000。
输入数组中的所有数字都在32位整数的表示范围内。
```

## 前置知识

- 

## 公司

- 暂无

## 思路

归并排序，在排序过程中，统计翻转对的数量。start到mid、mid+1到end都是升序，如果nums[ti] >  2 * nums[tj]的值，则从ti到mid的每个值都是符合nums[ti] >  2 * nums[tj]的。 排序在找数之前和之后都不影响

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
var reversePairs = function(nums) {
    let res = 0
    function merge(nums, start, mid, end) {
        let i = start
        let j = mid + 1
        let temp = []
        while(i <= mid && j <= end) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i])
                i++
            } else {
                temp.push(nums[j])
                j++
            }
        }
        let ti = start
        let tj = mid + 1
        while(ti <= mid && tj <= end) {
            if (nums[ti] <=  2 * nums[tj]) {
                ti++
            } else {
                res += mid - ti + 1
                tj++
            }
        }
        while(i <= mid) {
            temp.push(nums[i])
            i++
        }
        while(j <= end) {
            temp.push(nums[j])
            j++
        }
        for(let index = 0; index < temp.length; index++) {
            nums[start + index] = temp[index]
        }
    }
    function mergeSort(nums, start, end) {
        if (start >= end) return
        let mid = (start + end) >> 1
        mergeSort(nums, start, mid)
        mergeSort(nums, mid+1, end)
        merge(nums, start, mid, end)
    }
    mergeSort(nums, 0, nums.length-1)
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(logN)$
- 空间复杂度：$O(n)$


