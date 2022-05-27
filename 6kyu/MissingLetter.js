// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

function findMissingLetter(array) {
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    let newArray = array.join("").toLowerCase().split("")


    for (let i = 0; i < alpha.length; i++) {
        if (newArray[0] === alpha[i]) {
            for (let n = 0; n < array.length; n++) {
                if (newArray[n] !== alpha[i + n]) {
                    return array[0] === array[0].toUpperCase() ? alpha[i + n].toUpperCase() : alpha[i + n]
                }
            }
        }
    }
}