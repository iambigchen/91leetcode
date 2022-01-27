
## 题目地址(959. 由斜杠划分区域)

https://leetcode-cn.com/problems/regions-cut-by-slashes/

## 题目描述

```
在由 1 x 1 方格组成的 N x N 网格 grid 中，每个 1 x 1 方块由 /、\ 或空格构成。这些字符会将方块划分为一些共边的区域。

（请注意，反斜杠字符是转义的，因此 \ 用 "\\" 表示。）。

返回区域的数目。

 

示例 1：

输入：
[
  " /",
  "/ "
]
输出：2
解释：2x2 网格如下：


示例 2：

输入：
[
  " /",
  "  "
]
输出：1
解释：2x2 网格如下：


示例 3：

输入：
[
  "\\/",
  "/\\"
]
输出：4
解释：（回想一下，因为 \ 字符是转义的，所以 "\\/" 表示 \/，而 "/\\" 表示 /\。）
2x2 网格如下：


示例 4：

输入：
[
  "/\\",
  "\\/"
]
输出：5
解释：（回想一下，因为 \ 字符是转义的，所以 "/\\" 表示 /\，而 "\\/" 表示 \/。）
2x2 网格如下：


示例 5：

输入：
[
  "//",
  "/ "
]
输出：3
解释：2x2 网格如下：



 

提示：

1 <= grid.length == grid[0].length <= 30
grid[i][j] 是 '/'、'\'、或 ' '。
```

## 前置知识

- 

## 公司

- 暂无

## 思路

和其他小岛类问题一样，但是需要先构建小岛图。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let new_grid = new Array(n*3).fill(0).map(() => new Array(m*3).fill(0))
    let ans = 0
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (grid[i][j] == '/') {
                new_grid[3 * i][3 * j + 2] = 1
                new_grid[3 * i + 1][3 * j + 1] = 1
                new_grid[3 * i + 2][3 * j] = 1
            }
            if (grid[i][j] == '\\') {
                new_grid[3 * i][3 * j] = 1
                new_grid[3 * i + 1][3 * j + 1] = 1
                new_grid[3 * i + 2][3 * j + 2] = 1
            }
        }
    }

    function dfs (x, y) {
        if (x >= 0 && x < 3 * m && y >= 0 && y < 3 * n && new_grid[x][y] == 0) {
            new_grid[x][y] = 1
            dfs(x-1, y)
            dfs(x+1, y)
            dfs(x, y-1)
            dfs(x, y+1)
        }
    }
    for(let i = 0; i < 3*m; i++) {
        for(let j = 0; j < 3*n; j++) {
           if (new_grid[i][j] == 0) {
                ans++
                dfs(i, j)
           }
        }
    }
    return ans
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


