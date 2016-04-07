// Homework_JS_1-2_2-Alexey Bublichenko
'use strict';

var listOfusers = [];
var currentUser, checkUser;

alert('Составим список из 5-и любых имен пользователей,\nдля последующей идентификации при входе\n');
for (var i = 0; i < 5; i++) {
	listOfusers[i] = prompt('Введите ' + (i + 1) + '-е имя пользователя в список:','Имя' + (i + 1) );
};

currentUser = prompt('ВХОД\nВведите имя пользователя:','Имя?');
checkUser = false;

for (var i = 0; i < listOfusers.length; i++) {
	if (listOfusers[i] == currentUser) {
		checkUser = true;
		alert('ДОБРО ПОЖАЛОВАТЬ!\n' + currentUser + ', вы успешно вошли');
		break;
	};
};
if (!checkUser) {
	alert('ОШИБКА!\nПользователь "' + currentUser + '" отсутствует в списке!');
};