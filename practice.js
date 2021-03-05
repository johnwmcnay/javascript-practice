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


    // let n = 0;
    //
    // while (true) {
    //
    //     let i = n + 1;
    //
    //     while (i < numArray.length && numArray[i] < target) {
    //         if (numArray[n] + numArray[i] === target) {
    //             return [n, i];
    //         }
    //         i++;
    //     }
    //     n++;
    // }
}

//Prompt: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse
// order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createReversedLinkedList(num) {
    let reverseStringNumber = num.toString().split("").reverse().join("");
    let firstNode = null
    let previousNode = null;

    for (let stringDigit of reverseStringNumber) {
        let node = new ListNode(parseInt(stringDigit), null);

        if (firstNode === null) {
            firstNode = node;
        }

        if (previousNode !== null) {
            previousNode.next = node;
        }

        previousNode = node;
    }
    return firstNode;
}

function sumLinkedLists(list1, list2) {

    let operand1 = list1;
    let operand2 = list2;
    let firstNode = null;
    let previousNode = null;
    let carry = 0;

    do {
        let digitSum = (operand1 ? operand1.val : 0) + (operand2 ? operand2.val : 0) + carry;
        let node = new ListNode(digitSum % 10, null);

        if (firstNode === null) {
            firstNode = node;
        }

        if (previousNode !== null) {
            previousNode.next = node;
        }

        carry = digitSum > 9 ? 1 : 0;
        previousNode = node;
        console.log("operand1 :", operand1);
        console.log("operand2 :", operand2);
        operand1 = operand1 ? operand1.next : null;
        operand2 = operand2 ? operand2.next : null;

    } while (operand1 !== null || operand2 !== null)

    if (carry) {
        previousNode.next = new ListNode(1, null);
    }

    return firstNode;

}

//Prompt: Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

function alternateSumTwoIntegers(a, b) {

    let right = [];
    let left = [];

    if (a > 0) {
        right = right.concat(new Array(a));
    } else {
        left = left.concat(new Array(a * -1));
    }

    if (b > 0) {
        right = right.concat(new Array(b));
    } else {
        left = left.concat(new Array(b * -1));
    }

    if (right.length > left.length) {

        return right.slice(left.length).length;
    }

    if (right.length < left.length) {

        return left.slice(right.length).length * -1;
    }

    return 0;

}

//Given a string s, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(str) {

    let i = 0;
    let j = 0;
    let longestLength = 0;
    let characters = "";

    while (i < str.length - longestLength && j < str.length) {
        j = i + 1;
        characters = str[i];

        while (j < str.length) {

            if (characters.indexOf(str[j]) === -1) {
                characters += str[j];
            } else {
                longestLength = Math.max(longestLength, characters.length);
                break;
            }
            j++;
        }
        i++;
    }

    return Math.max(longestLength, characters.length);


    // let i = 0;
    // let substring = "";
    // let longestLength = 0;
    //
    // while (i < str.length) {
    //
    //     if (substring === "") {
    //         substring = str[i];
    //     } else {
    //         let currentCharacter = str[i];
    //         if (substring.indexOf(currentCharacter) === -1) {
    //             substring += currentCharacter;
    //             longestLength = Math.max(longestLength, substring.length);
    //         } else {
    //             if (i + longestLength > str.length) {
    //                 break;
    //             }
    //
    //             substring = str[i];
    //
    //         }
    //     }
    //     i++;
    // }
    // return Math.max(longestLength, substring.length);
}

// Given a string s, return the longest palindromic substring in s.

function longestPalindrome(str) {

    //it's only a palindrome if the first and last letter are the same and the pattern repeats to the "center"
    //check first and last character, if they are different, check first and second-to-last character
    //when you find a match, repeat the process

    let leftIndex = 0;
    let longest = "";

    while (leftIndex < str.length) {

        let rightIndex = str.length - 1;

        while (rightIndex >= leftIndex) {
            let offset = 0;

            while (str[leftIndex + offset] === str[rightIndex - offset] && leftIndex + offset < str.length) {
                offset++;
            }

            if (leftIndex + (2 * offset) >= rightIndex) {
                let palindrome = str.substring(leftIndex, rightIndex + 1);

                if (palindrome.length === str.length) {
                    return str;
                }

                if (palindrome.length > longest.length) {
                    longest = palindrome;
                }

            }
            rightIndex--;
        }
        leftIndex++;
    }

    return longest;

    // let longest = "";
    //
    // let rightIndex = str.length - 1;
    //
    // while (rightIndex >= 0) {
    //
    //     let leftIndex = 0;
    //
    //     while (leftIndex < rightIndex) {
    //
    //         let count = 0;
    //
    //         while (str[leftIndex] === str[rightIndex] && rightIndex > leftIndex) {
    //             leftIndex++;
    //             rightIndex--;
    //             count++;
    //         }
    //
    //         if (rightIndex <= leftIndex) {
    //             let palindrome = str.substring(leftIndex - count, rightIndex + count + 1);
    //             if (palindrome.length > longest.length) {
    //                 longest = palindrome;
    //             }
    //         }
    //         leftIndex++;
    //     }
    //     rightIndex--;
    // }
    //
    // return longest;

    //length <= 1 returns self
    //
    // let longestPalindrome = "";
    // let leftIndex = 0;
    //
    //
    // //example: badbob     popop    abacbacba
    //
    //
    // while (leftIndex < str.length) {
    //
    //     let rightIndex = str.length - 1;
    //
    //     while (rightIndex > leftIndex) {
    //
    //         while (str[leftIndex] !== str[rightIndex] && rightIndex > leftIndex) {
    //             rightIndex--;
    //         }
    //
    //         let iterations = (rightIndex - leftIndex) / 2;
    //         let count = 0;
    //
    //         while (count < iterations) {
    //             leftIndex++;
    //             rightIndex--;
    //
    //             if (str[leftIndex] !== str[rightIndex]) {
    //                 break;
    //             }
    //             count++;
    //         }
    //
    //         if (count === iterations) {
    //             let palindrome = str.substring(leftIndex - iterations, rightIndex + iterations + 1);
    //             if (palindrome.length > longestPalindrome.length) {
    //                 longestPalindrome = palindrome;
    //             }
    //         }
    //         rightIndex--;
    //     }
    //     leftIndex++;
    // }
    //
    // return longestPalindrome;
}

//
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want
// to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

function convertToZigZag(str, rows) {

    if (rows === 1) {
        return str;
    }

    let convertedString = "";

    for (let offset = 0; offset < rows; offset++) {

        let position = offset;
        let firstJump = 2 * (rows - 1 - offset);
        let secondJump = offset * 2;

        if (firstJump === 0) {
            firstJump = secondJump
        } else if (secondJump === 0) {
            secondJump = firstJump;
        }

        let first = true;

        while (position < str.length) {

            convertedString += str[position];

            if (first) {
                position += firstJump;
            } else if (!first) {
                position += secondJump;
            }

            first = !first;
        }
    }

    return convertedString;

    //
    //
    // //first row, and last row
    // for (let i = 0; i < str.length; i += 2 * (rows - 1)) {
    //     convertedString += str[i];
    //     if (rows - 1 + i < str.length) {
    //         endStr += str[rows - 1 + i];
    //     }
    // }
    //
    // leftIndex++;
    // rightIndex--;
    //
    // while (leftIndex < rightIndex) {
    //
    //     let i = leftIndex;
    //     let bigJump = 2 * (rows - 2);
    //     let smallJump = leftIndex * 2;
    //     let big = true;
    //
    //     while (i < str.length) {
    //
    //         convertedString += str[i];
    //
    //         if (big) {
    //             i += bigJump;
    //         } else {
    //             i += smallJump;
    //         }
    //
    //         big = !big;
    //     }
    //
    //     i = rightIndex;
    //     big = false;
    //
    //     while (i < str.length) {
    //
    //         endStr = endStr + str[i];
    //
    //         if (big) {
    //             i += bigJump;
    //         } else {
    //             i += smallJump;
    //         }
    //     }
    //
    //     leftIndex++;
    //     rightIndex--;
    //
    // }
    //
    // if (leftIndex === rightIndex) {
    //
    //     for (let i = leftIndex; i < str.length; i += rows - 1) {
    //         convertedString += str[i];
    //     }
    //
    // }
    //
    // //second row
    // // let i = 1;
    // // while (i < str.length) {
    // //
    // //     convertedString += str[i];
    // //
    // //     if (i % 2) {
    // //         i += 2;
    // //     } else {
    // //         i += 2 * (rows - 2);
    // //     }
    // // }
}