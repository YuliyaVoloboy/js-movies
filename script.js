"use strict";
/*  Условия  */
/*
const num = 50;

if (num < 50) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

(num == 50) ? console.log('Ok') : console.log('Error'); // тернарный оператор
*/
const num = 49;

switch (num) {
    case 49:
        console.log('Неверно..');
        break;
    case 100:
        console.log('Неверно..');
        break;
    case 50:
        console.log('Вот теперь правильно!');
        break;
    default: 
        console.log('Не в этот раз..');
}



if(4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

/*  Movies  */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);