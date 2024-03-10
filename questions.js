
// 1. a function that returns the sum of 2 numbers
function sum(a, b) {
    return a + b;
  }
  
  // 2. a function that returns the product of 2 numbers
  function product(a, b) {
    return a * b;
  }
  
  // 3. a function that returns the difference of 2 numbers
  function difference(a, b) {
    return a - b;
  }
  
  // 4. a function that returns the division of 2 numbers
  function division(a, b) {
    return a / b;
  }
  //5. a function that receives an array and returns the sum of all the elements inside that array.
  function arrayNum(arr){
    let sum = 0;
    for( let i = 0; i < arr.length; i++ )
    {
        sum+= arr[i]
    }
  }
  // 6. Create a function that receives an array and returns the greatest value inside that array
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  // 7. Create a function that receives an array and returns the smallest number from that array
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // 8. Create a function that receives an array of numbers and returns the average of the numbers
  function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
  // 9. Create a function that combines two arrays into one single array.
  function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  // 10. Create a function that displays a pattern like this:
  function displayPattern1() {
    for (let i = 0; i < 4; i++) {
      let row = "";
      for (let j = 0; j < 5; j++) {
        row += "* ";
      }
      console.log(row);
    }
  }
  
  // 11. Create a function that displays a pattern like this:
  function displayPattern2() {
    for (let i = 4; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "1 ";
      }
      console.log(row);
    }
  }
  
  // 12. Create a function that displays a pattern like this:
  function displayPattern3() {
    for (let i = 4; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= 4; j++) {
        if (j <= i) {
          row += "1 ";
        } else {
          row += "0 ";
        }
      }
      console.log(row);
    }
  }
  
  // 13. Create a function that displays a pattern like this:
  function displayPattern4() {
    for (let i = 1; i <= 5; i++) {
      let row = "";
      for (let j = 1; j <= 5; j++) {
        if (i === 1 || i === 5 || j === 1 || j === 5) {
          row += "1 ";
        } else {
          row += "0 ";
        }
      }
      console.log(row);
    }
  }
  
  // 14. Create a function that displays a pattern like this:
  function displayPattern5() {
    for (let i = 1; i <= 4; i++) {
      let row = "";
      for (let j = 1; j <= 4; j++) {
        if (j === i) {
          row += "1 ";
        } else {
          row += "  ";
        }
      }
      console.log(row);
    }
  }
  
  // 15. Create a function to reverse the order of the elements inside the given array.
  function reverseArray(array) {
    return array.reverse();
  }
  
  // 16. Given an array like this:
  var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];
  // a. Create a function to sort and arrange these elements of the array in ascending order.
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
// 17. Create a function that determines the age classification of people
function getAgeClassification(age) {
    if (age >= 0 && age <= 12) {
      return 'MIMICRY';
    } else if (age >= 13 && age <= 19) {
      return 'SELF-DISCOVERY';
    } else if (age >= 20 && age <= 45) {
      return 'COMMITMENT';
    } else if (age >= 46) {
      return 'LEGACY';
    } else {
      return 'Invalid age';
    }
  }
  
  // 18. Create a function that calculates the BMI of a person and returns the specific classification
  function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  
  // 19. Create a function that counts the number of characters in a string
  function countCharacters(str) {
    return str.replace(/\s/g, '').length;
  }
  
  // 20. Create a function that displays even numbers between 1 and 100
  function displayEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
      console.log(i);
    }
  }
  // 21. Create a function that calculates the square of a number
  function calculateSquare(number) {
    return number * number;
  }
  
  // 22. Create a function that checks if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // 23. Create a function that checks if a number is odd
  function isOdd(number) {
    return number % 2 !== 0;
  }
  
  // 24. Create a function that returns the maximum of two numbers
  function getMax(a, b) {
    return Math.max(a, b);
  }
  
  // 25. Create a function that returns the minimum of two numbers
  function getMin(a, b) {
    return Math.min(a, b);
  }
  
  // 26. Create a function that calculates the factorial of a number
  function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  // 27. Create a function that reverses a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 28. Create a function that checks if a string is a palindrome
  function isPalindrome(str) {
    const reversedStr = reverseString(str);
    return str === reversedStr;
  }
  
  // 29. Create a function that displays odd numbers between 1 and 100
  function displayOddNumbers() {
    for (let i = 1; i <= 100; i += 2) {
      console.log(i);
    }
  }
  
  // 30. Create a function that displays multiples of 5
  function displayMultiplesOfFive() {
    for (let i = 5; i <= 100; i += 5) {
      console.log(i);
    }
  }
  
  // 31. Create a function that returns the square root of a given number
  function calculateSquareRoot(number) {
    return Math.sqrt(number);
  }
  
  // 32. Create a function that receives two numbers and returns the bigger number
  function getBiggerNumber(a, b) {
    return Math.max(a, b);
  }
  
  // 33. Create a function that receives a string and changes it into capital letters
  function convertToUpperCase(str) {
    return str.toUpperCase();
  }
  
  // 34. Create a function called "stringModifier" that modifies a string at a specific position
  function stringModifier(str, position, character) {
    if (position >= 0 && position < str.length) {
      return str.substring(0, position) + character + str.substring(position + 1);
    }
    return str;
  }
  
  // 35. Create a function that counts the number of vowels in a string
  function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  // 36. Create a function that counts the number of consonants in a string
  function countConsonants(str){
    const vowels = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i].toLowerCase()) && str[i].match(/[a-z]/i)) {
        count++;
      }
    }
    return count;
  }
  
  // 37. Create a function that finds the index of a given character in a string
  function findCharacterIndex(str, character) {
    return str.indexOf(character);
  }
  
  // 38. Create a function that removes duplicates from an array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // 39. Create a function that checks if a given value is present in an array
  function isValuePresent(arr, value) {
    return arr.includes(value);
  }
  
  // 40. Create a function that squares each element of an array
  function squareElements(arr) {
    return arr.map((num) => num * num);
  }
  
  // 41. Create a function that returns the first n elements of an array
  function getFirstNElements(arr, n) {
    return arr.slice(0, n);
  }
  
  // 42. Create a function that removes the last element from an array
  function removeLastElement(arr) {
    arr.pop();
    return arr;
  }
  
  // 43. Create a function that sorts an array of numbers in ascending order
  function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // 44. Create a function that checks if all elements in an array are positive
  function areAllElementsPositive(arr) {
    return arr.every((num) => num > 0);
  }
  
  // 45. Create a function that calculates the sum of the even numbers in an array
  function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
  }
  
  // 46. Create a function that converts an array of strings to uppercase
  function convertToUppercaseArray(arr) {
    return arr.map((str) => str.toUpperCase());
  }
  
  // 47. Create a function that generates a random number between a given range
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // 48. Create a function that returns the reverse of an array
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // 49. Create a function that calculates the Fibonacci sequence up to n numbers
  function calculateFibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  // 50. Create a function that checks if an array is sorted in ascending order
  function isSortedAscending(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  // 51. Create a function that filters out negative numbers from an array
  function filterNegativeNumbers(arr) {
    return arr.filter((num) => num >= 0);
  }
//   52.    Write a function that calculates the square root of a number.
function calculateSquareRoot(number) {
    return Math.sqrt(number);
  }
// 53.    Write a function that finds the median of an array of numbers.
function findMedian(numbers) {
    numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(numbers.length / 2);
    
    if (numbers.length % 2 === 0) {
      const median1 = numbers[middleIndex];
      const median2 = numbers[middleIndex - 1];
      return (median1 + median2) / 2;
    } else {
      return numbers[middleIndex];
    }
  }
// 54.    Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
    
    return capitalizedWords.join(' ');
  }
// 55.    Write a function that checks if a given year is a leap year.
function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
// 56.    Write a function that finds the intersection of two arrays.
function findIntersection(array1, array2) {
    return array1.filter(element => array2.includes(element));
  }
// 57.    Write a function that checks if a number is prime.
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
// 58.    Write a function that returns the power of a number (base, exponent).
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
  }
// 59.    Write a function that calculates the area of a rectangle.
function calculateRectangleArea(width, height) {
    return width * height;
  }
// 60.    Write a function that calculates the perimeter of a rectangle.
function calculateRectanglePerimeter(width, height) {
    return 2 * (width + height);
  }
  // 61.    Write a function that checks if a given string contains only digits.
function containsOnlyDigits(string) {
    return /^\d+$/.test(string);
  }
// 62.    Write a function that counts the number of words in a sentence.
function countWords(sentence) {
    const words = sentence.split(' ');
    return words.length;
  }
// 63.    Write a function that converts a temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
// 64.    Write a function that generates a pyramid pattern of a given height.
function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = 1; j <= height - i; j++) {
        row += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += '*';
      }
      console.log(row);
    }
  }
  // 65.    Switch Case:
// a.    Calculator Switch:
// Write a JavaScript program that takes two numbers and an operator (+, -, *, /) as input and uses a switch case to perform the corresponding operation.
function calculate(a, operator, b) {
    let result;
    
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        console.log('Invalid operator');
        return;
    }
    
    console.log('Result:', result);
  }
  