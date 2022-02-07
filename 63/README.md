
## 题目地址(63. 不同路径 II)

https://leetcode-cn.com/problems/unique-paths-ii/

## 题目描述

```
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

 

示例 1：

输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右


示例 2：

输入：obstacleGrid = [[0,1],[0,0]]
输出：1


 

提示：

m == obstacleGrid.length
n == obstacleGrid[i].length
1 <= m, n <= 100
obstacleGrid[i][j] 为 0 或 1
```

## 前置知识

- 

## 公司

- 暂无

## 思路

和62题一样，只是多了一层判断。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    if (obstacleGrid[0][0]) return 0
    const dp = Array(n+1).fill(0)
    dp[1] = 1
    for (let i = 1; i < m+1; i++) {
        for (let j = 1; j < n+1; j++) {
            if (obstacleGrid[i-1][j-1]) {
                dp[j] = 0
            } else {
                dp[j] += dp[j-1]
            }
        }
    }
    return dp[n]
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n*m)$
- 空间复杂度：$O(n)$


