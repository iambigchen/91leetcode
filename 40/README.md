## 题目地址(40. 组合总和 II)

https://leetcode-cn.com/problems/combination-sum-ii/description/

## 题目描述

```
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 * 
 * 注意：解集不能包含重复的组合。 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 输出:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * 
 * 示例 2:
 * 
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 输出:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= candidates.length <= 100
 * 1 <= candidates[i] <= 50
 * 1 <= target <= 30

```

## 前置知识

- 

## 公司

- 暂无

## 思路

利用回溯试错法, 和39题不同的是，需要去重, 利用先排序然后比较nums[i] != nums[i - 1]来进行排序

## 关键点



## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
var combinationSum2 = function(candidates, target) {
    function backtrack (list, templist, nums, remain, start) {
        if (remain < 0) {
            return
        } else if (remain === 0) {
            return list.push([...templist])
        }
        for(let i = start; i < nums.length; i++) {
            // 去重
            if (i > start && nums[i] == nums[i - 1]) continue
            templist.push(nums[i])
            backtrack(list, templist, nums, remain - nums[i], i+1)
            templist.pop()
        }

    }
    let list = []
    backtrack(list, [], candidates.sort((a, b) => a - b), target, 0)
    return list
};
```


**复杂度分析**



