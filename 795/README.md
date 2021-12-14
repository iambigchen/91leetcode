
## 题目地址(795. 区间子数组个数)

https://leetcode-cn.com/problems/number-of-subarrays-with-bounded-maximum/

## 题目描述

```
给你一个整数数组 nums 和两个整数：left 及 right 。找出 nums 中连续、非空且其中最大元素在范围 [left, right] 内的子数组，并返回满足条件的子数组的个数。

生成的测试用例保证结果符合 32-bit 整数范围。

 

示例 1：

输入：nums = [2,1,4,3], left = 2, right = 3
输出：3
解释：满足条件的三个子数组：[2], [2, 1], [3]


示例 2：

输入：nums = [2,9,2,5,6], left = 2, right = 8
输出：7


 

提示：

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= left <= right <= 109
```

## 前置知识

- 

## 公司

- 暂无

## 思路

前缀和模板，betweenK = atMostK(k1) - atMostK(k2 - 1)

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
    function notGreater (R) {
        let ans = 0
        let cnt = 0
        for (let i = 0; i < nums.length;  i++) {
            if (nums[i] <= R) {
                cnt++
            } else {
                cnt = 0
            }
            ans += cnt
        }
        return ans
    }
    return notGreater(right) - notGreater(left - 1)
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


