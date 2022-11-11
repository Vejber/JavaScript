// С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow, result = 1) {
    if (pow >= 1) {
        result = result * val;
        power(val, pow - 1, result);
    }
    else {
        console.log(result);
        return;
    }
}

power(2, 3);