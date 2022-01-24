
## 题目地址(1162. 地图分析)

https://leetcode-cn.com/problems/as-far-from-land-as-possible/

## 题目描述

```
你现在手里有一份大小为 N x N 的 网格 grid，上面的每个 单元格 都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，请你找出一个海洋单元格，这个海洋单元格到离它最近的陆地单元格的距离是最大的。

我们这里说的距离是「曼哈顿距离」（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个单元格之间的距离是 |x0 - x1| + |y0 - y1| 。

如果网格上只有陆地或者海洋，请返回 -1。

 

示例 1：

输入：[[1,0,1],[0,0,0],[1,0,1]]
输出：2
解释： 
海洋单元格 (1, 1) 和所有陆地单元格之间的距离都达到最大，最大距离为 2。


示例 2：

输入：[[1,0,0],[0,0,0],[0,0,0]]
输出：4
解释： 
海洋单元格 (2, 2) 和所有陆地单元格之间的距离都达到最大，最大距离为 4。


 

提示：

1 <= grid.length == grid[0].length <= 100
grid[i][j] 不是 0 就是 1
```

## 前置知识

- 

## 公司

- 暂无

## 思路

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
 var maxDistance = function(grid) {
    let query = []
    for(let i =0; i < grid.length; i++) {
        for(let j =0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                query.push([i, j])
            }
        }   
    }
    if (query.length === 0 || query.length === grid.length ** 2) {
        return  -1
    }
    let step = -1

    while(query.length > 0) {
        let len = query.length;
        for (let k = 0; k < len; k++) {
            let [x, y] = query.shift()
            for(const [xi, yi] of [[x+1, y], [x-1, y],[x, y+1],[x, y-1]]) {
                if (xi >= 0 && yi >= 0 && xi <= grid.length -1 && yi <= grid[0].length - 1 && grid[xi][yi] == 0) {
                    grid[xi][yi] = -1
                    query.push([xi, yi])
                }
            }
        }
        step++
    }
    return step
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


