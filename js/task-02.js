const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  // const list = document.querySelector('ul#ingredients');
  
  // const ingredientEl = document.createElement('li');
  // ingredientEl.classList.add('item');
  // ingredientEl.textContent = ingredients;
  // list.append(ingredientEl);
 

const ingredientsList = document.querySelector('ul#ingredients');

let fragment = new DocumentFragment();

for (const value of ingredients) {
  const ingredientsListItem = document.createElement('li');
 ingredientsListItem.classList.add('item');
 ingredientsListItem.textContent += value;
 fragment.appendChild(ingredientsListItem);
}

document.querySelector('ul#ingredients').append(fragment);
