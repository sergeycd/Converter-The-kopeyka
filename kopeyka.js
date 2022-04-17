// отвечает за максимальное количество воодимых знаков
// const inputs = document.querySelectorAll('input[type=number]');
// Array.from(inputs).forEach((input) => {
//   const min = +input.min;
//   const max = +input.max;

//   input.addEventListener('input', (e) => {
//     const value = +input.value;
//     if (value > max) {
//       input.value = max;
//     } else if (value < min) {
//       input.value = min;
//     }
//   });
// });
// расчет введеного значения

document.querySelector('.button').addEventListener('click', function () {
  let input = Number(document.querySelector('.input').value);
  console.log(input, typeof input);
  // большое число
  if (input > 9999) {
    document.querySelector('.input').value = null;
    document.querySelector('body').style.background = 'url(mnogo.jpg)';
    document.querySelector('body').style.backgroundSize = 'cover';
  }
  // маленькое число
  else if (input < 1) {
    document.querySelector('.input').value = null;
    document.querySelector('body').style.background = 'url(malo.jpg)';
    document.querySelector('body').style.backgroundSize = 'cover';
  }
  // // положительн7ый результат
  else {
    document.querySelector('body').style.background = 'url(vsamiy.jpg)';
    document.querySelector('body').style.backgroundSize = 'cover';
    document.querySelector('.input').value = alert(
      Math.round(document.querySelector('.input').value / 100)
    );
    document.querySelector('.button').textContent = 'проверь их';
  }
});
