
## 题目地址(76. 最小覆盖子串)

https://leetcode-cn.com/problems/minimum-window-substring/

## 题目描述

```
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

 

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。

 

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"


示例 2：

输入：s = "a", t = "a"
输出："a"


示例 3:

输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。

 

提示：

1 <= s.length, t.length <= 105
s 和 t 由英文字母组成

 

进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
```

## 前置知识

- 

## 公司

- 暂无

## 思路

利用窗口大小不固定的滑动窗口模板。需要注意判断窗口内的字符串是否满足条件，利用两个map，一个用来存正确字符串的数量，另外一个存储窗口内字符串数量。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map1 = {}
    let map2 = {}
    for(let i = 0; i < t.length; i++) {
        map1[t[i]] = map1[t[i]] ? map1[t[i]] + 1 : 1
    }
    let l = 0
    let r = 0
    let min = +Infinity
    let matchNum = 0
    let start = 0
    let needsLen = Object.keys(map1).length;
    while(r < s.length) {
        let cur = s[r]
        if (map1[cur]) {
            map2[cur] = map2[cur] ? map2[cur]+1 : 1
            if (map2[cur] == map1[cur]) {
                matchNum++
            }
        }
        while(needsLen == matchNum) {
            if (min > r - l + 1) {
                min = r - l + 1
                start = l
            }
            let cur2 = s[l]
            if (map1[cur2]) {
                map2[cur2]--
                if (map2[cur2] < map1[cur2]) {
                    matchNum--
                }
            }
            l++
        }
        r++
    }
    return min == +Infinity ? '' : s.substr(start, min)
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(N+M)$
- 空间复杂度：$O(N)$


