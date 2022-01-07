function maopao (nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if (nums[j-1] > nums[j]) {
                [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
            }
        }
    }
    console.log(nums)
}

maopao([3,5,1,2,7])

function maopao2 (nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length - i; j++) {
            if (nums[j-1] > nums[j]) {
                [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
            }
        }
    }
    console.log(nums)
}

maopao2([3,5,1,2,7])

function maopao3 (nums) {
    for(let i = 0; i < nums.length-1; i++) {
        for(let j = 1; j < nums.length - i; j++) {
            if (nums[j-1] > nums[j]) {
                [nums[j-1], nums[j]] = [nums[j], nums[j-1]]
            }
        }
    }
    console.log(nums)
}

maopao3([3,5,1,2,7])
