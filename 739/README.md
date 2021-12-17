
## 题目地址(739. 每日温度)

https://leetcode-cn.com/problems/daily-temperatures/

## 题目描述

```
请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]


示例 2:

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]


示例 3:

输入: temperatures = [30,60,90]
输出: [1,1,0]

 

提示：

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
```

## 前置知识

- 

## 公司

- 暂无

## 思路

套用单调栈模板，此题为单调递减栈


## 关键点

单调栈

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(t) {
    let n = t.length
    let s = []
    let res = []
    for(let i = 0; i < n; i++) {
        res[i] = 0;
        while(s.length && t[s[s.length-1]] < t[i]) {
            let top = s.pop()
            let deek = i - top
            res[top] = deek
        }
        s.push(i)
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


