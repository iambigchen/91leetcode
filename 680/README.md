
## 题目地址(680. 验证回文字符串 Ⅱ)

https://leetcode-cn.com/problems/valid-palindrome-ii/description/

## 题目描述

```
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

 

* 示例 1:
 * 
 * 
 * 输入: s = "aba"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "abca"
 * 输出: true
 * 解释: 你可以删除c字符。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "abc"
 * 输出: false
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * s 由小写英文字母组成
 * 
```

## 前置知识

- 

## 公司

- 暂无

## 思路

左右指针，遇到不相等时，跳过该值

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

 const validPalindrome = function(s) {
    function isPalindrome(s, i, n) {
      let l = 0
      let r = n - 1
      while (l < r) {
        if (l == i) l += 1
        else if (r == i) r -= 1
        if (s[l] != s[r]) return false
        l += 1
        r -= 1
      }
      return true
    }
  
    const n = s.length
    let l = 0
    let r = n - 1
    while (l < r) {
      if (s[l] != s[r]) {
        return isPalindrome(s, l, n) || isPalindrome(s, r, n)
      }
      l += 1
      r -= 1
    }
    return true
  }

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


