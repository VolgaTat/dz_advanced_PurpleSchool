// Описание задачи:
// Разработать функцию для симуляции броска многогранника (Дайса) различных типов,
// используемого в настольных играх, таких как Dungeons and Dragons.

// Параметры функции:
// Тип многогранника, который будет имитироваться броском.
// Поддерживаемые типы: D4, D6, D8, D10, D12, D16, D20.
// Функция должна возвращать случайное число в диапазоне возможных значений для выбранного многогранника.
// Например, для D6 это числа от 1 до 6 включительно.
'use strict'
function DicePolyhedronThrow(typePolyhedron){
  switch(typePolyhedron){
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
    case 16:
    case 20:
      return Math.floor(Math.random()*(typePolyhedron - 1) + 1);
    default: {
     return "Empty action received.";
    } 
  }  
}
console.log(DicePolyhedronThrow(4))
console.log(DicePolyhedronThrow(6))
console.log(DicePolyhedronThrow(8))
console.log(DicePolyhedronThrow(10))
console.log(DicePolyhedronThrow(12))
console.log(DicePolyhedronThrow(16))
console.log(DicePolyhedronThrow(20))
console.log(DicePolyhedronThrow(0))
