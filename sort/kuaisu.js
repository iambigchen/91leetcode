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

function swap(nums, a, b) {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
  
  function helper(nums, start, end) {
    if (start >= end) return;
    const pivotIndex = start + ((end - start) >>> 1);
    const pivot = nums[pivotIndex];
    let i = start;
    let j = end;
    while (i <= j) {
      while (nums[i] < pivot) i++;
      while (nums[j] > pivot) j--;
      if (i <= j) {
        swap(nums, i, j);
        i++;
        j--;
      }
    }
    helper(nums, start, j);
    helper(nums, i, end);
  }
  
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  var kuaisu2 = function (nums) {
    helper(nums, 0, nums.length - 1);
    return nums;
  };

let res = kuaisu([3,5,1,2,7])
let res2 = kuaisu2([3,5,1,2,7])
console.log('---------', res)
console.log('---------', res2)