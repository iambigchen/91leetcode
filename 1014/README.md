
## 题目地址(1014 最佳观光组合)

https://leetcode-cn.com/problems/best-sightseeing-pair/description/

## 题目描述

```
 给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。 
 一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去它们两者之间的距离。 返回一对观光景点能取得的最高分。

 

 * 示例 1：
 * 
 * 
 * 输入：values = [8,1,5,2,6]
 * 输出：11
 * 解释：i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：values = [1,2]
 * 输出：2
```

## 前置知识

- 

## 公司

- 暂无

## 思路

利用dp来存储前面最大的values[i]+i，当前最大的值为dp[i]+values[i]-i

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
var maxScoreSightseeingPair = function(values) {
    let res = -Infinity
    let dp = Array(values.length+1).fill(-Infinity)
    for(let i = 0; i < values.length; i++) {
        dp[i+1] = Math.max(values[i]+i, dp[i])
        res = Math.max(dp[i]+values[i]-i, res)
    }
    return res
};
```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(N)$
- 空间复杂度：$O(N)$


