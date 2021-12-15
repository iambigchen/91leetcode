
## 题目地址(394. 字符串解码)

https://leetcode-cn.com/problems/decode-string/

## 题目描述

```
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"


示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"


示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"


示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"

```

## 前置知识

- 

## 公司

- 暂无

## 思路

利用栈存下非`]`字符, 遇到`]`时，进行取栈。取栈时，注意栈顶的值是字符串、数字、还是`[`。如果是字符串，则继续拼接需要重复的字符串。如果是数字，则继续拼接需要重复的次数。因为`[`和`]`是成对存在的，所以在判断是否是数字，只需要判断不是`[`即可。

## 关键点

在组装完重复的字数后，一定要在取一次栈顶，因为此时的栈顶是`[`。

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []
    for (const c of s) {
        if (c == ']') {
           let repeacStr = ''
           let repeacNum = ''
           while(stack.length && stack[stack.length -1] !== '[') {
               repeacStr = stack.pop() + repeacStr
           }
           stack.pop()
           while(stack.length && !isNaN(stack[stack.length -1])) {
                repeacNum = stack.pop() + repeacNum
            }
            stack.push(repeacStr.repeat(Number(repeacNum)))
        } else {
            stack.push(c)
        }
    }
    return stack.join('')
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


## 思路2

每遇到`[]`，就递归`[]`内部的字符串，重复组装好后返回。递归体是，遇到`[`进入递归，遇到`]`结束递归。遇到数字和字符串，还是继续拼接。

## 关键点

- 

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    function dfs (start) {
        let repeatStr = ''
        let repeatNum = ''
        while(start < s.length) {
            if (!isNaN(s[start])) {
                repeatNum = repeatNum + s[start]
            } else if (s[start] === '[') {
                let [dfs_start, dfs_str] = dfs(start+1)
                start = dfs_start
                repeatStr = repeatStr + dfs_str.repeat(Number(repeatNum))
                repeatNum = ''
            } else if (s[start] === ']') {
                return [start, repeatStr]
            } else {
                repeatStr = repeatStr + s[start]
            }
            start++
        }
        return repeatStr
    }
    return dfs(0)
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


