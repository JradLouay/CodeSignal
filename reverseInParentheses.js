
// find inparenthesis strings With Recursion PS : can be the same implementation as the regExp method 
// const findInParantheses = (inputString, index = 0, res = [])=>{
    
//     let result = res;
//     let regExp = /\(([^)]+)\)/g;
//     regExp.lastIndex = index;
//     let matche = regExp.exec(inputString);

//     if (matche === null) { // matches===null 
//       return result;  // return an array of objects that contains found items and indexes
//     }
//     result.push({string : reverseString(matche[1]), 
//                  startIndex : matche.index, 
//                  original : matche[0]});
    
//     return findInParantheses(inputString, regExp.lastIndex, result);
// }

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }

const findInParantheses = (inputString)=>{
    let start = null, end = null ; 
    let subString ; // 2 integers to mark position of ()
    for (let index = 0; index < inputString.length; index++) {
        const element = inputString[index];
        console.log(element);
        
        if (element === ")" && start !== null) {
            end = index;
            return {start, end, subString};
        }
        if (start !== null) {
            subString += element ; 
        }
        if (element === "(") {
            start = index ;
            subString = '';
        } 
    }
    return null;
}

function reverseInParentheses(inputString) {
    let match = findInParantheses(inputString);
    if (match === null) {
       return inputString;
    }
    console.log('match', match);
    let result = inputString.replace(`(${match.subString})`
                                     , reverseString(match.subString));
    console.log('result :',result);
    return reverseInParentheses(result);
    
}
console.log('result', reverseInParentheses("(abc)d(efg)"));
// function reverseInParentheses(inputString) {

//     // let regExp = /\(([^)]+)\)/g;
//     // // regExp.lastIndex = 12;
//     // let matches = regExp.exec(inputString);
//     // //matches[1] contains the value between the parentheses
//     // console.log(matches.index, regExp.lastIndex);

//     // let result = inputString; // contain the result 
//     console.log(findInParantheses(inputString));
//     // console.log(resultArray);
//     // for (const element of resultArray) {
//     //     result = result.replace(element.original, element.string);// returns new string with replaced val
//     // }
//     // console.log(result);


// }


// write a recursive function that finds InParentheses words
