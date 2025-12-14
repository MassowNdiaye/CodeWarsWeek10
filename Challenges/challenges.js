// ======================= CHALLENGE 1 ================================
// Write a solution to check whether the second argument string is equal to the actual string. If so, the output is true otherwise it is false.

function solution(str, ending) {
  return str.endsWith(ending); //endsWith checks the ending. (Solution)
}
console.log("Challenge 1:");
console.log(solution("abc", "bc")); //True
console.log(solution("abc", "b")); //False

// Comment: It wasn’t difficult to solve, but finding the endsWith method took me some time.
console.log("---------------------------");

// ======================= CHALLENGE 2 ================================
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  let numSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers.length === 0) {
      return 0;
    } else {
      numSum += numbers[i];
    }
  }
  return numSum;
}

console.log("Challenge 2:");
console.log(sum([10, 2, 4, 4]));
console.log(sum([]));

// Comment: Making the correct if condition to print 0 when the array is empty took me some time to figure out

console.log("---------------------------");

// ======================= CHALLENGE 3 ================================
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable) {
  //your code here - remember iterable can be a string or an array
  return [...iterable].filter((value, index) => value != iterable[index - 1]);
}

console.log("Challenge 3:");
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// Comment: This challenge was challenging, and I researched different approaches to find a solution. [... ] -> Allow me to trasform a string in an Array. *value != iterable[index -1]* -> The condition.

console.log("---------------------------");

// ======================= CHALLENGE 4 ================================
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  if (pin.length !== 4 && pin.length != 6) {
    return false;
  }

  for (let char of pin) {
    if (char < "0" || char > "9") {
      return false;
    }
  }

  return true;
}

console.log("Challenge 4:");
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a234"));

//Comment: The only difficulty was to figuring out how to make sure the string contains only digits (0 -9)

console.log("---------------------------");

// ======================= CHALLENGE 5 ================================
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

console.log("Challenge 5:");
console.log(disemvowel("This website is for losers LOL!"));

//Comment: Very easy to solve.
console.log("---------------------------");

// ======================= CHALLENGE 6 ================================
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filterList(lists) {
  const newList = lists.filter((item) => typeof item === "number");
  return newList;
}

console.log("Challenge 6:");
console.log(filterList([1, 2, "a", "b"]));
console.log(filterList([1, "a", "b", 0, 15]));
console.log(filterList([1, 2, "aasf", "1", "123", 123]));
console.log("---------------------------");

//Comment: I did some research to find out that typeof could be used as a condition.

// ======================= CHALLENGE 7 ================================
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return Number(
    //This return a back everything to a Number
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log("Challenge 7:");
console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
console.log("---------------------------");

//Comment: At first glance, I thought this was very easy, but then I realized that sort works differently for string and for numbers. Now I know that

// ======================= CHALLENGE 8 ================================
//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log("Challenge 8:");
console.log(makeUpperCase("My name is Elhadji Massow"));
console.log(makeUpperCase("I'm 24"));
//Comment: Very Easy :)
