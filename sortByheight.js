function sortByHeight(a = [-1, 150, 190, 170, -1, -1, 160, 180]) {
    let copy = a;
    let listOfIndexes=[];
    let filtred = a.filter((element, index) => {
        if (element !== -1) {
            copy[index] = 0;
            listOfIndexes.push(index);
        }
        return element !== -1
    }).sort((a, b) => a - b);
//loop from the end and insert the number in placeof the zeros 
for (let i = 0; i < listOfIndexes.length; i++) {
    const element = listOfIndexes[i];
    copy[element] = filtred[i];
}
return copy;
}

console.log(sortByHeight());