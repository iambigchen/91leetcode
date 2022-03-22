
## 题目地址(1834. 单线程 CPU)

https://leetcode-cn.com/problems/single-threaded-cpu/

## 题目描述

```
给你一个二维数组 tasks ，用于表示 n​​​​​​ 项从 0 到 n - 1 编号的任务。其中 tasks[i] = [enqueueTimei, processingTimei] 意味着第 i​​​​​​​​​​ 项任务将会于 enqueueTimei 时进入任务队列，需要 processingTimei 的时长完成执行。

现有一个单线程 CPU ，同一时间只能执行 最多一项 任务，该 CPU 将会按照下述方式运行：

如果 CPU 空闲，且任务队列中没有需要执行的任务，则 CPU 保持空闲状态。
如果 CPU 空闲，但任务队列中有需要执行的任务，则 CPU 将会选择 执行时间最短 的任务开始执行。如果多个任务具有同样的最短执行时间，则选择下标最小的任务开始执行。
一旦某项任务开始执行，CPU 在 执行完整个任务 前都不会停止。
CPU 可以在完成一项任务后，立即开始执行一项新任务。

返回 CPU 处理任务的顺序。

 

示例 1：

输入：tasks = [[1,2],[2,4],[3,2],[4,1]]
输出：[0,2,3,1]
解释：事件按下述流程运行： 
- time = 1 ，任务 0 进入任务队列，可执行任务项 = {0}
- 同样在 time = 1 ，空闲状态的 CPU 开始执行任务 0 ，可执行任务项 = {}
- time = 2 ，任务 1 进入任务队列，可执行任务项 = {1}
- time = 3 ，任务 2 进入任务队列，可执行任务项 = {1, 2}
- 同样在 time = 3 ，CPU 完成任务 0 并开始执行队列中用时最短的任务 2 ，可执行任务项 = {1}
- time = 4 ，任务 3 进入任务队列，可执行任务项 = {1, 3}
- time = 5 ，CPU 完成任务 2 并开始执行队列中用时最短的任务 3 ，可执行任务项 = {1}
- time = 6 ，CPU 完成任务 3 并开始执行任务 1 ，可执行任务项 = {}
- time = 10 ，CPU 完成任务 1 并进入空闲状态


示例 2：

输入：tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
输出：[4,3,2,0,1]
解释：事件按下述流程运行： 
- time = 7 ，所有任务同时进入任务队列，可执行任务项  = {0,1,2,3,4}
- 同样在 time = 7 ，空闲状态的 CPU 开始执行任务 4 ，可执行任务项 = {0,1,2,3}
- time = 9 ，CPU 完成任务 4 并开始执行任务 3 ，可执行任务项 = {0,1,2}
- time = 13 ，CPU 完成任务 3 并开始执行任务 2 ，可执行任务项 = {0,1}
- time = 18 ，CPU 完成任务 2 并开始执行任务 0 ，可执行任务项 = {1}
- time = 28 ，CPU 完成任务 0 并开始执行任务 1 ，可执行任务项 = {}
- time = 40 ，CPU 完成任务 1 并进入空闲状态

 

提示：

tasks.length == n
1 <= n <= 105
1 <= enqueueTimei, processingTimei <= 109
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
 * @param {number[][]} tasks
 * @return {number[]}
 */
/*
 * @lc app=leetcode.cn id=1834 lang=javascript
 *
 * [1834] 单线程 CPU
 *
 * https://leetcode-cn.com/problems/single-threaded-cpu/description/
 *
 * algorithms
 * Medium (35.00%)
 * Likes:    43
 * Dislikes: 0
 * Total Accepted:    6K
 * Total Submissions: 17K
 * Testcase Example:  '[[1,2],[2,4],[3,2],[4,1]]'
 *
 * 给你一个二维数组 tasks ，用于表示 n​​​​​​ 项从 0 到 n - 1 编号的任务。其中 tasks[i] = [enqueueTimei,
 * processingTimei] 意味着第 i^​​​​​​​​​​ 项任务将会于 enqueueTimei 时进入任务队列，需要
 * processingTimei 的时长完成执行。
 * 
 * 现有一个单线程 CPU ，同一时间只能执行 最多一项 任务，该 CPU 将会按照下述方式运行：
 * 
 * 
 * 如果 CPU 空闲，且任务队列中没有需要执行的任务，则 CPU 保持空闲状态。
 * 如果 CPU 空闲，但任务队列中有需要执行的任务，则 CPU 将会选择 执行时间最短
 * 的任务开始执行。如果多个任务具有同样的最短执行时间，则选择下标最小的任务开始执行。
 * 一旦某项任务开始执行，CPU 在 执行完整个任务 前都不会停止。
 * CPU 可以在完成一项任务后，立即开始执行一项新任务。
 * 
 * 
 * 返回 CPU 处理任务的顺序。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：tasks = [[1,2],[2,4],[3,2],[4,1]]
 * 输出：[0,2,3,1]
 * 解释：事件按下述流程运行： 
 * - time = 1 ，任务 0 进入任务队列，可执行任务项 = {0}
 * - 同样在 time = 1 ，空闲状态的 CPU 开始执行任务 0 ，可执行任务项 = {}
 * - time = 2 ，任务 1 进入任务队列，可执行任务项 = {1}
 * - time = 3 ，任务 2 进入任务队列，可执行任务项 = {1, 2}
 * - 同样在 time = 3 ，CPU 完成任务 0 并开始执行队列中用时最短的任务 2 ，可执行任务项 = {1}
 * - time = 4 ，任务 3 进入任务队列，可执行任务项 = {1, 3}
 * - time = 5 ，CPU 完成任务 2 并开始执行队列中用时最短的任务 3 ，可执行任务项 = {1}
 * - time = 6 ，CPU 完成任务 3 并开始执行任务 1 ，可执行任务项 = {}
 * - time = 10 ，CPU 完成任务 1 并进入空闲状态
 * 
 * 
 * 示例 2：
 * 
 * 输入：tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
 * 输出：[4,3,2,0,1]
 * 解释：事件按下述流程运行： 
 * - time = 7 ，所有任务同时进入任务队列，可执行任务项  = {0,1,2,3,4}
 * - 同样在 time = 7 ，空闲状态的 CPU 开始执行任务 4 ，可执行任务项 = {0,1,2,3}
 * - time = 9 ，CPU 完成任务 4 并开始执行任务 3 ，可执行任务项 = {0,1,2}
 * - time = 13 ，CPU 完成任务 3 并开始执行任务 2 ，可执行任务项 = {0,1}
 * - time = 18 ，CPU 完成任务 2 并开始执行任务 0 ，可执行任务项 = {1}
 * - time = 28 ，CPU 完成任务 0 并开始执行任务 1 ，可执行任务项 = {}
 * - time = 40 ，CPU 完成任务 1 并进入空闲状态
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * tasks.length == n
 * 1 <= n <= 10^5
 * 1 <= enqueueTimei, processingTimei <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    let p = 0
    let heap = new minHeap()
    let res = []
    tasks = tasks.map((t, i) => [...t, i])
    tasks.sort((a, b) => a[0] - b[0])
    let s = 0
    while(res.length < tasks.length) {
        for (let i = s; i < tasks.length; i++) {
            if (tasks[i][0] <= p) {
                heap.push(tasks[i])
            } else {
                s = i
                break
            }
        }
        let c = heap.pop()
        console.log('---------', c)
        if (c) {
            res.push(c[2])
            p += c[1]
        } else {
            p++
        }
        
    }
    return res
};

function minHeap(A = []) {
    this.heapify(A);
}
  
  minHeap.prototype._shiftUp = function(i) {
    let parent_i = (i / 2) >>> 0;
    while (parent_i > 0) {
      if (this.h[i][0] < this.h[parent_i][0]) {
        [this.h[i], this.h[parent_i]] = [this.h[parent_i], this.h[i]];
      } else if (this.h[i][0] === this.h[parent_i][0] && this.h[i][1] < this.h[parent_i][1]) {
        [this.h[i], this.h[parent_i]] = [this.h[parent_i], this.h[i]];
      }
      parent_i = (parent_i / 2) >>> 0;
    }
  };
  
  minHeap.prototype._shiftDown = function(i) {
    while (i * 2 <= this.h.length - 1) {
      const mc = this._minChild(i);
      if (this.h[i][1] > this.h[mc][1]) {
        [this.h[i], this.h[mc]] = [this.h[mc], this.h[i]];
      } else if (this.h[i][0] == this.h[mc][0] && this.h[i][1] > this.h[mc][1]) {
        [this.h[i], this.h[mc]] = [this.h[mc], this.h[i]];
      }
      i = mc;
    }
  };
  
  minHeap.prototype._minChild = function(i) {
    if (i * 2 + 1 > this.h.length - 1) return i * 2;
    if (this.h[i * 2][1] < this.h[i * 2 + 1][1]) return i * 2;
    return i * 2 + 1;
  };
  
  minHeap.prototype.pop = function() {
    if (this.h.length === 1) return null
    const ans = this.h[1];
    this.h[1] = this.h[this.h.length - 1];
    this.h.pop();
    this._shiftDown(1);
    return ans;
  };
  
  minHeap.prototype.push = function(a) {
    this.h.push(a);
    this._shiftUp(this.h.length - 1);
  };
  
  minHeap.prototype.heapify = function(A) {
    this.h = [0].concat(A);
    i = 1;
    while (i < this.h.length) {
      this._shiftDown(i);
      i++;
    }
  };
// @lc code=end

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


