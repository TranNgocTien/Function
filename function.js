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




// 3.Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// function combinationsStr(str){
//     const splitStr=str.split('');
//     const arrCombi=[];
//     let temp='';
//     for(let i=0; i<splitStr.length-1;i++){
//         for(let j=0;j<splitStr.length;j++){
//             temp=splitStr[i]===splitStr[j]? splitStr[i]:temp+splitStr[j];
//              arrCombi.push(temp);
//         }
//     }
//     return arrCombi;
// }
// console.log(combinationsStr('dog'));

function substrings(str){
    let array=[];
    for(let x=0,y=1;x<str.length;x++,y++){
        array[x]=str.substring(x,y);
    }
    console.log(array);
    let combi=[];
    let temp="";
    let slent= Math.pow(2,array.length);

    for(let i=0;i<slent;i++){
        temp= "";
        for(let j=0;j<array.length;j++){
            if(i & Math.pow(2,j)){
                temp+=array[j];
            }
        }
        if(temp !== ""){
            combi.push(temp)
        }
    }
    return combi.join('\n');
}
substrings('dog');