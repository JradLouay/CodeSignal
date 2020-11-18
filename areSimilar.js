// algo:
// if the 2 elements at the same position are not equal and we didn't have a miss match before
// we search for the element if we find it we permut the 2 and we set searchedBefore to true 

//  tlawej fi el be9i ta3 el array b ken l9at traja3 el position otherwise result = -1 

// import {input} from './testcase';
function searchInRest(array, element, index) {
    return array.findIndex((val, i)=>{
        if (i >= index) {
            return val === element;
        }
    })
}

const permut = (array, i, p)=>{
    const inter = array[i];
    array[i] = array[p];
    array[p] = inter;
    return array;

}

function areSimilar(input) {
    const a = input.a, b = input.b;
    const lengthA = a.length ;
    if ( lengthA !==b.length ) {
        return false ; 
    }
    let searchedBefore = false; //9adech men mara lawejna (ki yabdew les elements mouch metab9in)
    // let positionOfMate = null;
    //   i
    //  [1, 2, 3]  
    //  [3, 2, 1]
    for (let i = 0; i < lengthA; i++) {
        if (a[i] !== b[i] && !searchedBefore) { // a[i] !== b[i] mouch kif kif ou malawejnech 9bal 3ala zouz mouch kifkif 
            const positionOfMate = searchInRest(b, a[i], i+1); // nlawjou 3ala element fi b
            console.log('position', a[i], '  ', positionOfMate);
            if (positionOfMate !== -1 ) { // ken l9ineh
                b =  permut(b, i, positionOfMate); //permutation mta3 el ellement mel array a m3a 5ouh eli lawejna 3lih 
                searchedBefore = true;                 //sinon trasilna n3awdou nlawjou fi el erray eli wra i    
                continue;
            }else{
                return false;
            }
        }else if(a[i] !== b[i] && searchedBefore){ // ken mouch metab9in ou lawejna zeda 9bal 3ala wa7ed e5er mouch metaba9
            return false;
        }
    }
    return true ;

    // let elementsPos1 = {}
    // let elementsPos2 = {}
    // for (let i = 0; i < lengthA; i++) {
    //     elementsPos1[a[i]] = i;
    //     elementsPos2[b[i]] = i;
    // }
    // console.log(elementsPos1, elementsPos2);
    // for (const key in elementsPos1) {
    //     if (elementsPos2.hasOwnProperty(key)) {
    //         const element = object[key];
            
    //     }
    // }
}
console.log(areSimilar(input));