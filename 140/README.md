
## 题目地址(140. 单词拆分 II)

https://leetcode-cn.com/problems/word-break-ii/description/

## 题目描述

```
给定一个字符串 s 和一个字符串字典 wordDict ，在字符串 s 中增加空格来构建一个句子，使得句子中所有的单词都在词典中。以任意顺序返回所有这些可能的句子。
 
注意：词典中的同一个单词可能在分段中被重复使用多次。

 

* 示例 1：
 * 
 * 
 * 输入:s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
 * 输出:["cats and dog","cat sand dog"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入:s = "pineapplepenapple", wordDict =
 * ["apple","pen","applepen","pine","pineapple"]
 * 输出:["pine apple pen apple","pineapple pen apple","pine applepen apple"]
 * 解释: 注意你可以重复使用字典中的单词。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入:s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * 输出:[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 
 * 
 * 1 <= s.length <= 20
 * 1 <= wordDict.length <= 1000
 * 1 <= wordDict[i].length <= 10
 * s 和 wordDict[i] 仅有小写英文字母组成
 * wordDict 中所有字符串都 不同
```

## 前置知识

- 

## 公司

- 暂无

## 思路

回溯试错法

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
var wordBreak = function(s, wordDict) {
    let ans = []
    let n = s.length
    function backtrack (temp, start) {
        if (start === n) {
            ans.push(temp.slice(1))
            return
        }
        for(let i = start; i < n; i++) {
            if (wordDict.includes(s.slice(start, i + 1))) {
                backtrack(temp + " " + s.slice(start, i + 1), i + 1)
            }
        }
    }
    backtrack('', 0)
    return ans
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(2^N)$
- 空间复杂度：$O(2^N)$


