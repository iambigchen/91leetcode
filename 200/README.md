
## 题目地址(200. 岛屿数量)

https://leetcode-cn.com/problems/number-of-islands/

## 题目描述

```
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1


示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3


 

提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 的值为 '0' 或 '1'
```

## 前置知识

- 

## 公司

- 暂无

## 思路

遍历每个值，用另外一个图seen来记录当前值是否被访问过

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {character[][]} grid
 * @return {number}
 */
function isLand (grid, x, y, seen) {
  if (x > grid.length - 1 || x < 0 || y > grid[0].length - 1 || y < 0) return false
  if (grid[x][y] === '0') return false
  if (seen[x][y]) return false
  seen[x][y] = true
  isLand(grid, x + 1, y, seen) 
  isLand(grid, x - 1, y, seen)
  isLand(grid, x, y+1, seen)
  isLand(grid, x, y-1, seen)
  return true
}

var numIslands = function (grid) {
    let seen = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(false))
    let res = 0
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[0].length; j++) {
        if (isLand(grid, i, j, seen)) {
          res++
        }
      }
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n*m)$
- 空间复杂度：$O(n*m)$


## 思路2

不用额外的seen来记录，而是用自身来记录是否被访问过

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {character[][]} grid
 * @return {number}
 */
function isLand (grid, x, y) {
  if (x > grid.length - 1 || x < 0 || y > grid[0].length - 1 || y < 0) return false
  if (grid[x][y] === '0') return false
  grid[x][y] = '0'
  isLand(grid, x + 1, y) 
  isLand(grid, x - 1, y)
  isLand(grid, x, y+1)
  isLand(grid, x, y-1)
  return true
}

var numIslands = function (grid) {
    let res = 0
    for(let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[0].length; j++) {
        if (isLand(grid, i, j)) {
          res++
        }
      }
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n*m)$
- 空间复杂度：$O(n*m)$


