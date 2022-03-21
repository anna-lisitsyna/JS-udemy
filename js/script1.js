"use strict";


function hello() {
    console.log('Hello world');
}

hello();

function hi() {
    console.log('Say hi');
}
hi();

const arr = [1, 14, 4, 30, 54],
    sorted = arr.sort(compareNum);
function compareNum(a, b) {
    return a - b;
}
console.log(sorted);
compareNum();















// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');
    
//             if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('erorr');
//                 i--;
//             }
//         }
//     },
//     detectedPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Ваш любимы жанр под номером ${i}`); 

//             // if (genre == '' || genre == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их ввобще');
//             //     i--;
//             // } else {
//             //   personalMovieDB.genres[i - 1] = genre;  
//             // }
//             // другой способ:
//             let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//             if (genre == '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их ввобще');
//                 i--;
//             } else {
//                 personalMovieDB.genres = genre.split(', ');  
//                 personalMovieDB.genres.sort();
//             }
            
            
//         }  
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item} `);
//         });
//     }
    
// };


// /* Первый способ обьявить цикл
// let j = 0;
// while (j < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         j++;
//     } else {
//         console.log('erorr');
        
//     }
// }*/

// /* Второй способ обьявить цикл 
// let j = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         j++;
//     } else {
//         console.log('erorr');
//     }

// } while (j < 2);*/







