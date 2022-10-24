// Reorganize and fix this code so it is properly formatted
// One if statement checks for Integer data type
// One if statement checks for String data type
// One else statement that is the default
// The correct if/else statement will be stored in teh sentence varaible
// console log out the sentence at the end and add a single line comment.

var z = 2;
var sentence = "";
if(z===2) {
    sentence= "This is the number " +z+"." ;
} else if (z==="2") {
    sentence= "This is the string 2. ";
} else {sentence="The number is something else.";}
console.log(sentence);
//This is the number 2.