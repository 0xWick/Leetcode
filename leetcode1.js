var runningSum = function(nums) {
    const addedArray = []
    for (let i = 0; i < nums.length; i++) {
        let AddNum = 0
            for (let j = 0; j <= i; j++) {
                AddNum += nums[j]
            }
            addedArray.push(AddNum)
        }
    return addedArray;
};
// console.log(runningSum([1,1,1,1,1,1,1,1]))

