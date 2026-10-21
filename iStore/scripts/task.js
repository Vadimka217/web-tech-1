const yearField = document.getElementById("year");
const leapField = document.getElementById("leap");
const centuryField = document.getElementById("century");

function solve() {
  const year = parseInt(yearField.value);

  if (isNaN(year) || year < 1) {
    leapField.value = "ошибка: введите год (целое число от 1)";
    centuryField.value = "ошибка";
    return;
  }

  const flag = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const century = Math.ceil(year / 100);

  leapField.value = flag ? "Високосный" : "Не високосный";
  centuryField.value = century + " век";
}

document.getElementById("solve").addEventListener("click", solve);

document.getElementById("taskForm").addEventListener("submit", solve);
