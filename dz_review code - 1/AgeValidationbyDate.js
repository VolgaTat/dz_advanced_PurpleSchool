// Задача:
// Разработать функцию для валидации возраста пользователя.
// Входные данные:

// Строка с датой рождения в формате "ГГГГ-ММ-ДД".
// Условия:
// Функция должна возвращать true, если пользователю больше 14 лет.
// Функция должна возвращать false, если пользователю меньше 14 лет.
// Применение:

// Функция будет
// Функция будет использоваться для валидации возраста при регистрации
//пользователя на платформе или в приложении.
'use strict'
function AgeValidationbyDate(dateNew) {
  if(!dateNew.getFullYear() || !dateNew.getDate() || !dateNew.getMonth()){
    return false;
  } else {
    let diff = Date.now() - dateNew.getTime();
    let yearDiff = new Date(diff); 
    let year = yearDiff.getUTCFullYear();
    let age = Math.abs(year - 1970);
    console.log(age);
    return age > 14 ? `Пользователь старше 14 лет: ${true}` : false;
  }
}
console.log(AgeValidationbyDate(randomDate(new Date(1969,8,14), new Date())));

function randomDate(start, end) {
  return new Date( Math.random() * (end.getTime() - start.getTime()) + start.getTime());
}


