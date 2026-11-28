const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");

function renderCatalog(items) {
    catalogList.replaceChildren();

    for (const item of items) {
        const card = document.createElement("article");
        card.className = "card";

        // Добавляем картинку в начало карточки (или в конец, если перенести блок после description)
        if (item.image) {
            const photo = document.createElement("img");
            photo.src = item.image;
            photo.alt = item.name;
            card.append(photo);
        }

        const title = document.createElement("h2");
        title.textContent = item.name;

        const specs = document.createElement("p");
        specs.textContent = item.specs;

        const description = document.createElement("p");
        description.textContent = item.description;

        card.append(title, specs, description);
        catalogList.append(card);
    }

    // Обновление статуса вынесено за пределы цикла
    if (items.length === 0) {
        statusText.textContent = "Ничего не найдено";
    } else {
        statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
    }
}

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
    const found = filterByText(catalog, searchInput.value);
    renderCatalog(found);
});

renderCatalog(catalog);
