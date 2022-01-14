
## 题目地址(74. 搜索二维矩阵)

https://leetcode-cn.com/problems/search-a-2d-matrix/description/

## 题目描述

```
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。

 

示例 1：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true


示例 2：


输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false


 

提示：


m == matrix.length
n == matrix[i].length
1 
-10^4 
```

## 前置知识

- 

## 公司

- 暂无

## 思路

选择矩阵的左下角， 如果当前的值大于target，则矩阵右侧和下方都需要看了。如果当前值小于target，矩阵的左侧和上方都不需要看了

同理，选择矩阵的右上角也是可以的。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    if (m == 0) return false
    let n = matrix[0].length

    let x = m - 1
    let y = 0
    while(y < n && x >= 0) {
        if (matrix[x][y] == target) return true
        if (matrix[x][y] > target) {
            x--
        } else if (matrix[x][y] < target) {
            y++
        }
    }
    return false
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


## 选择左上角代码

```js
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    if (m == 0) return false
    let n = matrix[0].length

    let x = 0
    let y = n - 1
    while(x < m && y >= 0) {
        if (matrix[x][y] == target) return true
        if (matrix[x][y] > target) {
            y--
        } else if (matrix[x][y] < target) {
            x++
        }
    }
    return false
};
```