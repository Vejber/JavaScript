// Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.

var a = +((Math.random() * (15 - 0) - 0).toFixed(0));
console.log(a);
function show_a(a) {
    switch (a) {
        // case (a < 0):
        //     break;
        case (a <= 15): {
            console.log(a);
            show_a(++a);
            break;
        }
        default:
            console.log(a);
    }
}

show_a(a);