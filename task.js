// Задание 1
function getArrayParams(arr) {
  let min, max, sum = 0, avg;

  "Объект с переменными для максимума и минимума"
  let data = {
    maximum: 0,
    minimum: 0,
  }

  let array = new Array();

  function calculate(array) {

    if (typeof arr == "undefined") {
      "Расчет среднего"
      avg = Number((sum/array.length).toFixed(2));
      //console.log('среднее суммы = ' + avg);

      "Расчет максимума и минимума"
      for (let i = 0; i < array.length; i++) {
        if (data.maximum < array[i]) {
          data.maximum = array[i];
        }
      }
      max = data.maximum;
      //console.log('максимум = ' + max);
  
      if (array.length == 1) {
        data.minimum = array[0];
      }
      else {
        for (let i = 0; i < array.length; i++)  {
          if (array[i] < data.maximum) {
            data.maximum = array[i];
            data.minimum = array[i];
          } 
        }
      }
      min = data.minimum;
      //console.log('минимум = ' + min);
    }
    else {
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      //console.log('сумма = ' + sum);
      "Расчет среднего"
      avg = Number((sum/arr.length).toFixed(2));
      //console.log('среднее суммы = ' + avg);

      "Расчет максимума и минимума"
      for (let i = 0; i < arr.length; i++)  {
        if (data.maximum < arr[i]) {
          data.maximum = arr[i];
        }
      }
      max = data.maximum;
      //console.log('максимум = ' + max);
  
      if (arr.length == 1) {
        data.minimum = arr[0];
      }
      else {
        for (let i = 0; i < arr.length; i++)  {
          if (arr[i] < data.maximum) {
            data.maximum = arr[i];
            data.minimum = arr[i];
          } 
        }
      }
      min = data.minimum;
      //console.log('минимум = ' + min);
    }
  }

  if (typeof arr == "undefined") {
    "Функция получения рандомного числа в заданном промежутке"
    function getRndInteger(min, max) {
      let x =  Math.floor(Math.random() * (max - min + 1) ) + min;
      return x;
    }
    "Заполнение массива рандомным количеством чисел из промежутка от -100 до 100 и получение суммы массива"
    for (let i = 0; i <= getRndInteger(1,20); i++) {
      array[i] = getRndInteger(-10,10);
    //console.log(array[i])
      sum += array[i];
    }
    //console.log('сумма = ' + sum);
    calculate(array);
  }
  else {
   calculate(array);
  }
    return { min: min, max: max, avg: avg };
}
getArrayParams()

// Задание 2
function worker(arr) {
  let sum = 0;
  // Ваш код
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  // Ваш кода
  // for ...
  for (let i = 0; i < arrOfArr.length; i++)  {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i]);
    }
  }
  //console.log(max);
  return max;
}
//smakeWork([[1, 2, 3, 4], [10, 20, -10, -20]],worker)

// Задание 3
function worker2(arr) {
  // Ваш код
  dataMinMax = {
    min: 0, 
    max: -Infinity
  }
  let minimum = 0, maximum = 0;

  for (let i = 0; i < arr.length; i++)  {
    if (dataMinMax.max < arr[i]) {
      dataMinMax.max = arr[i];
    }
  }
  maximum = dataMinMax.max;

  for (let i = 0; i < arr.length; i++)  {
    if (arr[i] < dataMinMax.max) {
      dataMinMax.max = arr[i];
      dataMinMax.min = arr[i];
    } 
  }
  minimum = dataMinMax.min;

  let diff = 0;
  //console.log('максимум = ' + maximum);
  //console.log('минимум = ' + minimum);
  if (minimum < 0) {
    diff = maximum + Math.abs(minimum);
  }
  else {
    diff = Math.abs(maximum - minimum);
  }
  //console.log('разница = ' + diff)
  return diff;
}
makeWork([[0, 1, 2], [-1, -100]],worker2)
