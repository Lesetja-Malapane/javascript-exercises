const fibonacci = function(num) {
    if (num == 0) {
        return 0
    }

    if (num < 0) return "OOPS";

    let seq = [1, 1];

    for (i = 1; i < num; i++) {
        seq.push(seq[i] + seq[i - 1])
    }
    return seq[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;
