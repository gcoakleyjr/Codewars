// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    let strArray = str.split("")
    let array = []
    for (let i = 0; i < strArray.length; i += 2) {
        let pushed = strArray[i] + (strArray[i + 1] ? strArray[i + 1] : "_")
        array.push(pushed)
    }
    return array
}