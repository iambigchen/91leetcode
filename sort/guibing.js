// 归并排序是后序遍历
function guibing (num) {
    if (num.length <= 1) return num
    let mid = num.length >> 1
    let l  = guibing(num.slice(0, mid))
    let r = guibing(num.slice(mid))
    let res = merge(l, r)
    return res
}



function merge(nums1, nums2) {
    let ret = [];
    let i = (j = 0);
    while (i < nums1.length || j < nums2.length) {
      if (i === nums1.length) {
        ret.push(nums2[j]);
        j++;
        continue;
      }
  
      if (j === nums2.length) {
        ret.push(nums1[i]);
        i++;
        continue;
      }
      const a = nums1[i];
      const b = nums2[j];
      if (a > b) {
        ret.push(b);
        j++;
      } else {
        ret.push(a);
        i++;
      }
    }
    return ret;
}

let res = guibing([3,5,1,2,7])
console.log('---------', res)