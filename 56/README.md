
## 题目地址(56. 合并区间)

https://leetcode-cn.com/problems/merge-intervals/

## 题目描述

```
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

 

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].


示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

 

提示：

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
```

## 前置知识

- 

## 公司

- 暂无

## 思路

先排序，然后取栈与当前值判断是否相交，如果相交更新当前值即可

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ant = []
    let i = 0
    let n = intervals.length
    function intervaled (a, b) {
        if (a[0] > b[1] || a[1] < b[0]) {
            return false
        }
        return true
    }

    while(i < n) {
        let cur = intervals[i]
        while(ant.length && intervaled(cur, ant[ant.length-1])) {
            let r = ant.pop()
            cur[0] = Math.min(r[0], cur[0])
            cur[1] = Math.max(r[1], cur[1])
        }
        ant.push(cur)
        i++
    }

    return ant
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


