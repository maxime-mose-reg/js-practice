'use strict';

let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let key = prompt('Введите обязательную статью расходов в этом месяце'),
        value = prompt('Во сколько обойдется?');

    if (typeof (key) != null && typeof (value) != null && typeof (key) === 'string' && key != '' && value != '' && key.length < 50) {
        console.log('Done!');
        appData.expenses[key] = value;
    } else {
        console.log('Чё-то не то...')
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     let key = prompt('Введите обязательную статью расходов в этом месяце'),
//         value = prompt('Во сколько обойдется?');

//     if (typeof (key) != null && typeof (value) != null && typeof (key) === 'string' && key != '' && value != '' && key.length < 50) {
//         console.log('Done!');
//         appData.expenses[key] = value;
//     } else {
//         console.log('Чё-то не то...');
//         j--;
//     }
//     i++;
// }

// let j = 0;
// do {
//     let key = prompt('Введите обязательную статью расходов в этом месяце'),
//         value = prompt('Во сколько обойдется?');

//     if (typeof (key) != null && typeof (value) != null && typeof (key) === 'string' && key != '' && value != '' && key.length < 50) {
//         console.log('Done!');
//         appData.expenses[key] = value;
//     } else {
//         console.log('Чё-то не то...');
//         j--;
//     }
//     j++;
// } while (j < 2)

appData.moneyPerDay = appData.budget / 30;

alert('Бюджет на 1 день составляет ' + appData.moneyPerDay)

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}
