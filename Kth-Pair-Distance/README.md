
## 题目地址( Kth-Pair-Distance)

https://binarysearch.com/problems/Kth-Pair-Distance

## 题目描述

```
Given a list of integers nums and an integer k, return the k-th (0-indexed) smallest abs(x - y) for every pair of elements (x, y) in nums. Note that (x, y) and (y, x) are considered the same pair.

Constraints

n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [1, 5, 3, 2]
k = 3
Output
2
Explanation
Here are all the pair distances:

abs(1 - 5) = 4
abs(1 - 3) = 2
abs(1 - 2) = 1
abs(5 - 3) = 2
abs(5 - 2) = 3
abs(3 - 2) = 1
Sorted in ascending order we have [1, 1, 2, 2, 3, 4].

 
```

## 前置知识

- 

## 公司

- 暂无

## 思路

二分法计数，搜索最左侧满足条件的值。 计数函数，利用左右指针

## 关键点

第k大的值，因为k是从0开始的，所以数量上需要将k+1  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

class Solution {
    solve(nums, k) {
            k = k+1
            nums.sort((a,b) => a - b)
            let absMin = 0
            let absMax = nums[nums.length-1]-nums[0]
            while(absMin <= absMax) {
                let absMid = (absMin+absMax) >> 1
                if (count_not_greater(nums, absMid) >= k) {
                    absMax = absMid - 1
                } else {
                    absMin = absMid + 1
                }
            }
            return absMin
    }
}

function count_not_greater (nums, target) {
    let count = 0
    let l = 0
    for(let r = 1; r < nums.length; r++) {
        while (nums[r] - nums[l] > target) {
            l++;
        }
        count += r - l
    }
    return count
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(nlogn)$
- 空间复杂度：$O(1)$


