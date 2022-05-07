// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
function reverseNumber(number){
    const arr= String(number).split('');
    return +arr.reverse().join('');
}
console.log(reverseNumber(592075));




// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const palindrome= function (str){
    const reverseArr= str.split('').reverse().join('');
    return str===reverseArr? true : false;
}

console.log(palindrome('anna'));
console.log(palindrome('civic'));
console.log(palindrome('kayak'));
console.log(palindrome('hello'));