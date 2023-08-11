/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

function evenNumberRange(num1, num2, newArr = []) {
    // Your code here
    if (num1 > num2) {
        return newArr;
    }

    if (num1 % 2 === 0) {
        newArr.push(num1);
    }

    return evenNumberRange(num1 + 1, num2, newArr);
}

console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
console.log(evenNumberRange(22, 25)); // prints [22, 24]
console.log(evenNumberRange(2, 0)); // prints []
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}
