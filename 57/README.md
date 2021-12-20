
## 题目地址(57. 插入区间)

https://leetcode-cn.com/problems/insert-interval/

## 题目描述

```
给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

 

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]


示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

示例 3：

输入：intervals = [], newInterval = [5,7]
输出：[[5,7]]


示例 4：

输入：intervals = [[1,5]], newInterval = [2,3]
输出：[[1,5]]


示例 5：

输入：intervals = [[1,5]], newInterval = [2,7]
输出：[[1,7]]


 

提示：

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= intervals[i][0] <= intervals[i][1] <= 105
intervals 根据 intervals[i][0] 按 升序 排列
newInterval.length == 2
0 <= newInterval[0] <= newInterval[1] <= 105
```

## 前置知识

- 

## 公司

- 暂无

## 思路

遍历intervals， newInterval只会在每一项的三种情况，在item左侧，在item中间，在item右侧。左侧和右侧都比较简单，直接push即可。在中间，需要先融合变成新的newInterval在push

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let i = 0, n = intervals.length, ans = []

    function intersected(a, b) {
        if (a[0] > b[1] || a[1] < b[0]) {
            return false
        }
        return true
    }

    while(i < n && intervals[i][1] < newInterval[0]) {
        ans.push(intervals[i])
        i++
    }

    while(i < n && intersected(intervals[i], newInterval)) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0])
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++
    }
    ans.push(newInterval)

    while(i < n) {
        ans.push(intervals[i])
        i++
    }

    return ans
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

