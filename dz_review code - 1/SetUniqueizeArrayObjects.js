// Цель задания:
// Освоить работу с Set для уникализации массива объектов.
// Проблема:
// Прямая уникализация объектов с помощью Set невозможна.

let arrayObjects = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 1, name: "Вася"},
  {id: 8, name: "Катя"},
  {id: 4, name: "Катя"},
  {id: 8, name: "Катя"},
  {id: 6, name: "Катя"},
]
const setUniqueizeArrayObjects = ()=>{
  let arrayObjMap = arrayObjects.map(elem => `${elem.id}:${elem.name}`).sort();
  let arrayObjSet = [...new Set(arrayObjMap)]
  let setUniqueizeNewArray = []
  for(let i = 0; i < arrayObjSet.length; i++){
   setUniqueizeNewArray.push({id: arrayObjSet[i][0], name: arrayObjSet[i].replace(/[0-9\s]+\:/,"") });
  }
return setUniqueizeNewArray;
}
console.log(setUniqueizeArrayObjects(arrayObjects))