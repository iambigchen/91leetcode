
## 题目地址(46. 全排列)

https://leetcode-cn.com/problems/permutations/description/

## 题目描述

```
* 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * nums 中的所有整数 互不相同
```

## 前置知识

- 

## 公司

- 暂无

## 思路

回溯试错法，数据没有重复值，所以可以用templist.includes(nums[i])来判断是否已经用过nums[i]

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
var permute = function(nums) {
    function backtrack (list, templist, nums) {
        if (templist.length === nums.length) {
            return list.push([...templist])
        } else if (templist.length > nums.length){
            return
        }
        for(let i = 0; i < nums.length; i++) {
            if (templist.includes(nums[i])) continue;
            templist.push(nums[i])
            backtrack(list, templist, nums)
            templist.pop()
        }
    }
    let list = []
    backtrack(list, [], nums)
    return list
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n!)$
- 空间复杂度：$O(n)$


