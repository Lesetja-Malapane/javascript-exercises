const palindromes = function (string) {
    const word = getWord(string)
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord
};

function getWord(word) {
    return  word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ").join("");
}

// Do not edit below this line
module.exports = palindromes;
