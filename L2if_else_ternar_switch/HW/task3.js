// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – 
// значения аргументов, operation – строка с названием операции.
//  В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) 
// и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    var result;
    switch (operation) {
        case ("+"):
            result = arg1 + arg2;
            break;

        case ("-"):
            result = arg1 - arg2;
            break;
        default:
            return ("Incorrect");
    }
    return result;
}

arg1 = +prompt("Enter arg1 ");
arg2 = +prompt("Enter arg2 ");
operation = prompt("Choose + or - ");
res = mathOperation(arg1, arg2, operation);
console.log(res);