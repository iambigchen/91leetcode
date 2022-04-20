
## 题目地址(516. 最长回文子序列)

https://leetcode-cn.com/problems/longest-palindromic-subsequence/description/

## 题目描述

```
* 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
 * 
 * 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "bbbab"
 * 输出：4
 * 解释：一个可能的最长回文子序列为 "bbbb" 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "cbbd"
 * 输出：2
 * 解释：一个可能的最长回文子序列为 "bb" 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 仅由小写英文字母组成
```

## 前置知识

- 

## 公司

- 暂无

## 思路

dp dp[i][j]代表着i到j最长回文子序列的长度

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
 var longestPalindromeSubseq = function(s) {
    let dp = new Array(s.length).fill(0).map(() => Array(s.length).fill(0))
    for(let i = s.length -1; i>=0; i--) {
        for(let j = i; j < s.length; j++) {
            if(i === j) {
                dp[i][j] = 1
            } else if (j - i === 1) {
                if (s[i] === s[j]) {
                    dp[i][j] = 2
                } else {
                    dp[i][j] = 1
                }
            } else {
                if (s[i] === s[j]) {
                    dp[i][j] = dp[i+1][j-1] + 2
                } else {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1], dp[i+1][j-1])
                }
            } 
        }
    }
    return dp[0][s.length-1]
};

```


**复杂度分析**

- 时间复杂度：$O(n ** 2)$
- 空间复杂度：$O(n)$


