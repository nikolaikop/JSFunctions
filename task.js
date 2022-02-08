// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  avg = +((sum / arr.length).toFixed(2));
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
  let max = -Infinity;
  // Ваш кода
  // for ...
  for (let i = 0; i < arrOfArr.length; i++) {
    let tmp = func(arrOfArr[i]);
    if (max < tmp) {
    max = tmp;
    }
  }
  //console.log(max);
  return max;
}
//smakeWork([[1, 2, 3, 4], [10, 20, -10, -20]],worker)

// Задание 3
function worker2(arr) {
  let arrParams = getArrayParams(arr);
  return Math.abs(arrParams.max - arrParams.min);
}
makeWork([[0, 1, 2], [-1, -100]],worker2)
