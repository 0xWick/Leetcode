var runningSum = function(nums) {
    
    const addedArray = []
    console.log(nums)
    
    // * Iterate on each value in array
    for (let i = 0; i < nums.length; i++) {
        let AddNum = 0
        // * Push 1st value normally
        if (i == 0) {
            addedArray.push(nums[i])
        }
        // * For Rest Values
        else {
        //    [1,2,3,4]     // Output: [1,3,6,10]
        //     0 1 2 3      
                //     i =  1
                //     j =  1
            for (let j = 0; j <= i ; j++) {
                
                AddNum += nums[j]
        
            }
            addedArray.push(AddNum)
        }
    }
    console.log(addedArray)
};
runningSum([1,1,1,1,1])

