function matrixElementsSum(matrix) {
 
    const flatMatrix = matrix.flat();
    const width = matrix[0].length;
    let start=0, somme = 0 ;
    
    // start the search and count  
    while(start < width){
        
        for (let index = start; index < flatMatrix.length; index =index+width) {
            if (flatMatrix[index]===0) {
                break;
            }
            somme +=flatMatrix[index];
        }
        start ++;
    }
    return somme ;
       
}
console.log(matrixElementsSum([[0,1,1,2], 
    [0,5,0,0], 
    [2,0,3,3]]));