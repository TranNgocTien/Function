// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
function reverseNumber(number){
    const arr= String(number).split('');
    return +arr.reverse().join('');
}
console.log(reverseNumber(592075));
console.log(3333);