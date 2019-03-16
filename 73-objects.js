'use strict';

var person = {};
person.name = 'Vasya';
person.age = 33;
person.surname = 'Petrov';
person.middlename = 'Ivanovich';
person.citizen = 'KG';
person.pob = 'bishkek';
person.pol = 'Ivanovka';
var count=0;
for (var key in person){
	console.log(person[key]);
	count++;
}
/*var oLength = Object.keys[person].length;*/
/*console.log('Kol:' + count + ' ' + 'Длина :' + Object.keys[person].length);*/



/*delete person.age;*/
/*
alert ('person.age: ' + person.age);*/
/*var key = 'age';
alert(person[key]);*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// 1 способ - короткий, но здесь ошибка var key не используется
/*function fPress() {
	if (isEmpty(personPusto)){alert('Pusto')}
	else alert('Ne pusto!');

}

function isEmpty(obj) {
	for (var key in obj) {
		return false;
	}
	return true;
}*/
// 2 способ - длинный
/*	var pusto = 0;
	for(var key in Obj) {
		pusto++;
	}
	if (pusto>0) {alert('Ne Pusto!')}
	else {alert('pusto!')}
}*/

// 3-й способ более правильный
/*function fPress() {
	var personPusto = {};
	var personNePusto = {
		name: 'Kot',
		age: 22
	};

/!*	alert('fPress');*!/
	isEmpty(person);
	isEmpty(personPusto);
	isEmpty(personNePusto);
}

function isEmpty(obj){
	for(var key in obj) {
		return alert('Ne Pusto! -> ' + obj[key]);
	}
	return alert('Pusto! -> ' + obj[key]);
}*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// сумма всех зарплат
/*
var zarplata = {
	'Vasya': 1000,
	'Petya': 200,
	'Sima': 300
}
var summa = 0;
for (var key in zarplata){
	summa+=zarplata[key];
}
alert('Summa zarplat = ' + summa);*/

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата. Если объект пустой, то пусть он выводит «нет сотрудников».*/

var salaries = {
	'Vasya': 1000,
	'Petya': 987,
	'Sasha': 3
}

var noMembers = {};

/*
var max = 0, kol = 0;
for (var key in salaries) {
	kol++;
	if (max < salaries[key]) {
		max = salaries[key];
	}
}
if (kol=0) {alert('No members!')}
else {alert('Max of All Salaries = ' + max)}


var max = 0, kol = 0;
for (var key in noMembers) {
	kol++;
	if (max < noMembers[key]) {
		max = noMembers[key];
	}
}
if (kol=0) {alert('No members!')}
else {alert('Max of All Salaries = ' + max)}*/

// оригинальный вариант