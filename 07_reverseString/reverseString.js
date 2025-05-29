const reverseString = function(word) {
    let reversedWord = '';

    for (let i = 0; i < word.length; i++) {
        reversedWord = word[i] + reversedWord;
    }
    return reversedWord;
};
// Do not edit below this line
module.exports = reverseString;
