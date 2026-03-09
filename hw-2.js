let a;
a = 10;
alert('Задание 1 (первое значение): ' + a);
a = 20;
alert('Задание 1 (второе значение): ' + a);

let firstIPhoneYear = 2007;
alert('Задание 2: Год выпуска первого iPhone - ' + firstIPhoneYear);

let jsCreator = 'Брендан Айк';
alert('Задание 3: Создатель JavaScript - ' + jsCreator);

let num1 = 10;
let num2 = 2;
alert('Задание 4: Сумма 10 и 2 = ' + (num1 + num2));
alert('Задание 4: Разность 10 и 2 = ' + (num1 - num2));
alert('Задание 4: Произведение 10 и 2 = ' + (num1 * num2));
alert('Задание 4: Частное 10 и 2 = ' + (num1 / num2));

let result = 2 ** 5;
alert('Задание 5: 2 в 5-й степени = ' + result);

let a6 = 9;
let b6 = 2;
let remainder = a6 % b6;
alert('Задание 6: Остаток от деления 9 на 2 = ' + remainder);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert('Задание 7: Результат = ' + num);

let age = prompt('Задание 8: Сколько вам лет?');
alert('Задание 8: Вам ' + age + ' лет.');

let user = {
    name: 'Иван',
    age: 25,
    isAdmin: false
};
alert('Задание 9: Имя: ' + user.name + ', Возраст: ' + user.age + ', Админ: ' + user.isAdmin);

let userName = prompt('Задание 10: Как вас зовут?');
alert(`Задание 10: Привет, ${userName}!`);

alert('А теперь - математический фокус!');
let number = prompt('Загадайте любое число:');
number = Number(number);

if (isNaN(number)) {
    alert('Ошибка: нужно ввести число!');
} else {
    let doubled = number * 2;
    alert('Удвоенное число: ' + doubled);
    
    let plusTen = doubled + 10;
    alert('Прибавили 10: ' + plusTen);
    
    let halved = plusTen / 2;
    alert('Разделили на 2: ' + halved);
    
    let finalResult = halved - number;
    alert('Вычли исходное число: ' + finalResult);
    
    alert('Получилось 5! Задание выполнено!');
}

