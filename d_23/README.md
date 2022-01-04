
## 题目地址(30. 串联所有单词的子串)

https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/

## 题目描述

```
给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。

 

示例 1：

输入：s = "barfoothefoobarman", words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。


示例 2：

输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
输出：[]


示例 3：

输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
输出：[6,9,12]


 

提示：

1 <= s.length <= 104
s 由小写英文字母组成
1 <= words.length <= 5000
1 <= words[i].length <= 30
words[i] 由小写英文字母组成
```

## 前置知识

- 

## 公司

- 暂无

## 思路

遍历s中所有words.length * words[0].length的字符串，看该字符串是否是由words组成。用hashmap记录words中每个字符串出现过的频率，再和s遍历的子字符串出现的频率做对比

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let chartLength = words[0].length
    let wordLength = words.length
    let map = {}
    let res = []
    words.forEach(key => {
        map[key] = map[key]? map[key] + 1 : 1
    })
    for(let i =0; i<s.length - wordLength * chartLength + 1; i++) {
        let y = s.slice(i, i + wordLength * chartLength)
        let temp = {}
        for (let j =0; j < y.length; ) {
            let cur = y.slice(j, chartLength + j)
            if (!map[cur]) {
               break
            } else {
                temp[cur] = temp[cur] ? temp[cur] + 1 : 1
            }
            if ( temp[cur] > map[cur] ) {
                break
            }
            j = j + chartLength
            if (j == y.length) {
                res.push(i)
            }
        }
    }
    return res
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n**2)$
- 空间复杂度：$O(n)$


