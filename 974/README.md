
## 题目地址(974. 和可被 K 整除的子数组)

https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/

## 题目描述

```
给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。

 

示例：

输入：A = [4,5,0,-2,-3,1], K = 5
输出：7
解释：
有 7 个子数组满足其元素之和可被 K = 5 整除：
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]


 

提示：

1 <= A.length <= 30000
-10000 <= A[i] <= 10000
2 <= K <= 10000
```

## 前置知识

- 

## 公司

- 暂无

## 思路

前缀和，同余定理
同余定理： 如果a, b对k取余相同，则 （a-b）对k取余为0。
如果当前的前缀和为0，则除了之前的值外，当前的值也需要加1

## 关键点

负数的取余，(curSum % k + k) % k

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let curSum = 0
    let map = {0: 0}
    let res = 0
    for(let i = 0; i < nums.length; i++) {
        curSum += nums[i]
        let a = (curSum % k + k) % k
        if (a === 0) {
            map[a] = +map[a] + 1
            res += +map[a]
        } else if (map[a]) {
            res += +map[a]
            map[a] = +map[a] + 1
        } else {
            map[a] = 1
        }
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


