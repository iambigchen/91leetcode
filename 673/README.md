
## 题目地址(673. 最长递增子序列的个数)

https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/

## 题目描述

```
给定一个未排序的整数数组 nums ， 返回最长递增子序列的个数 。

注意 这个数列必须是 严格 递增的。

 

示例 1:

输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。


示例 2:

输入: [2,2,2,2,2]
输出: 5
解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。


 

提示: 

1 <= nums.length <= 2000
-106 <= nums[i] <= 106
```

## 前置知识

- 

## 公司

- 暂无

## 思路

LIS, 构建dp时，需要一个空间存储最长递增子序列长度，一个空间存当前长度的序列数量

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
var findNumberOfLIS = function(nums) {
    let n = nums.length
    if (n == 0) return 0
    let dp = Array(n).fill(0).map(() => [1,1])
    let max = 1
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[i][0] < dp[j][0]+1) {
                    dp[i][0] = dp[j][0]+1
                    max = Math.max(max, dp[i][0])
                    dp[i][1] = dp[j][1]
                } else if (dp[i][0] == dp[j][0]+1) {
                    dp[i][1] += dp[j][1]
                }
            }
        }
    }
    let res = 0
    for(let i = 0; i < n; i++) {
        if (dp[i][0] == max) {
            res += dp[i][1]
        }
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n**2)$
- 空间复杂度：$O(n)$


