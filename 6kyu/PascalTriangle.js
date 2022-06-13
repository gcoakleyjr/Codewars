
// Here you will create the classic Pascal's triangle.
// Your function will be passed the depth of the triangle and your code has to return the corresponding Pascal's triangle up to that depth.

// The triangle should be returned as a nested array. For example:

// pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
// To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together, except for the edges, which are all 1. e.g.:

//       1
//     1   1
//   1   2   1
// 1   3   3   1

function pascal(depth) {
    if (depth === 1) return [[1]]
    let answer = []
    for (let i = 1; i < depth + 1; i++) {
        let array = []
        for (let n = 0; n < i; n++) {
            if (n === 0) {
                array.push(1)
            } else if (n === i - 1) {
                array.push(1)
            } else {
                array.push(answer[i - 2][n - 1] + answer[i - 2][n])
            }

        }
        answer.push(array)
    }
    return answer
}