// Write code that does the following:
//
// Create an array of 10 arbitrary numbers using array literal syntax.
// Next, create a second empty array.
// Using a while loop, write code that removes data from the first array and places it into the second array.
// At the end of this process the first array should be empty and the second array should contain the same numbers, but in reverse order.

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var numbers2 = []

while (numbers.length !== 0) {
  numbers2.push(numbers.pop())
  console.log(numbers)
  console.log(numbers2)
}
