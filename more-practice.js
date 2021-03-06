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