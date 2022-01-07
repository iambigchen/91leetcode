// 快速排序是前序遍历

function kuaisu (nums) {
    if (nums.length <= 1) return nums
    let left = []
    let right = []
    let mid = nums.length >> 1
    let midVal = nums.splice(mid-1, 1)

    for (let i = 0; i < nums.length; i++){
        if (nums[i] < midVal) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }

    return [...kuaisu(left), ...midVal, ...kuaisu(right)]
}



let res = kuaisu([3,5,1,2,7])
console.log('---------', res)