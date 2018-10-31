/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i=0; i<array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  var arr = [];
  for (let i=0; i<array.length; i++) {
    arr.push(fn(array[i], i, array));        
  }
  return arr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  if(initial){
          var result = initial;
          for (let i=0; i<array.length; i++) {
          result = fn.call(null, result, array[i], i, array);    
          }	
  } else {
          var result = array[0];
          for (let i=1; i<array.length; i++) {
          result = fn.call(null, result, array[i], i, array);    
          }
  }
  return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(key.toUpperCase());        
  }
  return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    // набросок
    // var arr = [];

    // if(from>0 && end>0){
    //   for (from; from<to; from++) {
    //     arr.push(array[i], i, array);
    //   }
    // } elseif (from = undefined){
    //   from = 0;
    //   for (from; from<to; from++) {
    //     arr.push(array[i], i, array);
    //   }
    // }
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = Math.pow(value,2);
      return target[prop];
    }
  });
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
