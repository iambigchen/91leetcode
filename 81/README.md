
## 题目地址(81. 搜索旋转排序数组 II)

https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/

## 题目描述

```
已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

 

示例 1：

输入：nums = [2,5,6,0,0,1,2], target = 0
输出：true


示例 2：

输入：nums = [2,5,6,0,0,1,2], target = 3
输出：false

 

提示：

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
题目数据保证 nums 在预先未知的某个下标上进行了旋转
-104 <= target <= 104

 

进阶：

这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？
```

## 前置知识

- 

## 公司

- 暂无

## 思路

因为是有一次旋转，所以需要判断比较l和mid的值，如果nums[mid] >= nums[l]则，l-> mid是升序的，否则则，mid -> r是升序的。之后我们只需要判断是否target是否在升序那列，如果是则用二分。

对于有重复值的情况，我们需要将l向后移一步，知道l和mid的值不相同为止

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1

    while(l <= r) {
       let mid = (l+r) >> 1
        if (nums[mid] == target) return true
        while (l < mid && nums[l] == nums[mid]) {
            l++
        }
        if (nums[mid] >= nums[l]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return false
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(logN)$
- 空间复杂度：$O(1)$


