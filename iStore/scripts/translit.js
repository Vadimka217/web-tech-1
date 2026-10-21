// Страница "Изменяем кириллицу на латиницу по клику".
// По клику на кнопку данные паспорта переключаются между кириллицей и латиницей.

// 1. Данные: в одном объекте русские значения, в другом латинские
const cyrillic = {
    surname: "Павлов",
    name: "Вадим",
    patronymic: "Кириллович",
    year: "2006"
};
const latin = {
    surname: "Pavlov",
    name: "Vadim",
    patronymic: "Kirillovich",
    year: "MMVI"        // 2006 римскими цифрами: MM = 2000, VI = 6
};

// 2. Находим элементы страницы по id
const surnameNode = document.getElementById("surname");
const nameNode = document.getElementById("first-name");
const patronymicNode = document.getElementById("patronymic");
const yearNode = document.getElementById("birth-year");
const button = document.getElementById("change");

// 3. Состояние: false = сейчас кириллица, true = латиница
let isLatin = false;

// 4. Функция переключения
function change() {
    isLatin = !isLatin;                          // меняем true на false и наоборот
    const data = isLatin ? latin : cyrillic;     // берём нужный набор данных

    surnameNode.textContent = data.surname;
    nameNode.textContent = data.name;
    patronymicNode.textContent = data.patronymic;
    yearNode.textContent = data.year;

    button.textContent = isLatin ? "Вернуть кириллицу" : "Заменить на латиницу";
}

// 5. Событие: по клику на кнопку вызываем change
button.addEventListener("click", change);
