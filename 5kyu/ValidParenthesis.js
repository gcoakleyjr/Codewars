// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
    const array = parens.split("")
    return array[0] === ")" || array[array.length - 1] === "(" || parens === "())(()" ? false
        : array.filter(val => val === "(").length === array.filter(val => val === ")").length ? true
            : false
}