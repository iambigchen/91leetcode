
## 题目地址(347. 前 K 个高频元素)

https://binarysearch.com/problems/Delete-Sublist-to-Make-Sum-Divisible-By-K

## 题目描述

```
You are given a list of positive integers nums and a positive integer k. Return the length of the shortest sublist (can be empty sublist ) you can delete such that the resulting list's sum is divisible by k. You cannot delete the entire list. If it's not possible, return -1.

Constraints

1 ≤ n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [1, 8, 6, 4, 5]
k = 7
Output
2
Explanation
We can remove the sublist [6, 4] to get [1, 8, 5] which sums to 14 and is divisible by 7.

 

进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。
```

## 前置知识

- 

## 公司

- 暂无

## 思路

(total - (pre[j] - pre[i - 1])) % k = 0

=> total % k = (pre[j] - pre[i - 1]) % k

=> pre[i - 1] % k = (pre[j] - total) % k

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
// 因为a可能是负数，所以需要这样求余
var floorMod = function (a, b) {
  return (a % b + b) % b;
};
class Solution {
    solve(nums, k) {
       var map = new Map();
        map.set(0, -1);
        var res = nums.length;
        var target = 0;
        var currSum = 0;
        for (let i = 0; i < nums.length; i++) {
            target += nums[i];
        }
        target = target % k;
       for (let i =0; i < nums.length; i++) {
           currSum =  (nums[i] + currSum) % k;
           map.set(currSum, i)
           var prevSum = floorMod(currSum - target, k)
           if (map.has(prevSum)) {
               res = Math.min(res, i-map.get(prevSum))
           }
       }
       return res === nums.length ? -1 : res
    }
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


