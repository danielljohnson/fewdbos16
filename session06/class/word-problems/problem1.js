// 1
// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(51, 50));

// 2
function math(num1, num2, operator) {
    if (operator === 'add') {
        return num1 + num2;
    }

    if (operator === 'subtract') {
        return num1 - num2;
    }
}

// console.log(math(1, 2, 'add'));
// console.log(math(1, 2, 'subtract'));

// 3
function summation(n) {
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(summation(10)); // 55











