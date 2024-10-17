var merge = function(nums1, m, nums2, n) {
    let max = Math.max(m,n)
    let firstNewArray = []
    let secondNewArray = []
    for(let i = 0; i < max; i++){
        if(!firstNewArray.includes(nums1[i])){
            firstNewArray.push(nums1[i])
        }
        if(!secondNewArray.includes(nums2[i])){
            secondNewArray.push(nums2[i])
        }
    }
    return [...firstNewArray,...secondNewArray]
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))