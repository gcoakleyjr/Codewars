// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    let arr = str.split("")
    return arr.map((val, ind) => arr[ind - 1] === "_" || arr[ind - 1] === "-" ? val.toUpperCase() : val).filter(val => val !== "_").filter(val => val !== "-").join("")
}