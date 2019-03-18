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
console.log('Kol:' + count + ' ' + 'Длина :' + Object.keys[person].length);

/*delete person.age;*/
/*
alert ('person.age: ' + person.age);*/
/*var key = 'age';
alert(person[key]);*/

var personPusto = {};

function fPress() {
	if (isEmpty(personPusto)){alert('Pusto')}
	else alert('Ne pusto!');
}
// 1 способ - короткий
function isEmpty(obj) {
	for (var key in obj) {
		return false;
	}
	return true;
}
// 2 способ - длинный
/*	var pusto = 0;
	for(var key in Obj) {
		pusto++;
	}
	if (pusto>0) {alert('Ne Pusto!')}
	else {alert('pusto!')}
}*/
