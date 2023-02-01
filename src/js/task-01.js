const categoriesList = document.querySelector("#categories");
const categoriesListItems = categoriesList.querySelectorAll('.item');
console.log('Number of categories:', categoriesListItems.length);

for (let categoriesListItem of categoriesListItems) {
    console.log('Category:', categoriesListItem.firstElementChild.textContent);
    console.log('Elements:', categoriesListItem.lastElementChild.children.length);
}



