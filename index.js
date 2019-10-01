// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(list, name) {
    return list.filter(function (dName){
        return dName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(list, partialLetters){
    let lettersLength = partialLetters.length;
    return list.filter(function (dName) {
        return dName.slice(0, lettersLength) === partialLetters;
    });
}

function matchName(list, name) {
    return list.filter(function(driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}