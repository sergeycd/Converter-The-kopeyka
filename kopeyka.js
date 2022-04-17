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
    document.querySelector('body').style.background =
      'url(https://ltdfoto.ru/images/2022/04/17/IMG_0469.jpg)';
    document.querySelector('body').style.backgroundSize = 'cover';
  }
  // маленькое число
  else if (input < 1) {
    document.querySelector('.input').value = null;
    document.querySelector('body').style.background =
      'url(https://ltdfoto.ru/images/2022/04/17/IMG_0468.jpg)';
    document.querySelector('body').style.backgroundSize = 'cover';
  }
  // // положительн7ый результат
  else {
    document.querySelector('body').style.background =
      'url(https://ltdfoto.ru/images/2022/04/17/photo_2022-04-17_23-03-03.jpg)';
    document.querySelector('body').style.backgroundSize = 'cover';
    document.querySelector('.input').value = alert(
      Math.round(document.querySelector('.input').value / 100)
    );
    document.querySelector('.button').textContent = 'проверь их';
  }
});
