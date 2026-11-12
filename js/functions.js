const checkLengthString = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
};

checkLengthString('проверяемая строка', 20);
checkLengthString('проверяемая строка', 18);
checkLengthString('проверяемая строка', 10);

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

const goNum = (input) => {
  const things = String(input);
  let result = '';
  for(const i of things) {
    if (!Number.isNaN(parseInt(i,10))) {
      result += i;
    }
  }

  return parseInt(result, 10);
};


goNum('2023 год');            // 2023
goNum('ECMAScript 2022');     // 2022
goNum('1 кефир, 0.5 батона'); // 105
goNum('агент 007');           // 7
goNum('а я томат');           // NaN

goNum(2023); // 2023
goNum(-1);   // 1
goNum(1.5);  // 15
