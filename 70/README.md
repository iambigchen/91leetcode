
## 题目地址(70. 爬楼梯)

https://leetcode-cn.com/problems/climbing-stairs/

## 题目描述

```
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶


 

提示：

1 <= n <= 45
```

## 前置知识

- 

## 公司

- 暂无

## 思路

动态规划，dp[i] = dp[i-1] + dp[i-2]。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n+1).fill(0)
    if (n <= 2) {
        return n
    }
    dp[1] = 1
    dp[2] = 2
    for(let i = 3; i < n+1; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

## 思路2

当前值只和之前两个值有关，所以可以只用两个变量即可

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n
    }
    let a = 1
    let b = 2
    let res = 0
    for(let i = 3; i < n+1; i++) {
        res = a + b
        a = b
        b = res
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$



