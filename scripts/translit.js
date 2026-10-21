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
    year: "MMVI"       
};

const surnameNode = document.getElementById("surname");
const nameNode = document.getElementById("first-name");
const patronymicNode = document.getElementById("patronymic");
const yearNode = document.getElementById("birth-year");
const button = document.getElementById("change");

let isLatin = false;


function change() {
    isLatin = !isLatin;                      
    const data = isLatin ? latin : cyrillic;     

    surnameNode.textContent = data.surname;
    nameNode.textContent = data.name;
    patronymicNode.textContent = data.patronymic;
    yearNode.textContent = data.year;

    button.textContent = isLatin ? "Вернуть кириллицу" : "Заменить на латиницу";
}
button.addEventListener("click", change);
