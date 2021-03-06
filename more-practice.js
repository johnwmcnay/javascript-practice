// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside
//the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
//2,147,483,647   -2,147,483,648
//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



function reverseInteger(num) {

    if (num > 2147483647 || num < -2147483648) {
        return 0;
    }

    let sign = num < 0 ? "-" : "";
    let numStr = num.toString().replace("-", "");
    let reverseStr = "";

    reverseStr = sign + numStr.split("").reverse().join("");

    return parseInt(reverseStr);

}

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
function findMedianSortedArrays(nums1, nums2) {
    let totalLength = nums1.length + nums2.length;
    let medianIndex = Math.floor(totalLength / 2) - (totalLength % 2 === 0 ? 1 : 0);

    if (totalLength === 1) {
        return nums1.length ? nums1[0] : nums2[0];
    }

    let leftIterator = 0;
    let rightIterator = 0;
    let iterator = 0;
    let median = [];

    while (median.length < (totalLength % 2 === 0 ? 2 : 1)) {

        if (rightIterator >= nums2.length || nums1[leftIterator] < nums2[rightIterator]) {

            if (iterator >= medianIndex) {
                median.push(nums1[leftIterator]);
            }
            leftIterator++;

        } else {

            if (iterator >= medianIndex) {
                median.push(nums2[rightIterator]);
            }
            rightIterator++;

        }

        iterator++;
    }

    return median.length === 1 ? median[0] : (median[0] + median[1]) / 2;
}

//==INCOMPLETE==
// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:
//     '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
//     The matching should cover the entire input string (not partial).
function isValidPattern(s, p) {
    if (p.indexOf(".") === -1 && p.indexOf("*") === -1) {
        if (p.length > s.length) {
            return false;
        }
    }

    let convertPattern = () => {

        let str = p;

        while (str.indexOf("*") !== -1) {
            let character = str[str.indexOf("*") - 1];

            str = str.replace(character + "*", character === "." ? ":" : character.toUpperCase());
        }

        return str;
    }

    let pattern = convertPattern();

    let patternIndex = 0;
    let stringIndex = 0;
    let convertedStr = "";

    while (patternIndex < pattern.length) {

        let validCharacter = pattern[patternIndex];
        let currentCharacter = s[stringIndex];

        //when the current valid character is '.*''
        if (validCharacter === ':') {

            if (patternIndex !== pattern.length - 1) {

                patternIndex++;

                let ch = pattern[patternIndex];

                let position = s.lastIndexOf(ch);

                if (position === -1) {
                    return false;
                } else {
                    stringIndex = position + 1;
                    convertedStr += ch;
                }
            } else {
                return true;
            }

        } else if (validCharacter === '.') {

            convertedStr += currentCharacter;

        } else if (validCharacter === validCharacter.toUpperCase()) {

            let ch = validCharacter.toLowerCase();

            while (ch === s[stringIndex]) {
                convertedStr += ch;
                stringIndex++;
            }

        } else {
            if (currentCharacter !== validCharacter) {
                return false;
            }
            convertedStr += validCharacter;
            stringIndex++;
        }

        patternIndex++;

    }

    return convertedStr === s;
}

//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
function maxArea(heights) {
    let leftIndex = 0;
    let rightIndex = heights.length - 1;
    // let dimension = 0;
    // let moveToRight = null;
    let area = 0;

    while (leftIndex < rightIndex) {

        let leftHeight = heights[leftIndex];
        let rightHeight = heights[rightIndex];

        let width = rightIndex - leftIndex;
        area = Math.max(Math.min(leftHeight, rightHeight) * width, area);

        if (leftHeight > rightHeight) {
            rightIndex--;
        } else {
            leftIndex++;
        }
    }
    return area;
}

//     let length = heights.length - 1;
//     let keyHeight = heights[0];
//     let biggestArea = keyHeight;
//     let storedIndex = 0;

//     for (let i = length; i > 0; i++) {

//         let currentHeight = heights[i];
//         let currentWidth = i;

//         if (currentHeight < keyHeight) {
//             continue;
//         }

//         let area = currentHeight * currentWidth;

//         if (area > biggestArea) {
//             storedIndex = i;
//             keyHeight = currentHeight;
//             biggestArea = area;
//             break;
//         }

//     }


// if (currentHeight < biggestHeight) {
//     continue;
// } else {
//     biggestHeight = currentHeight;
// }
//         if (currentHeight * (length - i - 1) < biggestArea) {
//             continue;
//         } else {
//             biggestArea = currentHeight * (length - i - 1);
//         }

//         for (let j = 0; j < length; j++) {
//             if (i === j) {
//                 continue;
//             }

//             let heightToCompare = heights[j];

//             if (heightToCompare <= currentHeight) {
//                 let currentArea = Math.abs((i - j) * heightToCompare);
//                 biggestArea = Math.max(currentArea, biggestArea);
//             }
//         }