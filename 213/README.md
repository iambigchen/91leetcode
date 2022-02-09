
## 题目地址(213. 打家劫舍 II)

https://leetcode-cn.com/problems/house-robber-ii/

## 题目描述

```
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

 

示例 1：

输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。


示例 2：

输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。

示例 3：

输入：nums = [1,2,3]
输出：3


 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 1000
```

## 前置知识

- 

## 公司

- 暂无

## 思路

这题和198题区别在于，如果从第一家开始，结束就不能以最后一家结束。所以可以分成两种情况：从第一家开始，倒数第二家结束；和从第二家开始，最后一家结束。分别技术后，再计算最大值即可。

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
     if (nums.length == 1) return nums[0]
    let a = helper(nums, 2)  
    let b = helper(nums, 3)  
    return Math.max(a, b)
};
function helper (nums, start) {
    let a = 0
    let b = 0
    for (let i = start; i < nums.length + start - 1; i++) {
        var cur = Math.max(a + nums[i - 2], b);
        a = b
        b = cur
    }
    return b
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


