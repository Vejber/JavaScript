// С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var basket = [
    {
        item: "book",
        price: 50,
        count: 1
    },
    {
        item: "case",
        price: 100,
        count: 3
    },
    {
        item: "toy",
        price: 15,
        count: 2
    }
];
function countBasketPrice(obj) {
    var result = 0;
    for (var item of obj) {
        result += (item.price * item.count);
    }
    return result;
}

console.log("Total is " + countBasketPrice(basket) + " rub");
