// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    let array = []
    if (n === 1) {
        return 1
    } else {
        for (let i = 1; i <= n * n; i++) {
            if ((i + n) % 2 !== 0) {
                array.push(i + n)
            }
        }
    }
    return array.slice(array.length - n, array.length).reduce((a, b) => a + b)
}