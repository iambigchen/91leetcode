
## 题目地址(463. 岛屿的周长)

https://leetcode-cn.com/problems/island-perimeter/

## 题目描述

```
给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

 

示例 1：

输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
输出：16
解释：它的周长是上面图片中的 16 个黄色的边

示例 2：

输入：grid = [[1]]
输出：4


示例 3：

输入：grid = [[1,0]]
输出：4


 

提示：

row == grid.length
col == grid[i].length
1 <= row, col <= 100
grid[i][j] 为 0 或 1
```

## 前置知识

- 

## 公司

- 暂无

## 思路

和695题一样，只不过改成了计算周长，需要对重复的边进行筛除

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let res = 0
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
           res +=helper(grid, i, j)
        }
    }
    
    return res
};
function helper (grid, x, y) {
    if (x < 0 || y < 0 || x > grid.length - 1 || y > grid[0].length - 1) return 0
    if (grid[x][y] != 1) return 0
    let area = 4
    grid[x][y] = -1
    if (x > 0 && grid[x-1][y] != 0) {
        area -= 2
    }
    if (y > 0 && grid[x][y-1] != 0) {
        area -= 2
    }
    area += helper(grid, x-1, y)
    area += helper(grid, x+1, y)
    area += helper(grid, x, y-1)
    area += helper(grid, x, y+1)
    return area
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


