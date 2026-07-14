import { getRecipeById } from "./api.js";

const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

console.log("Recipe ID:", recipeId);

const recipeContainer = document.getElementById("recipeDetails");

async function loadRecipe() {

    try {

        const recipe = await getRecipeById(recipeId);

        console.log("Recipe:", recipe);

        if (!recipe) {

            recipeContainer.innerHTML = "<h2>Recipe not found.</h2>";

            return;
        }

        recipeContainer.innerHTML = `

       <div class="recipe-hero">

    <img
        src="${recipe.strMealThumb}"
        alt="${recipe.strMeal}"
    >

</div>

<div class="recipe-info">

    <h1>${recipe.strMeal}</h1>

    <div class="recipe-meta">

        <span>🌍 ${recipe.strArea}</span>

        <span>🍽️ ${recipe.strCategory}</span>

    </div>

   <button
    class="favorite-btn"
    id="favoriteBtn"
>
    ❤️ Save to Favorites
</button>

    <h2>Instructions</h2>

    <div class="instructions">

        ${
            recipe.strInstructions
                .split(". ")
                .map(step => `<p>${step}.</p>`)
                .join("")
        }

    </div>

</div>

        `;
const favoriteBtn = document.getElementById("favoriteBtn");

favoriteBtn.addEventListener("click", () => {

    const favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    const exists =
        favorites.some(item => item.idMeal === recipe.idMeal);

    if (!exists) {

        favorites.push(recipe);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("Recipe added to Favorites ❤️");

    } else {

        alert("Recipe already in Favorites.");

    }

});

    }


     catch (error) {

        console.error(error);

        recipeContainer.innerHTML =
            "<h2>Error loading recipe.</h2>";

    }

}


loadRecipe();