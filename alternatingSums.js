function alternatingSums(a) {
    let firstWeight = 0 ;
    let secondWeight = 0 ;
    //  0   1   2   3   4
    // [50, 60, 60, 45, 70]
    for (let i = 0; i < a.length; i++) {
       i % 2 === 0 ? firstWeight += a[i] : secondWeight += a[i];  
    }
    return [firstWeight, secondWeight];
   }
   
   console.log(alternatingSums([80]));