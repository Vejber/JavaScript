// С помощью цикла while вывести все простые числа в промежутке от 0 до 100

// var i = 1;
// var j = 0;
// while (i <= 100) {
//     1
//     j = 1;
//     for (j; j <= i; j++) {
//         if (i % j == 0) {
//             continue;
//         }
//         else {
//             console.log(i);
//         }
//     }
//     i++;
// }

function is_prime(num) {
    var j = 2;
    while (j <= num / 2) {
        if (num % j == 0) {
            return false;
        }
        j++;
    }
    return true;
}

var x = 2;

while (x <= 100) {
    if (is_prime(x)) {
        console.log(x);
    }
    x++;
}