
## 题目地址(42. 接雨水)

https://leetcode-cn.com/problems/trapping-rain-water/

## 题目描述

```
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 

示例 1：

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 


示例 2：

输入：height = [4,2,0,3,2,5]
输出：9


 

提示：

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
```

## 前置知识

- 

## 公司

- 暂无

## 思路

当前位置所存雨水最大值 = Min(当前位置左边最高处, 当前位置右边最高处) - 当前高度

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let Lmax = []
    let Rmax = []
    let max = 0
    let val = 0
    for (let i = 0; i<height.length; i++) {
        Lmax[i] = max = Math.max(max, height[i])
    }

    max = 0

    for (let i = height.length -1; i>= 0; i--) {
        Rmax[i] = max = Math.max(max, height[i])
    }

    for (let i = 0; i<height.length; i++) {
        val += Math.min(Rmax[i], Lmax[i]) - height[i]
    }

    return val
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


## 思路2

双指针 l,r分别指向0和len-1, 当前最大存水量有height[l],height[r]较小的值决定。
1. height[l] < height[r]
    比较当前值和l_max大小，如果大于l_max，则左侧存不了水，更新l_max。 如果小于l_max,存水值为 l_max-height[l]

2. height[l] > height[r]
    比较当前值和r_max大小，如果大于r_max，则右侧存不了水，更新r_max。 如果小于r_max,存水值为 r_max-height[r]

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length
    let  l_max = 0, r_max = 0,
    l = 0, r = n - 1,
    ans = 0
    while(l < r) {
        if (height[l] < height[r]) {
            if (height[l] > l_max) {
                l_max = height[l]
            } else {
                ans += l_max - height[l]
            }
            l++
        } else {
            if (height[r] > r_max) {
                r_max = height[r]
            } else {
                ans += r_max - height[r]
            }
            r--
        }
    }
    return ans
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


