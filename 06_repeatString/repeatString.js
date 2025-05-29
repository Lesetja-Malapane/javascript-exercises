const repeatString = function(word, n) {
    let result = "";

    if (n < 0) {
        return "ERROR";
    }

    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
