const getTheTitles = function(list) {
    let titles = [];
    for (const obj of list) {
        titles.push(obj.title)
        console.log(obj);
        console.log(obj.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
