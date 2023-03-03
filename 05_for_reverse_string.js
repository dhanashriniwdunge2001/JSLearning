var vowelsCount = function() {
    //to count the vowels
    var vowels = str.lemgth;
    return;

}
vowelsCount("Focus is the key");

var firstWordLength = function(strGiven){//Focus is the key
    var firstWord = "";
    for (let index = 0; index< strGiven.length; index++){
        var char = strGiven.charAt(index);
        firstWord = firstWord +char;//"F"+"O"
        if (char==" "){
            break;
        }
    }
    return firstWord;

}
var firstWord=firstWordLength("Focus is the key");
console.log(`First word -->${firstWord}length is `);