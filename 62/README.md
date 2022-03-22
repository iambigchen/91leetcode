
## 题目地址(62. 不同路径)

https://leetcode-cn.com/problems/unique-paths/

## 题目描述

```
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

 

示例 1：

输入：m = 3, n = 7
输出：28

示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下


示例 3：

输入：m = 7, n = 3
输出：28


示例 4：

输入：m = 3, n = 3
输出：6

 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
```

## 前置知识

- 

## 公司

- 暂无

## 思路

动态规划，dp[i][j] = dp[i-1][j] + dp[i][j-1]

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = Array(m+1).fill(1).map(() => new Array(n+1).fill(0));
    dp[1][1] = 1
    for (let i = 1; i < m+1; i++) {
        for (let j = 1; j < n+1; j++) {
            if (i == 1 && j == 1) {
                continue
            }
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    return dp[m][n];
  };

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(m*n)$
- 空间复杂度：$O(m*n)$

## 思路2



## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function (m, n) {
    const dp = Array(n).fill(1);
  
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[j] = dp[j] + dp[j - 1];
      }
    }
  
    return dp[n - 1];
  };

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(m*n)$
- 空间复杂度：$O(n)$



