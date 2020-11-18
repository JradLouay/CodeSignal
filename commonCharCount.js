function commonCharacterCount(s1, s2) {
    //count the freq of each char in s1 & s|
    if (s1.length===0 || s2.length===0) {
        return 0 ;
    }
    let freqCoun1 = {};
    let freqCoun2 = {};
    let total = 0 ;
    for (const char of s1) {
        freqCoun1[char]= (freqCoun1[char] || 0) + 1;
    }
    for (const char of s2) {
        if (freqCoun2.hasOwnProperty(char)) {
            freqCoun2[char]++;
        }else{
            freqCoun2[char] = 1;
        }
    }
    console.log(freqCoun1, freqCoun2);
    // compare prp if equal take the small 
    for (const key1 in freqCoun1) {
        if(freqCoun2.hasOwnProperty(key1)){
            total = total + ( freqCoun1[key1]<freqCoun2[key1] ? freqCoun1[key1] : freqCoun2[key1]) ; 
            delete freqCoun2.key1 ;
        }
    }
    return total
}
console.log( commonCharacterCount("aabcc", "adcaa") );