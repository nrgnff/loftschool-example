/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
  let ms = seconds*1000;
  let promise = new Promise((resolve) => {

    setTimeout(() => {
      resolve();
    }, ms);
  
  });
  return promise;
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов пожно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {
  let urlPromise = fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
  let ms = seconds*1000;
  let promise = new Promise((resolve) => {

    let urlPromise = fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');
    urlPromise.then(function (response) {
        return response.json();
    })
  
  });
  promise
  .then(function (result) {
      console.log(result);
  })
  return promise;
}

export {
    delayPromise,
    loadAndSortTowns
};
