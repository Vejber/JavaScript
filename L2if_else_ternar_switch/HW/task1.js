// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.


function res(a, b) {
    if (a >= 0 && b >= 0) {
        console.log(a - b);
    }
    else if (a < 0 && b < 0) {
        console.log(a * b);
    }
    else {
        console.log(a + b);
    }
}
var a = +prompt("Enter a > ");
var b = +prompt("Enter b > ");

res(a, b);