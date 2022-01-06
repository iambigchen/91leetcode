
## 题目地址(1462. 课程表 IV)

https://leetcode-cn.com/problems/course-schedule-iv/

## 题目描述

```
你总共需要上 n 门课，课程编号依次为 0 到 n-1 。

有的课会有直接的先修课程，比如如果想上课程 0 ，你必须先上课程 1 ，那么会以 [1,0] 数对的形式给出先修课程数对。

给你课程总数 n 和一个直接先修课程数对列表 prerequisite 和一个查询对列表 queries 。

对于每个查询对 queries[i] ，请判断 queries[i][0] 是否是 queries[i][1] 的先修课程。

请返回一个布尔值列表，列表中每个元素依次分别对应 queries 每个查询对的判断结果。

注意：如果课程 a 是课程 b 的先修课程且课程 b 是课程 c 的先修课程，那么课程 a 也是课程 c 的先修课程。

 

示例 1：

输入：n = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
输出：[false,true]
解释：课程 0 不是课程 1 的先修课程，但课程 1 是课程 0 的先修课程。


示例 2：

输入：n = 2, prerequisites = [], queries = [[1,0],[0,1]]
输出：[false,false]
解释：没有先修课程对，所以每门课程之间是独立的。


示例 3：

输入：n = 3, prerequisites = [[1,2],[1,0],[2,0]], queries = [[1,0],[1,2]]
输出：[true,true]


示例 4：

输入：n = 3, prerequisites = [[1,0],[2,0]], queries = [[0,1],[2,0]]
输出：[false,true]


示例 5：

输入：n = 5, prerequisites = [[0,1],[1,2],[2,3],[3,4]], queries = [[0,4],[4,0],[1,3],[3,0]]
输出：[true,false,true,false]


 

提示：

2 <= n <= 100
0 <= prerequisite.length <= (n * (n - 1) / 2)
0 <= prerequisite[i][0], prerequisite[i][1] < n
prerequisite[i][0] != prerequisite[i][1]
先修课程图中没有环。
先修课程图中没有重复的边。
1 <= queries.length <= 10^4
queries[i][0] != queries[i][1]
```

## 前置知识

- 

## 公司

- 暂无

## 思路

建图，计算每两个点之间的距离。用FloydWarshall模板，i到j的距离，是否有另外一个节点k，使得i->k->j的距离小于i->j距离

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    const graph = {}
    for(const [pre, course] of prerequisites) {
        if(!graph[pre]) graph[pre] = {}
        graph[pre][course] = true
    }
    const ans = []
    const dist = FloydWarshall(graph, numCourses)
    for(const [pre, course] of queries){
        ans.push(dist[pre][course])
    }

    return ans
};

function FloydWarshall (graph, n) {
    let dist = Array.from({length: n + 1}).map(() => Array.from({length: n + 1}).fill(false))
    for(let k = 0; k < n; k++){
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(graph[i] && graph[i][j]) dist[i][j] = true
                if(graph[i] && graph[k]){
                    dist[i][j] = (dist[i][j])|| (dist[i][k] && dist[k][j])
                }else if(graph[i]){
                    dist[i][j] = dist[i][j]
                }
            }
        }
    }
    return dist
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n**3)$
- 空间复杂度：$O(n)$


