
## 题目地址(688. 骑士在棋盘上的概率)

https://leetcode-cn.com/problems/knight-probability-in-chessboard/

## 题目描述

```
在一个 n x n 的国际象棋棋盘上，一个骑士从单元格 (row, column) 开始，并尝试进行 k 次移动。行和列是 从 0 开始 的，所以左上单元格是 (0,0) ，右下单元格是 (n - 1, n - 1) 。

象棋骑士有8种可能的走法，如下图所示。每次移动在基本方向上是两个单元格，然后在正交方向上是一个单元格。

每次骑士要移动时，它都会随机从8种可能的移动中选择一种(即使棋子会离开棋盘)，然后移动到那里。

骑士继续移动，直到它走了 k 步或离开了棋盘。

返回 骑士在棋盘停止移动后仍留在棋盘上的概率 。

 

示例 1：

输入: n = 3, k = 2, row = 0, column = 0
输出: 0.0625
解释: 有两步(到(1,2)，(2,1))可以让骑士留在棋盘上。
在每一个位置上，也有两种移动可以让骑士留在棋盘上。
骑士留在棋盘上的总概率是0.0625。


示例 2：

输入: n = 1, k = 0, row = 0, column = 0
输出: 1.00000


 

提示:

1 <= n <= 25
0 <= k <= 100
0 <= row, column <= n
```

## 前置知识

- 

## 公司

- 暂无

## 思路

动态规划，马每步走都有八种方向，所以每次走后的落点的概率都是1/8。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let dir = [[-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1]];
    dp[row][column] = 1
    for (let step = 1; step <= k; step++) {
        let dpTemp = new Array(n).fill(0).map(() => new Array(n).fill(0))
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                for(let d = 0; d < dir.length; d++) {
                    let direction = dir[d]
                    let lastR = i - direction[0]
                    let lastC = j - direction[1]
                    if (lastC < n && lastC >= 0 && lastR < n && lastR >= 0) {
                        dpTemp[i][j] += dp[lastR][lastC] * 0.125;
                    }
                }
            }
        }
        dp = dpTemp
    }
    let res = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            res += dp[i][j]
        }
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(k*n**2)$
- 空间复杂度：$O(n**2)$


