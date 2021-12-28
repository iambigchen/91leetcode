
## 题目地址(297. 二叉树的序列化与反序列化)

https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

## 题目描述

```
序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

 

示例 1：

输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]


示例 2：

输入：root = []
输出：[]


示例 3：

输入：root = [1]
输出：[1]


示例 4：

输入：root = [1,2]
输出：[1,2]


 

提示：

树中结点数在范围 [0, 104] 内
-1000 <= Node.val <= 1000
```

## 前置知识

- 

## 公司

- 暂无

## 思路

序列化： bfs，遇到空节点时，用#代替

反序列化： bfs，用两个指针分别指向左节点和右节点，每次遍历完一个节点后，左右指针都向后移动两步，而节点向后移动一步。此时左右指针指向的仍是当前节点的左右节点。

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
    const query = [root]
    let res = []
    while(query.length) {
        let node = query.shift()
        if (node) {
            res.push(node.val)
            query.push(node.left)
            query.push(node.right)
        } else {
            res.push('#')
        }
    }
    return res.join(',')
  };
  

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === '#') return null
    let list = data.split(',')
    let cur = 1
    let root = new TreeNode(list[0])
    const queue = [root];
    while(cur < list.length) {
        const node = queue.shift();
        const leftVal = list[cur];
        const rightVal = list[cur + 1];
        if (leftVal != "#") {
            const leftNode = new TreeNode(leftVal);
            node.left = leftNode;
            queue.push(leftNode);
        }
        if (rightVal != "#") {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        cur += 2
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(h)$


## 思路2

序列化： dfs

反序列化： dfs

## 关键点

-  

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 const serialize = (root) => {
    function pre (node) {
        if (!node) return '#'
        return `${node.val},${pre(node.left)},${pre(node.right)}`
    }
    return pre(root)
  };
  

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === '#') return null
    let list = data.split(',')
    function pre (i) {
        if (i >= list.length || list[i] === '#') return [i, null]
        let root = new TreeNode(list[i])
        let [j, left] = pre(i+1)
        let [k, right] = pre(j+1)
        root.left = left
        root.right = right
        return [k, root]
    }
    return pre(0)[1]
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(h)$


