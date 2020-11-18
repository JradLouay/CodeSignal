function allLongestStrings(inputArray) {

let result = [inputArray[0]];
let biggestLength = inputArray[0].length;

for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length<biggestLength) {
        continue ;
    }else if(inputArray[i].length===biggestLength){
        result.push(inputArray[i]);
    }else{
        result = [inputArray[i]];
        biggestLength = inputArray[i].length
    }
}
return result ;
}


console.log(allLongestStrings(["aba", 
"aa", 
"ad", 
"vcd", 
"aba"]));