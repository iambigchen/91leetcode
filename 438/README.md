
## 题目地址(438. 找到字符串中所有字母异位词)

https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/

## 题目描述

```
给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

 

示例 1:

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。


 示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。


 

提示:

1 <= s.length, p.length <= 3 * 104
s 和 p 仅包含小写字母
```

## 前置知识

- 

## 公司

- 暂无

## 思路

滑动窗口，用长度为26的数组来记录当前字符串个数，从而来判断是否相等

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (s.length < p.length) return []
    let arr = new Array(26).fill(0)
    let arr2 = new Array(26).fill(0)
    let a = 'a'.charCodeAt()
    let res = []
    for(let i = 0; i < p.length; i++) {
        let cur = p[i].charCodeAt()
        arr[cur - a]++
    }
    let arrStr = arr.join('')
    let l = 0, r = p.length - 1
    for (let i = 0; i <= r; i++) {
        let cur = s[i].charCodeAt()
        arr2[cur - a]++
    }
    if (arrStr == arr2.join('')) {
        res.push(l)
    }
    l++
    r++
    while(r < s.length) {
        arr2[s[l-1].charCodeAt()-a]--
        arr2[s[r].charCodeAt()-a]++
        if (arrStr == arr2.join('')) {
            res.push(l)
        }
        l++
        r++
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


