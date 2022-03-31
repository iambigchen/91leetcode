
## 题目地址(78. 子集)

https://leetcode-cn.com/problems/subsets/description/

## 题目描述

```
* 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[[],[0]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10 
 * nums 中的所有元素 互不相同
```

## 前置知识

- 

## 公司

- 暂无

## 思路

回溯

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
var subsets = function(nums) {
    function backtrack (list, tempList, start) {
        list.push([...tempList])
        for(let i = start; i < nums.length; i++) {
            tempList.push(nums[i])
            backtrack(list, tempList, i+1)
            tempList.pop()
        }
    }
    let list = []
    backtrack(list, [], 0)
    return list
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(N!)$
- 空间复杂度：$O(N)$


