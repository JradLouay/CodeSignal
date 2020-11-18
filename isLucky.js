function isLucky(n) {
    // change the number to a string 
    let stringNum = n.toString();
    const length = stringNum.length;
    if (length % 2 !== 0) {
        return false ;
    }
    // calculate from the left and fro the right 
    let firstSum = 0, secondSum = 0 ;
    //  0 1 2 3   index
    // '1 2 0 3'  string
    //  i     (length-1)-i
    for (let index = 0; index < length/2; index++) {
        firstSum += parseInt(stringNum[index]); 
        secondSum += parseInt(stringNum[length-1-index]);
    }
    if (firstSum!==secondSum) {
        return false;
    }
    return true ;
}

console.log(isLucky(1203));