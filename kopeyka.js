// ТЗ

// • Можно вводить количество копеек (число) и по клику по кнопке покажут сколько это рублей.
// • Правила округления — обычные математические.
// • В результате открывается поп-ап окно с результатом
// • В результате может быть только целое число (например 1, 2, 15 рублей)
// • Максимальное число для перевода копеек в рубли — 9999 копеек.

// отвечает за максимальное количество воодимых знаков(решил обойтись без него)
// const inputs = document.querySelectorAll('input[type=number]');
// Array.from(inputs).forEach((input) => {ы
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

const fon = function (fon) {
  document.querySelector('body').style.background = fon;
};
const size = function (size) {
  document.querySelector('body').style.backgroundSize = size;
};
// расчет введеного значения

document.querySelector('.button').addEventListener('click', function () {
  let input = Number(document.querySelector('.input').value);
  console.log(input, typeof input);

  // большое число
  if (input > 9999) {
    fon('url(mnogo.jpg)');
    size('cover');
  }
  // маленькое число
  else if (input < 1) {
    fon('url(malo.jpg)');
    size('cover');
  }
  // 666
  else if (input == 666) {
    fon('url(dusha.jpg)');
    size('cover');
    document.querySelector('.button').textContent = 'продать душу за копейки';
  }
  // // положительн7ый результат
  else {
    fon('url(vsamiy.jpg)');
    size('cover');
    document.querySelector('.input').value = alert(
      Math.round(document.querySelector('.input').value / 100)
    );

    document.querySelector('.button').textContent = 'проверь их';
  }
  document.querySelector('.input').value = null;
});
