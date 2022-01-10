
## 题目地址(785. 判断二分图)

https://leetcode-cn.com/problems/is-graph-bipartite/

## 题目描述

```
存在一个 无向图 ，图中有 n 个节点。其中每个节点都有一个介于 0 到 n - 1 之间的唯一编号。给你一个二维数组 graph ，其中 graph[u] 是一个节点数组，由节点 u 的邻接节点组成。形式上，对于 graph[u] 中的每个 v ，都存在一条位于节点 u 和节点 v 之间的无向边。该无向图同时具有以下属性：
不存在自环（graph[u] 不包含 u）。
不存在平行边（graph[u] 不包含重复值）。
如果 v 在 graph[u] 内，那么 u 也应该在 graph[v] 内（该图是无向图）
这个图可能不是连通图，也就是说两个节点 u 和 v 之间可能不存在一条连通彼此的路径。

二分图 定义：如果能将一个图的节点集合分割成两个独立的子集 A 和 B ，并使图中的每一条边的两个节点一个来自 A 集合，一个来自 B 集合，就将这个图称为 二分图 。

如果图是二分图，返回 true ；否则，返回 false 。

 

示例 1：

输入：graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
输出：false
解释：不能将节点分割成两个独立的子集，以使每条边都连通一个子集中的一个节点与另一个子集中的一个节点。

示例 2：

输入：graph = [[1,3],[0,2],[1,3],[0,2]]
输出：true
解释：可以将节点分成两组: {0, 2} 和 {1, 3} 。

 

提示：

graph.length == n
1 <= n <= 100
0 <= graph[u].length < n
0 <= graph[u][i] <= n - 1
graph[u] 不会包含 u
graph[u] 的所有值 互不相同
如果 graph[u] 包含 v，那么 graph[v] 也会包含 u
```

## 前置知识

- 

## 公司

- 暂无

## 思路
和886题一样，除了构建图外，还需要用colors来标注是否已经分组。不同的是，构建图的方式不同。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let n = graph.length
    let colors = new Array(n).fill(0)
    let grid = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < graph[i].length; j++) {
            let x = graph[i][j]
            grid[i][x] = 1
            grid[x][i] = 1
        }
    }
    for(let i = 0; i < n; i++) {
        if (colors[i] == 0 && !dfs(colors, 1, grid, n, i)) {
            return false
        }
    }
    return true
};

function dfs (colors, color, grid, n, i) {
    colors[i] = color
    for(let j =0; j< n; j++) {
        if (grid[i][j]) {
            if (colors[j] == color) {
                return false
            }
            if (colors[j] == 0 && !dfs(colors, -1 * color, grid, n, j)) {
                return false
            }
        }
    }
    return true
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n**2)$


