
## 题目地址(2d-matrix-ii/">240. 搜索二维矩阵 II)

https://leetcode-cn.com/problems/search-a-2d-matrix-ii/

## 题目描述

```
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

 

示例 1：

输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true


示例 2：

输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false


 

提示：

m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matrix[i][j] <= 109
每行的所有元素从左到右升序排列
每列的所有元素从上到下升序排列
-109 <= target <= 109
```

## 前置知识

- 

## 公司

- 暂无

## 思路

和74 题相同，可以选取左下角或者右上角进行二分

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    if (m == 0) return false
    let n = matrix[0].length

    let x = m - 1
    let y = 0
    while(x >= 0 && y < n) {
        if (matrix[x][y] == target) {
            return true
        } else if (matrix[x][y] > target) {
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
- 空间复杂度：$O(n)$


