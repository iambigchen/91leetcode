
## 题目地址(435. 无重叠区间)

https://leetcode-cn.com/problems/non-overlapping-intervals/

## 题目描述

```
给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

注意:

可以认为区间的终点总是大于它的起点。
区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。

示例 1:

输入: [ [1,2], [2,3], [3,4], [1,3] ]

输出: 1

解释: 移除 [1,3] 后，剩下的区间没有重叠。


示例 2:

输入: [ [1,2], [1,2], [1,2] ]

输出: 2

解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。


示例 3:

输入: [ [1,2], [2,3] ]

输出: 0

解释: 你不需要移除任何区间，因为它们已经是无重叠的了。

```

## 前置知识

- 

## 公司

- 暂无

## 思路

和300相似，只不过这个是求非严格的最长递增子序列区间。所以我们需要先进行排序，因为排序过，所以我们可以进行剪枝

## 关键点

LIS DP  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let n = intervals.length
    if (n == 0) return 0
    let dp = Array(n).fill(1)
    intervals.sort((a, b) => a[0] - b[0])
    let ans = 1
    for (let i = 0; i < n; i++) {
        for(let j = i-1; j > -1; j--) {
            if (intervals[i][0] >= intervals[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
                ans = Math.max(ans, dp[i])
                break
            }
        }
    }
    return n - ans
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n**2)$
- 空间复杂度：$O(n)$


