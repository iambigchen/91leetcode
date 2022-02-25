
## 题目地址(322. 零钱兑换)

https://leetcode-cn.com/problems/coin-change/

## 题目描述

```
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

 

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1

示例 2：

输入：coins = [2], amount = 3
输出：-1

示例 3：

输入：coins = [1], amount = 0
输出：0


 

提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
```

## 前置知识

- 

## 公司

- 暂无

## 思路

动态规划，dp[i][j] 代表着 前j项组成总额为i的最少数量

如果 当前第j个金额大于总额，则j项不能加进去，dp[i][j] = dp[i][j-1]

否则 dp[i][j] = Math.min(dp[i][j-1], dp[i-coins[j-1]][j]+1)

(如果 第j项不能无限制使用，只能用一次， 则 dp[i][j] = Math.min(dp[i][j-1], dp[i-coins[j-1]][j-1]+1))

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function (coins, amount) {
   let dp = Array(amount+1).fill(0).map(() => Array(coins.length+1).fill(amount + 1))
   for(let i = 0; i <= coins.length; i++) {
    dp[0][i] = 0
   }
   for(let i = 1; i < amount+1; i++) {
       for(let j =1; j < coins.length + 1; j++) {
           if (i >= coins[j-1]) {
               dp[i][j] = Math.min(dp[i][j-1], dp[i-coins[j-1]][j]+1)
           } else {
                dp[i][j] = dp[i][j-1]
           }
       }
   }
   if (dp[amount][coins.length] == amount + 1) {
       return -1
   } else {
       return dp[amount][coins.length]
   }
  };

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


