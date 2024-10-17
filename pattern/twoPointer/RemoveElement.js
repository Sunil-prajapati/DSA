var removeElement = function(nums, val) {
    let newArray = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val && !newArray.includes(nums[i])){
            newArray.push(nums[i])
        }
    }
    return newArray
};

console.log(removeElement([3,2,2,3],3))