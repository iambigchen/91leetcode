
## 题目地址(1904. 你完成的完整对局数)

https://leetcode-cn.com/problems/the-number-of-full-rounds-you-have-played/

## 题目描述

```
一款新的在线电子游戏在近期发布，在该电子游戏中，以 刻钟 为周期规划若干时长为 15 分钟 的游戏对局。这意味着，在 HH:00、HH:15、HH:30 和 HH:45 ，将会开始一个新的对局，其中 HH 用一个从 00 到 23 的整数表示。游戏中使用 24 小时制的时钟 ，所以一天中最早的时间是 00:00 ，最晚的时间是 23:59 。

给你两个字符串 startTime 和 finishTime ，均符合 "HH:MM" 格式，分别表示你 进入 和 退出 游戏的确切时间，请计算在整个游戏会话期间，你完成的 完整对局的对局数 。

例如，如果 startTime = "05:20" 且 finishTime = "05:59" ，这意味着你仅仅完成从 05:30 到 05:45 这一个完整对局。而你没有完成从 05:15 到 05:30 的完整对局，因为你是在对局开始后进入的游戏；同时，你也没有完成从 05:45 到 06:00 的完整对局，因为你是在对局结束前退出的游戏。

如果 finishTime 早于 startTime ，这表示你玩了个通宵（也就是从 startTime 到午夜，再从午夜到 finishTime）。

假设你是从 startTime 进入游戏，并在 finishTime 退出游戏，请计算并返回你完成的 完整对局的对局数 。

 

示例 1：

输入：startTime = "12:01", finishTime = "12:44"
输出：1
解释：你完成了从 12:15 到 12:30 的一个完整对局。
你没有完成从 12:00 到 12:15 的完整对局，因为你是在对局开始后的 12:01 进入的游戏。
你没有完成从 12:30 到 12:45 的完整对局，因为你是在对局结束前的 12:44 退出的游戏。


示例 2：

输入：startTime = "20:00", finishTime = "06:00"
输出：40
解释：你完成了从 20:00 到 00:00 的 16 个完整的对局，以及从 00:00 到 06:00 的 24 个完整的对局。
16 + 24 = 40


示例 3：

输入：startTime = "00:00", finishTime = "23:59"
输出：95
解释：除最后一个小时你只完成了 3 个完整对局外，其余每个小时均完成了 4 场完整对局。


 

提示：

startTime 和 finishTime 的格式为 HH:MM
00 <= HH <= 23
00 <= MM <= 59
startTime 和 finishTime 不相等
```

## 前置知识

- 

## 公司

- 暂无

## 思路

分别对开始时间的分钟数，和结束时间的分钟数做处理。开始时间分钟数如果没有到15，按15算。结束时间分钟数则反过来。

如果开始时间分钟数大于45时，小时数需要加1。在返回结果时，有可能出现负数情况，负数则表示一次都完不成。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * @param {string} loginTime
 * @param {string} logoutTime
 * @return {number}
 */
var numberOfRounds = function(startTime, finishTime) {
    let [sh, sm] = startTime.split(':').map(e => Number(e))
    let [eh, em] = finishTime.split(':').map(e => Number(e))

    let d = 0
    if (sh * 60 + sm > eh * 60 + em) d++
    if (sm > 0 && sm <= 15) {
        sm = 15
    } else if (sm > 15 && sm <= 30) {
        sm = 30
    } else if (sm > 30 && sm <= 45) {
        sm = 45
    } else if (sm > 45 && sm <= 60) {
        sm = 0
        sh++
    }
    if (em >= 0 && em < 15) {
        em = 0
    } else if (em >= 15 && em < 30) {
        em = 15
    } else if (em >= 30 && em < 45) {
        em = 30
    } else if (em >= 45 && em < 60) {
        em = 45
    }

    let st = sh * 60 + sm
    let et = eh * 60 + em
    et += d * 24 * 60
    return Math.max(0, (et - st) / 15)
};

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


