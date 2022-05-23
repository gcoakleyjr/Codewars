// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let regex = /[A-Z]/g
    let arr = string.split("")
    return arr.map(val => regex.test(val) ? " " + val : val).join("")
}