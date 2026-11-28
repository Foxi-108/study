const catalog = [
    {position : 1, name : "Коврик", specs : "180 см · 1 комплект", description : "Для остановки и отдыха на природе"},
    {position : 2, name : "Фонарь", specs : "Три режима · 1 комплект", description : "Свет для вечерней прогулки"},
    {position : 2, name : "Космические шахматы", specs : "1 комплект", description : "А они тут как оказались?"},
    {position : 3, name : "Рюкзак", specs : "30 литров · 1 комплект", description : "Для вещей и короткого маршрута"}
];

function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }

  const quantity = Number(quantityText);

  if (Number.isNaN(quantity) || !Number.isFinite(quantity)) {
    return "Ошибка: введите число";
  }

  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество";
  }

  const totalAmount = quantity * unitAmount + extraAmount;
  return "Итого: " + totalAmount;
}

const selectedName = "Коврик";
const quantityText = "3";
const unitValue = 310;
const extraValue = 70;


// console.log("Записей: " + catalog.length);

// for (const item of catalog) {
//   console.log(item.position + ". " + item.name);
//   console.log("Характеристика: " + item.specs);
//   console.log("Описание: " + item.description);
// }


// let foundCount = 0;

// for (const item of catalog) {
//   if (item.name === selectedName) {
//     console.log("Выбрано для расчёта: " + item.name);
//     const message = getResult(quantityText, unitValue, extraValue);
//     console.log(message);
//     console.log("Единицы: усл. руб.");
//     foundCount = foundCount + 1;
//   }
// }

// console.log("Найдено записей: " + foundCount);

// if (foundCount === 0) {
//   console.log("Запись не найдена: " + selectedName);
// }

// if (foundCount > 1) {
//   console.log("Проверьте повторяющиеся названия");
// }


// const searchFragment = "Коврик";   // непустой фрагмент настоящего названия

// console.log("--- Поиск по фрагменту ---");

// if (searchFragment.trim() === "") {
//   console.log("Укажите текст поиска");
// } else {
//   let matchCount = 0;

//   for (const item of catalog) {
//     if (item.name.includes(searchFragment)) {
//       console.log("Совпадение: " + item.name);
//       matchCount = matchCount + 1;
//     }
//   }

//   console.log("Найдено по фрагменту: " + matchCount);
// }


//Пара 1
// console.table(catalog);
// console.log(catalog.length);

// const names = catalog.map(catalog => catalog.name);
// console.log(names);

// const longNames = catalog.filter(catalog => catalog.name == "Коврик");
// console.log(longNames.length);

// const selectedName = "Рюкзак";
// const found = catalog.find(item => item.name === selectedName);
// if (found) {
//   console.log(found.specs);
// } else {
//   console.log("Запись не найдена");
// }

function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}
// console.log("-------------------")
// console.log(filterByText(catalog, "").length);
// console.log(filterByText(catalog, "Фон"));
// console.log(filterByText(catalog, "  Фон  ").length);
// console.log(filterByText(catalog, "нет такой записи"));


//Пара 2
// const status = document.querySelector("#status");
// const first = catalog[0].name;
// status.textContent = first + " — " + catalog.length + " записей";

// const status = document.querySelector("#status");
// const namesList = document.querySelector("#names");

// function renderNames() {
//   namesList.replaceChildren();
//   for (const item of catalog) {
//     const line = document.createElement("li");
//     line.textContent = item.name;
//     namesList.append(line);
//   }
// }

// const showButton = document.querySelector("#show-names");
// if (showButton) {
//     showButton.addEventListener("click", renderNames);
// }

// const form = document.querySelector("form");
// if (form) {
//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//         status.textContent = "Форма отправлена";
//     });
// }