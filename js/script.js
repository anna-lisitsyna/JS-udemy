"use strict"; 
// Типы данных в JS
//Простые типы данных:
// 1. Числа:
// let number = 4.6;
// console.log(-4 / 0); - -infinity - -бесконечноть
// console.log('string' * 9); - NaN - not a number
// 2. Сторка - string
// const person = 'Alex';
//const person = '5';
// 3. Null
// console.log(something);
// 4. Undefined
// let und;
// console.log(und);
// 5. Symbol, 6.BigInt - редко используются в практике
// 7. Логический тип данных boolean значения - true/false


// Объекты - структура, которая используется для хранения любых данных
// Для обозначения объкта используются {}. Объект содержит в себе свойтства и действия (методы)
// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };
//console.log(obj.name);
// console.log(obj ['name']);

// let arr = ['plump.png', 'orange.jpg', 6, 'apple.bmp', [] , {}];
// console.log(arr[1]);

// Простое общение с пользователем
//alert('Hello');

//const result = confirm('Are you her?');
//console.log(result);

// const answer = +prompt('Вам есть 18,?','18');
// console.log(answer +5);

// const answers = [];

// // answers[0] = prompt('Как ваше имя?', '');
// // answers[1] = prompt('Как ваше фамилия?', '');
// // answers[2] = prompt('Сколько вам лет?', '');


// console.log(typeof(answers));


// Интерполяция - это значит что внутри строки мы можем вставлять значение переменной
 
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// console.log(`Привет, ${user}`);


// Опператоры в JS

console.log('arr' + ' - object');
console.log(4 + +' - object');
console.log(4 + +'5');

//Инкримент, декремент

let incr = 10,
    decr = 10;
// ++incr;
// --decr;
console.log(++incr);
console.log(--decr);

console.log(5 % 2);

console.log(2 +2* 2 !== '6');

const isChecked = false,
    isClose = false;
console.log(isChecked || !isClose);
