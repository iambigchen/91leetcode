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