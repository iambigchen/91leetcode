
## 题目地址(5. 最长回文子串)

https://leetcode-cn.com/problems/longest-palindromic-substring/description/

## 题目描述

```
* 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
```

## 前置知识

- 

## 公司

- 暂无

## 思路
dp dp[i][j]代表着从i到j是否为回文字符串。因为要判断dp[i+1][j-1]，所以i需要倒序遍历

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    if (s.length <= 1) return s
    let dp = Array(s.length).fill(0).map(e => Array(s.length).fill(false))
    let res = s[0]
    for(let i = s.length -1; i>= 0; i--) {
        for(let j = i; j<s.length; j++) {
            if (i === j) {
                dp[i][j] = true
            } else if (j -i == 1 && s[i] === s[j]) {
                dp[i][j] = true
            } else if (dp[i+1][j-1] && s[i] === s[j]){
                dp[i][j] = true
            }
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.slice(i, j+1)
            }
        }
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n**2)$
- 空间复杂度：$O(1)$

