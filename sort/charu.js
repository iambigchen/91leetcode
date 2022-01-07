function charu (nums) {
    for (let i = 0; i < nums.length; i++) {
        let t = nums[i]
        let j = i - 1
        while(j >= 0 && nums[j] > t) {
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = t
    }
    console.log(nums)
}

charu([3,5,1,2,7])


function charu2 (nums) {
    for (let i = 1; i < nums.length; i++) {
        let t = nums[i]
        let j = i - 1
        while(j >= 0 && nums[j] > t) {
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = t
    }
    console.log(nums)
}

charu2([3,5,1,2,7])