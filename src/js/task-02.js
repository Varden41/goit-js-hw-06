const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("ul#ingredients");

const vegetables = ingredients.map((vegetable) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = vegetable;
  return ingredient;
});

ingredientsList.append(...vegetables);
