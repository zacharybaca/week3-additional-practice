# Additional Problems

If you're reading this, that means you're here for more recursion and async
fun!

Remember to use `npm test` to test your solutions as you go along. To run the
tests, use the following commands:

1. `cd` into the project directory
2. `npm install` to install any dependencies
3. `npm test` to run the test cases
# week3-additional-practice

# Code For Problem on Assessment
```function printOuterNumsFirst(nums) {
    if (nums.length === 0) return;

    // extract the number from the beginning if the length of the array is even
    // else, extract from the end
    let num;
    if (nums.length % 2 === 0) {
      num = nums.shift();
    } else {
      num = nums.pop();
    }

    // print the extracted number
    console.log(num);

    // Make a recursive call with the modified nums array.
    printOuterNumsFirst(nums);
  }
  ```

```const VOWELS = ['a', 'e', 'i', 'o', 'u'];
const mostFrequentVowel = function (words, counter = {}, index = 0) {
  // Your code here
  if (!VOWELS.includes(words[index])) {
      return "";
  }
}```
