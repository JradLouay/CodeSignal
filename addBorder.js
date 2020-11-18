function addBorder(picture) {
    let newPicture = picture.map((el)=>{
        return `*${el}*`;
        });
    // Array(newPicture[0].length).join('x');  join : adds all the element of an array seperated by 'x' 
    // while it is an empty array [    ] the seperator will take place of all chars of the string 
    const stars = '*'.repeat(newPicture[0].length);// repeats *** n times
    return [stars, ...newPicture, stars];
}


console.log(addBorder(["abc", "ded"]));