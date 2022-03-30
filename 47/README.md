
## 题目地址(47. 全排列 II)

https://leetcode-cn.com/problems/permutations-ii/description/

## 题目描述

```
* 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

* 示例 1：
 * 
 * 
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
```

## 前置知识

- 

## 公司

- 暂无

## 思路

回溯试错法，和46不同的是，有重复数字所以需要去重。用visited来存索引值，来判断是否已经被使用过。先排序，再用i > 0 && nums[i] === nums[i-1] && visited[i - 1]来去重。

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
var permuteUnique = function(nums) {
    function backtrack (list, tempList, nums, visited) {
        if (tempList.length === nums.length) {
           return list.push([...tempList])
        }
        for(let i = 0; i < nums.length; i++) {
            if (visited[i]) continue
            if (i > 0 && nums[i] === nums[i-1] && visited[i - 1]) continue
            visited[i] = true
            tempList.push(nums[i])
            backtrack(list, tempList, nums, visited)
            visited[i] = false
            tempList.pop()
        }
    }
    let list = []
    backtrack(list, [], nums.sort((a, b) => a - b), [])
    return list
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n!)$
- 空间复杂度：$O(n)$


