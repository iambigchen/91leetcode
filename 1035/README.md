
## 题目地址(1035. 不相交的线)

https://leetcode-cn.com/problems/uncrossed-lines/

## 题目描述

```
在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。

现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足满足：

 nums1[i] == nums2[j]
且绘制的直线不与任何其他连线（非水平线）相交。

请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。

以这种方法绘制线条，并返回可以绘制的最大连线数。

 

示例 1：

输入：nums1 = [1,4,2], nums2 = [1,2,4]
输出：2
解释：可以画出两条不交叉的线，如上图所示。 
但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2 的直线相交。


示例 2：

输入：nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
输出：3


示例 3：

输入：nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
输出：2

 

提示：

1 <= nums1.length, nums2.length <= 500
1 <= nums1[i], nums2[j] <= 2000

 
```

## 前置知识

- 

## 公司

- 暂无

## 思路

1143换皮题，可以转换成求两个数组不连续的最长公共子序列。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(text1, text2) {
    let m = text1.length
    let n = text2.length
    let ans = 0
    let dp = new Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    for(let i = 1; i < m + 1; i++) {
        for(let j = 1; j < n + 1; j++) {
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = dp[i-1][j-1]+1
                ans = Math.max(ans, dp[i][j])
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return ans
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n*m)$
- 空间复杂度：$O(n*m)$


