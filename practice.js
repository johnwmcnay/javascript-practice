
//Prompt: Given an array of integers nums and an integer target, return indices of the two numbers such that they add
// up to target. You may assume that each input would have exactly one solution, and you may not use the same
// element twice.

function twoSum(numArray, target) {

    for (let i in numArray) {
        let number = numArray[i];
        let supplementIndex = numArray.indexOf(target - number);

        if (supplementIndex !== -1) {
            return [parseInt(i), supplementIndex];
        }
    }
}