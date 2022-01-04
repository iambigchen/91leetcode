
## 题目地址(447. 回旋镖的数量)

https://leetcode-cn.com/problems/number-of-boomerangs/

## 题目描述

```
给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。

返回平面上所有回旋镖的数量。

 

示例 1：

输入：points = [[0,0],[1,0],[2,0]]
输出：2
解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]


示例 2：

输入：points = [[1,1],[2,2],[3,3]]
输出：2


示例 3：

输入：points = [[1,1]]
输出：0


 

提示：

n == points.length
1 <= n <= 500
points[i].length == 2
-104 <= xi, yi <= 104
所有点都 互不相同
```

## 前置知识

- 

## 公司

- 暂无

## 思路

计算三个点的距离相同时，有多少种可能。可以先固定一个点，将这个点到另外其他所有点的距离计算出来。然后用排列组合计算每个距离下，有多少种可能。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res = 0
   for(let i = 0; i<points.length; i++) {
       let A = points[i]
        let map = {}
       for(let j = 0; j<points.length; j++) {
            let B = points[j]
            let dis = getDis(A, B)
            if (map[dis]) {
                map[dis] = map[dis] + 1
            } else {
                map[dis] = 1
            }
        }
        Object.values(map).forEach(e => {
            res += e * (e-1)
        })
   }
   return res
};

function getDis (A, B) {
    return (A[0] - B[0]) * (A[0] - B[0]) + (A[1] - B[1]) * (A[1] - B[1])
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n**2)$
- 空间复杂度：$O(n)$


