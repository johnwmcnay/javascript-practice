//Prompt: Given an array of integers nums and an integer target, return indices of the two numbers such that they add
// up to target. You may assume that each input would have exactly one solution, and you may not use the same
// element twice.

function twoSum(numArray, target) {

    for (let i in numArray) {
        let number = numArray[i];
        let supplementIndex = numArray.indexOf(target - number);

        if (supplementIndex !== -1 && supplementIndex !== parseInt(i)) {
            return [parseInt(i), supplementIndex];
        }
    }
}

//Prompt: Given an array of integers numbers that is already sorted in ascending order, find two numbers such that
// they add up to a specific target number. Return the indices of the two numbers (1-indexed) as an integer array
// answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.

function twoSumSorted(numArray, target) {

    let leftIndex = 0;
    let rightIndex = numArray.length - 1;

    while (numArray[leftIndex] + numArray[rightIndex] !== target) {

        while (numArray[leftIndex] + numArray[rightIndex] < target) {
            leftIndex++;
        }

        while (numArray[leftIndex] + numArray[rightIndex] > target) {
            rightIndex--;
        }

    }

    return [leftIndex + 1, rightIndex + 1];

    // let leftIndex = 0;
    // let rightIndex = numArray.length - 1;
    // let left, right;
    //
    // do {
    //
    //     left = numArray[leftIndex];
    //     right = numArray[rightIndex];
    //
    //     while (left + right < target) {
    //         leftIndex++;
    //     }
    //
    //     while (left + right > target) {
    //         rightIndex--;
    //     }
    // } while (left + right !== target)
    //
    //
    // return [leftIndex + 1, rightIndex + 1];


    // while (numArray[numArray.length - 1] + numArray[0] > target) {
    //     numArray.pop();
    // }
    //
    // let index = -1;
    //
    // do {
    //     let number = numArray.shift();
    //     let n = 0;
    //     index++;
    //
    //     while (n < numArray.length) {
    //         if (numArray[n] + number === target) {
    //             return [index + 1, index + 2 + n];
    //         }
    //         n++;
    //     }
    // } while (true)


    let n = 0;

    while (true) {

        let i = n + 1;

        while (i < numArray.length && numArray[i] < target) {
            if (numArray[n] + numArray[i] === target) {
                return [n, i];
            }
            i++;
        }
        n++;
    }

}