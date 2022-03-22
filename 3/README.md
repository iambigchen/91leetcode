
## 题目地址(3. 无重复字符的最长子串)

https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

## 题目描述

```
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

 

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。


示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


示例 4:

输入: s = ""
输出: 0


 

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
```

## 前置知识

- 

## 公司

- 暂无

## 思路
暴力解，如果遇到重复值，则把索引值向前回归，回到重复值的下一位。

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
var lengthOfLongestSubstring = function(s) {
    let str = ''
    let max = 0
    for(let i = 0; i < s.length; i++) {
        if (str.indexOf(s[i]) === -1) {
            str = str + s[i]
            max = Math.max(str.length, max)
        } else {
            str = ''
            let index = i - 1
            while(s[i] !== s[index]) {
                index--
            }
            i = index
        }
    }
    return max
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n**2)$
- 空间复杂度：$O(1)$

## 思路2

滑动窗口 + hashmap

左右指针，用hashmap存储每个字符串出现过的位置，如果右指针指向的值，在hashmap中的坐标，是在左右指针中间，则需要更改窗口大小。将左指针指向该坐标+1.更新hashmap中该字符的坐标。


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
var lengthOfLongestSubstring = function(s) {
    let left = (right = 0)
    let max = 0
    let map = {}
    while(right < s.length) {
        const pos = map[s[right]];
        if (pos >= left && pos <= right) {
            left = pos + 1
        }
        map[s[right]] = right
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
};
```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


