
## 题目地址(198. 打家劫舍)

https://leetcode-cn.com/problems/house-robber/

## 题目描述

```
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

 

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。


 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 400
```

## 前置知识

- 

## 公司

- 暂无

## 思路

动态规划， dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = [];
    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i < nums.length + 2; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);
    }

    return dp[nums.length + 1];
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


## 思路

当前值只和前两个相关，所以可以用两个变量存储

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let a = 0
    let b = 0
    for (let i = 2; i < nums.length + 2; i++) {
        var cur = Math.max(a + nums[i - 2], b);
        a = b
        b = cur
    }
    return b
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$




