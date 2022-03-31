
## 题目地址(90. 子集 II)

https://leetcode-cn.com/problems/subsets-ii/description/

## 题目描述

```
* 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
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
```

## 前置知识

- 

## 公司

- 暂无

## 思路

回溯+去重

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

function backtrack(list, tempList, nums, start) {
    list.push([...tempList]);
    for (let i = start; i < nums.length; i++) {
      // 和78.subsets的区别在于这道题nums可以有重复
      // 因此需要过滤这种情况
      if (i > start && nums[i] === nums[i - 1]) continue;
      tempList.push(nums[i]);
      backtrack(list, tempList, nums, i + 1);
      tempList.pop();
    }
  }
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  var subsetsWithDup = function (nums) {
    const list = [];
    backtrack(
      list,
      [],
      nums.sort((a, b) => a - b),
      0,
      []
    );
    return list;
  };

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n!)$
- 空间复杂度：$O(n)$


