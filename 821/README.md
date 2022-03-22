
## 题目地址(821. 字符的最短距离)

https://leetcode-cn.com/problems/shortest-distance-to-a-character/

## 题目描述

```
给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

 

示例 1：

输入：s = "loveleetcode", c = "e"
输出：[3,2,1,0,1,0,0,1,2,2,1,0]
解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。


示例 2：

输入：s = "aaab", c = "b"
输出：[3,2,1,0]


 

提示：
1 <= s.length <= 104
s[i] 和 c 均为小写英文字母
题目数据保证 c 在 s 中至少出现一次
```

## 前置知识

- 

## 公司

- 暂无

## 思路

遍历s每个值，如果当前值正好是c，则跳过。否则，从当前值向左、右分别遍历，直到遇到c，再计算左右的最短距离。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let res = new Array(s.length).fill(0)

    for(let i = 0; i<s.length; i++) {
        if (s[i] === c) {
            res[i] = 0
            continue
        }
        let l = i - 1
        let r = i + 1
        let disL = Infinity
        let disR = Infinity
        while(l >= 0) {
            if (s[l] === c) {
                disL = Math.abs(i - l)
                break
            } else {
                l--
            }
        }
        while(r < s.length) {
            if (s[r] === c) {
                disR = Math.abs(i - r)
                break
            } else {
                r++
            }
        }
        res[i] = Math.min(disL, disR)
    }

    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n^2)$
- 空间复杂度：$O(1)$


## 思路2

先用数组存下所有c出现过的下标，再次遍历s，计算当前值和每个c出现过下标的距离，求出最小值

## 关键点

再次遍历s，计算最小距离时，因为indexArr存的是c出现过的下标，是递增，所以可以做一次剪枝

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let res = new Array(s.length).fill(0)
    let indexArr = []

    for(let i = 0; i<s.length; i++) {
        if (s[i] === c) {
            indexArr.push(i)
        }
    }

    for(let i = 0; i<s.length; i++) {
        if (s[i] === c) {
            res[i] = 0
            continue
        }
        let dist = Infinity
        for(let j = 0; j< indexArr.length; j++) {
            if (Math.abs(indexArr[j] - i) >= dist) {
                break
            }
           dist = Math.abs(indexArr[j] - i)
        }
        res[i] = dist
    }

    return res
};

```


**复杂度分析**

令 n 为数组长度。k 为c在s出现过的次数。

- 时间复杂度：$O(n*k)$
- 空间复杂度：$O(k)$


## 思路3

第一次遍历，让s存下当前索引i左侧离着最近的c的坐标。只需要判断看i-1是否有值即可。

第二次遍历，从右至左，判断当前索引i， res的左侧是否有c，或者 左侧到c的距离是否比右侧(i+1)的距离小，如果没有，则更新当前i 的值，更新成右侧的值

第三次遍历，计算当前每个值和索引的距离

## 关键点

可以让res直接存当前距离，而不是索引来减少最后计算距离的遍历。

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function (s, c) {
    var res = Array(s.length);
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            res[i] = i
        } else [
            res[i] = res[i-1] == void 0 ? Infinity : res[i-1]
        ]
    }

    for(let i = s.length -1; i >= 0; i--) {
        if (res[i] == Infinity || i - res[i] > res[i+1] - i) {
            res[i] = res[i+1]
        }
    }

    for (let i = 0; i < res.length; i++) {
        res[i] = Math.abs(i -res[i])
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(3n)$
- 空间复杂度：$O(n)$

```javascript
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function (s, c) {
    var res = Array(s.length);
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            res[i] = 0
        } else [
            res[i] = res[i-1] == void 0 ? Infinity : res[i-1] + 1
        ]
    }

    for(let i = s.length -1; i >= 0; i--) {
        if (res[i] == Infinity || res[i] > res[i+1] + 1) {
            res[i] = res[i+1] + 1
        }
    }

    return res
  };

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(2n)$
- 空间复杂度：$O(n)$


## 思路4

定义l和r，分别表示当前窗口左侧c的下标和右侧的下标。只需要计算在窗户内元素到两个边界的距离即可。如果遍历到达右侧边界时，将整个窗口向后移。

## 关键点

indexOf的第二个参数表示从第几个开始查询，第二个参数传为当前左侧边框下标，即可

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function (s, c) {
    let res = Array(s.length)
    let l = s[0] === c ? 0 : -Infinity
    let r = s.indexOf(c, 0)

    for(let i = 0; i < s.length; i++) {
        res[i] = Math.min(Math.abs(i-l), Math.abs(i-r))
        if (i === r) {
            l = r
            r = s.indexOf(c, l+1)
        }
    }

    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$