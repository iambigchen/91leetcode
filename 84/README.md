
## 题目地址(84. 柱状图中最大的矩形)

https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

## 题目描述

```
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

 

示例 1:

输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10


示例 2：

输入： heights = [2,4]
输出： 4

 

提示：

1 <= heights.length <=105
0 <= heights[i] <= 104
```

## 前置知识

- 

## 公司

- 暂无

## 思路

计算以每个i为最小值的面积，向左求出小于i高度的索引q，向右求出小于i高度的索引p。则以i为高度的面积heights[i]* (p-q-1)。

以上思路用两层遍历，会超时，需要我们用单调递增栈进行优化。单调栈存索引，当i的高度小于栈顶高度，则说明i为我们希望的右侧索引p， 栈顶的索引为高度i ，栈顶后面的一个索引为左侧索引q。 需要左右各添加一个哨兵-1，防止q和p出错

## 关键点

单调栈
-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} heights
 * @return {number}
 */

// var largestRectangleArea = function(heights) {
//     let n = heights.length, l = [], r = [], ans = 0
//     for(let i = 0; i < n; i++) {
//         let j = i - 1
//         while(j >= 0 && heights[j] >= heights[i]) {
//             j--
//         }
//         l[i] = j
//     }
//     for(let i = 0; i < n; i++) {
//         let j = i + 1
//         while(j < n && heights[j] >= heights[i]) {
//             j++
//         }
//         r[i] = j
//     }
//     for(let i = 0; i < n; i++) {
//         ans = Math.max(ans, heights[i] * (r[i]-l[i]-1))
//     }
//     return ans
// };

var largestRectangleArea = function(heights) {
    let n = heights.length, heights2 = [0, ...heights, 0], st = [], ans = 0
    for(let i = 0; i < n + 2; i++) {
        while(st.length && heights2[st[st.length-1]] > heights2[i]) {
            ans = Math.max(ans, heights2[st.pop()] * (i - st[st.length-1] -1))
        }
        st.push(i)
    }
    return ans
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


