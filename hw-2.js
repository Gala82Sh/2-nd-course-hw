let a;
a = 10;
alert('Задание1 (первое значение): ' + a);a
 = 20;a
lert('Задание1 (второе значение): ' + a);  


let firstIPhoneYear = 2007;
alert('Задание 2: Год выпуска первого iPhone - ' + firstIPhoneYear);


  let jsCreator = 'Брендан Айк
';alert('Задание 3: Создатель JavaScript - ' + jsCreator


);  let num1 =
 10;let num2 
= 2;alert('Задание4: Сумма 10 и 2 = ' + (num1 + num2
));alert('Задание4: Разность 10 и 2 = ' + (num1 - num2)
);alert('Задание4: Произведение 10 и 2 = ' + (num1 * num2))
;alert('Задание4: Частное 10 и 2 = ' + (num1 / num2));


  let result = 2 ** 
5;alert('Задание5: 2 в 5-й степени = ' +result);


  let a6 = 
9;let b6 = 
2;let remainder =a6 % b6
;alert('Задание6: Остаток от деления 9 на 2 = ' +remainder); 


 let num = 1
;num += 5
;num -= 3
;num *= 7
;num /= 3
;num++
;num--
;alert('Задание 7: Результат = ' + num)



;   let age = prompt('Задание8: Сколько вам лет?
');alert('Задание8: Вам ' + age + ' лет.'


);  let user
 = {    name: 'Ив
ан',    age:
 25,    isAdmin: f
al
se};alert('Задание 9: Имя: ' + user.name+ ',Возраст: ' + user.age+ ',Админ: ' + user.isAdmin);



   let userName = prompt('Задание10: Как вас зовут?'
);alert(`Задание10: Привет, ${userName}!`)


;  alert('Атеперь - математический фокус!'
);let number = prompt('Загадайте любое число:'
);number = Number(number

); if (isNaN(number)
) {    alert('Ошибка: нужно ввести число!
');} els
e {    letdoubled = number * 
2;    alert('Удвоенное число: ' +doubled)
;   
     letplusTen = doubled + 10;
    alert('Прибавили 10: ' + plusTen);
    
    lethalved = plusTen / 2; 
   alert('Разделили на 2: ' +halved);  
    
  letfinalResult = halved -number;    
alert('Вычли исходное число: ' +finalResult);     
   a
lert('Получилось5! Задание выполнено!');}