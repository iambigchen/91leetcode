
## 题目地址(743. 网络延迟时间)

https://leetcode-cn.com/problems/network-delay-time/

## 题目描述

```
有 n 个网络节点，标记为 1 到 n。

给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。

现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。

 

示例 1：

输入：times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
输出：2


示例 2：

输入：times = [[1,2,1]], n = 2, k = 1
输出：1


示例 3：

输入：times = [[1,2,1]], n = 2, k = 2
输出：-1


 

提示：

1 <= k <= n <= 100
1 <= times.length <= 6000
times[i].length == 3
1 <= ui, vi <= n
ui != vi
0 <= wi <= 100
所有 (ui, vi) 对都 互不相同（即，不含重复边）
```

## 前置知识

- 

## 公司

- 暂无

## 思路

先构建图，再用DJ算法计算从起始点到每个点的距离。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
ar networkDelayTime = function(times, n, k) {
    const graph = {}
    for(const [from, to, weight] of times) {
        if (!graph[from]) {
            graph[from] = []
        }
        graph[from].push([to, weight])
    }

    let ans = -1;
    for(let to = 1; to <= n; to++){
        let dist = dikstra(graph, k, to)
        if(dist === -1) return -1;
        ans = Math.max(ans, dist);
    }
    return ans
};

function dikstra (graph, startPoint, endPoint) {
    const visited = new Set()
    const minHeap = new MinPriorityQueue();
    minHeap.enqueue(startPoint, 0)

    while(!minHeap.isEmpty()) {
        const {element, priority} = minHeap.dequeue();
        const curPoint = element;
        const curCost = priority;
        if(visited.has(curPoint)) continue;
        visited.add(curPoint)
        if(curPoint === endPoint) return curCost;
        if(!graph[curPoint]) continue;

        for(const [nextPoint, nextCost] of graph[curPoint]){
            if(visited.has(nextPoint)) continue;
            const accumulatedCost = nextCost + curCost;
            minHeap.enqueue(nextPoint, accumulatedCost);
        }
    }
    return -1
}

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(vlogv+e)$
- 空间复杂度：$O(n)$


