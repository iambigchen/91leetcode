
## 题目地址(69. Sqrt(x))

https://leetcode-cn.com/problems/sqrtx/

## 题目描述

```
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

 

示例 1：

输入：x = 4
输出：2


示例 2：

输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。


 

提示：

0 <= x <= 231 - 1
```

## 前置知识

- 

## 公司

- 暂无

## 思路

当前值的平方小于等于x，当前值+1的平方大于x。则当前值就是我们要找的值

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0
    while(l <= x) {
        if (l ** 2 <= x && (l + 1) ** 2 > x) {
            return l
        }
        l++
    }
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

## 思路2

相当于找数组最右边符合目标值，而目标值就是x，数组则是从0到x的整数数组。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0
    let r = x
    while(l <= r) {
        let mid = (l + r) >> 1
        if (mid ** 2 > x) {
            r = mid - 1
        }
        if (mid ** 2 <= x) {
            l = mid + 1
        }
    }
    return r
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(logX)$
- 空间复杂度：$O(1)$




