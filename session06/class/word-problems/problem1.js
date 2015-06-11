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

// 4
function avg(n) {
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += i;
    }

    return sum / n;
}

console.log(avg(3)); // 2

// 5
function sumEven(n) {
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumEven(4)); // 6

// 6
function reverse(word) {
    // take string and break apart into characters
    var chars = word.split('');

    // define empty string
    var new_string = '';
    
    // start at end, work forwards and add each character to new_string
    for (var i = chars.length - 1; i >= 0; i--) {
        new_string += chars[i];
    }
    
    return new_string;
}

console.log(reverse("cat"));
