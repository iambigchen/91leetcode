
## 题目地址(718. 最长重复子数组)

https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/

## 题目描述

```
给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

 

示例：

输入：
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出：3
解释：
长度最长的公共子数组是 [3, 2, 1] 。


 

提示：

1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
```

## 前置知识

- 

## 公司

- 暂无

## 思路

动态规划，dp[i][j] = dp[i-1][j-1]+1。和62题类似

## 关键点

LCS, DP

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let m = nums1.length
    let n = nums2.length
    let ans = 0
    let dp = new Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    for(let i = 1; i < m + 1; i++) {
        for(let j = 1; j < n + 1; j++) {
            if (nums1[i-1] == nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1]+1
                ans = Math.max(ans, dp[i][j])
            }
        }
    }
    return ans
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


