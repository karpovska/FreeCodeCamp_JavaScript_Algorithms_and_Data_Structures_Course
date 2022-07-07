/*Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.*/
function translatePigLatin(str) {
    const vowelRegex = /[aeiou]/gi;
    let pigLatin = "";
    if(str[0].match(vowelRegex)){
        pigLatin = str + "way";
    } else if(str.match(vowelRegex) === null){
        pigLatin = str + "ay";
    } else {
        let consCount = str.indexOf(str.match(vowelRegex)[0]);        
        pigLatin = str.substr(consCount) + str.substr(0, consCount) + "ay";
    }
    console.log(pigLatin);
    return pigLatin;
  }
  
  translatePigLatin("consonant");