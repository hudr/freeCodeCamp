/*
    Recursion
*/

function multiply(arr, n) {
    var product = 1
    for (var i = 0; i < n; i++) {
        // Get arr[index] and multiply
        // incrementing product:
        // product *= [10] = 1 (product) * 10
        // product *= [9] = 10 (product) * 9
        // product *= [3] = 90 (product) * 3
        product *= arr[i]
    }
    return product
}

console.log('Function multiply:', multiply([10, 9, 3], 3))

// Without Loop
function multiply2(arr, n) {
    if (n <= 0) {
        return 1
    } else {
        // [n - 1] because it starts at 0
        return multiply2(arr, n - 1) * arr[n - 1]
    }
}

console.log('Function multiply2:', multiply2([10, 9, 3], 3))