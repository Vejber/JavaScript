
var event, ok;
var answers = [];
do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
console.log(answers);
alert('Спасибо за игру');
event = +prompt('Чтобы вернуться к вопросу, выберите номер вопроса 1, 2 или 3, -1 чтобы закончить:');
while (event) {

    switch (event) {
        case (-1): {
            break;
        }
        case (isNaN || !isFinite): {
            alert('Вы ввели недопустимый символ');
            break;
        }
        case (event < -1 || event > 3): {
            alert('Ваше число выходит из допустимого диапозона');
            break;
        }
        case (1): {
            prompt(works.a00 + works.a1 + works.a2 + "Ваш ответ был " + answers[0]);
            event = +prompt('Чтобы вернуться к вопросу, выберите номер вопроса 1, 2 или 3, -1 чтобы закончить:');
            break;
        }
        case (2): {
            prompt(works.b00 + works.b1 + works.b2 + "Ваш ответ был " + answers[1]);
            event = +prompt('Чтобы вернуться к вопросу, выберите номер вопроса 1, 2 или 3, -1 чтобы закончить:');
            break;
        }
        case (3): {
            prompt(works.c00 + works.c1 + works.c2 + "Ваш ответ был " + answers[2]);
            event = +prompt('Чтобы вернуться к вопросу, выберите номер вопроса 1, 2 или 3, -1 чтобы закончить:');
            break;
        }
    }
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    answers.push(event);
    return true;

}