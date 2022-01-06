# 91leetcode

## 前缀和模板

```js
function notGreater (R) {
    let ans = 0
    let cnt = 0
    for (let i = 0; i < nums.length;  i++) {
        if (nums[i] <= R) {
            cnt++
        } else {
            cnt = 0
        }
        ans += cnt
    }
    return ans
}
```

## 单调栈模板

```js
var monostoneStack = function (T) {
  let stack = [];
  let result = [];
  for (let i = 0; i < T.length; i++) {
    result[i] = 0;
    while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
      let peek = stack.pop();
      result[peek] = i - peek;
    }
    stack.push(i);
  }
  return result;
};
```

## bfs模板

```js
bfs(root) {
 queue = []
 queue.push(root)
 while queue.length {
  curLevel = queue
  queue = []
  for i = 0 to curLevel.length {
   doSomething(curLevel[i])
   if (curLevel[i].left) {
    queue.push(curLevel[i].left)
   }
   if (curLevel[i].right) {
    queue.push(curLevel[i].right)
   }
  }
 }
}
```

## 快慢指针模板

```js
l = 0
r = 0
while 没有遍历完
  if 一定条件
    l += 1
  r += 1
return 合适的值
```

## 左右端点指针

```js
l = 0
r = n - 1
while l < r
  if 找到了
    return 找到的值
  if 一定条件1
    l += 1
  else if  一定条件2
    r -= 1
return 没找到
```

## 固定间距指针

```js
l = 0
r = k
while 没有遍历完
  自定义逻辑
  l += 1
  r += 1
return 合适的值
```

## 同余定理

如果 a % k = b % k ,则 （a - b）% k = 0

## 排列组合

C(n, m) = n!/m!(n-m)!

A(n, m) = n!/(n-m)! = n * (n-1) * .... * (n - m + 1)

## DJ算法模板

```js
const dijkstra = (graph, start, end) => {
  const visited = new Set()
  const minHeap = new MinPriorityQueue();
  //注：此处new MinPriorityQueue()用了LC的内置API，它的enqueue由两个部分组成：
  //element 和 priority。
  //堆会按照priority排序，可以用element记录一些内容。
  minHeap.enqueue(startPoint, 0)

  while(!minHeap.isEmpty()){
    const {element, priority} = minHeap.dequeue();
    //下面这两个变量不是必须的，只是便于理解
    const curPoint = element;
    const curCost = priority;

    if(curPoint === end) return curCost;
    if(visited.has(curPoint)) continue;
    visited.add(curPoint);

    if(!graph[curPoint]) continue;
    for(const [nextPoint, nextCost] of graph[curPoint]){
      if(visited.has(nextPoint)) continue;
      //注意heap里面的一定是从startPoint到某个点的距离；
      //curPoint到nextPoint的距离是nextCost；但curPoint不一定是startPoint。
      const accumulatedCost = nextCost + curCost;
      minHeap.enqueue(nextPoint, accumulatedCost);
    }
  }
  return -1
}
```

## floydWarshall模板

```js
const floydWarshall = (graph, v)=>{
  const dist = new Array(v).fill(0).map(() => new Array(v).fill(Number.MAX_SAFE_INTEGER))

  for(let i = 0; i < v; i++){
    for(let j = 0; j < v; j++){
      //两个点相同，距离为0
      if(i === j) dist[i][j] = 0;
      //i 和 j 的距离已知
      else if(graph[i][j]) dist[i][j] = graph[i][j];
      //i 和 j 的距离未知，默认是最大值
      else dist[i][j] = Number.MAX_SAFE_INTEGER;
    }
  }

  //检查是否有一个点 k 使得 i 和 j 之间距离更短，如果有，则更新最短距离
  for(let k = 0; k < v; k++){
    for(let i = 0; i < v; i++){
      for(let j = 0; j < v; j++){
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
      }
    }
  }
  return 看需要
}
```