
## 题目地址(886. 可能的二分法)

https://leetcode-cn.com/problems/possible-bipartition/

## 题目描述

```
给定一组 N 人（编号为 1, 2, ..., N）， 我们想把每个人分进任意大小的两组。

每个人都可能不喜欢其他人，那么他们不应该属于同一组。

形式上，如果 dislikes[i] = [a, b]，表示不允许将编号为 a 和 b 的人归入同一组。

当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。

 

示例 1：

输入：N = 4, dislikes = [[1,2],[1,3],[2,4]]
输出：true
解释：group1 [1,4], group2 [2,3]


示例 2：

输入：N = 3, dislikes = [[1,2],[1,3],[2,3]]
输出：false


示例 3：

输入：N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
输出：false


 

提示：

1 <= N <= 2000
0 <= dislikes.length <= 10000
dislikes[i].length == 2
1 <= dislikes[i][j] <= N
dislikes[i][0] < dislikes[i][1]
对于 dislikes[i] == dislikes[j] 不存在 i != j
```

## 前置知识

- 

## 公司

- 暂无

## 思路

除了构建图来存储是否喜欢的关系外，还需要colors来存储分组情况。0不是没有分组，1表示分第一组，-1表示第二组。如果当前这个人没有分组，并且它不能分组，则返回false。

是否能分组的条件是：找到当前人的不喜欢人，如果不喜欢的人和当前人分组相同，则不能分组。如果不喜欢的人还没有分组，则为他分为另外一组，继续判断不喜欢的人是否可以分组。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    let graph = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let colors = new Array(n).fill(0)
    for (const [a, b] of dislikes) {
        graph[a-1][b-1] = 1
        graph[b-1][a-1] = 1
    }

    for (let i = 0; i < n; i++) {
        if (colors[i] === 0 && !dfs(graph, colors, i, 1, n)) {
            return false
        }
    }
    return true
};

function dfs (graph, colors, i, color, n) {
    colors[i] = color
    for (let j = 0; j < n; j++) {
        if (graph[i][j] == 1) {
            if (colors[j] == color) {
                return false
            } else if (colors[j] == 0 && !dfs(graph, colors, j, -1 * color, n)) {
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


