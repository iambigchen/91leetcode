
## 题目地址(467. 环绕字符串中唯一的子字符串)

https://leetcode-cn.com/problems/unique-substrings-in-wraparound-string/

## 题目描述

```
把字符串 s 看作是“abcdefghijklmnopqrstuvwxyz”的无限环绕字符串，所以 s 看起来是这样的："...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....". 

现在我们有了另一个字符串 p 。你需要的是找出 s 中有多少个唯一的 p 的非空子串，尤其是当你的输入是字符串 p ，你需要输出字符串 s 中 p 的不同的非空子串的数目。 

注意: p 仅由小写的英文字母组成，p 的大小可能超过 10000。

 

示例 1:

输入: "a"
输出: 1
解释: 字符串 S 中只有一个"a"子字符。


 

示例 2:

输入: "cac"
输出: 2
解释: 字符串 S 中的字符串“cac”只有两个子串“a”、“c”。.


 

示例 3:

输入: "zab"
输出: 6
解释: 在字符串 S 中有六个子串“z”、“a”、“b”、“za”、“ab”、“zab”。.


 
```

## 前置知识

前缀和

## 公司

- 暂无

## 思路

利用前缀和模板，判断条件是当前值与之前值是否相差1或-25(za)。

## 关键点

需要考虑到去重，所以不能简单用变量ans+w来计算总数。用map存下每个字符的最大子字符串数量，再求和

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    let w = 0
    let map = {}
    p = '^' + p
    for(let i = 1; i < p.length; i++) {
        if (p[i].charCodeAt() - p[i-1].charCodeAt() === 1 || p[i].charCodeAt() - p[i-1].charCodeAt() === -25) {
            w++
        } else {
            w = 1
        }
        map[p[i]] = Math.max(map[p[i]] || 0, w)
    }
    let res = 0
    Object.values(map).forEach(e => {
        res += e
    })
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


