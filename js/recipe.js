export function displayRecipes(recipes) {

    const recipeContainer = document.getElementById("recipeContainer");
    const recipeCount = document.getElementById("recipeCount");

    recipeContainer.innerHTML = "";

    if (!recipes || recipes.length === 0) {

        recipeCount.textContent = "0 recipes found";

        recipeContainer.innerHTML = `
            <div class="empty-state">
                <h2>🍽️</h2>
                <h3>No Recipes Found</h3>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }

    recipeCount.textContent = `Showing ${recipes.length} recipe(s)`;

    recipes.forEach(recipe => {

        recipeContainer.innerHTML += `

        <article class="recipe-card">

            <img
                src="${recipe.strMealThumb}"
                alt="${recipe.strMeal}"
            >

            <div class="recipe-content">

                <span class="recipe-category">

                    ${recipe.strCategory}

                </span>

                <h3>${recipe.strMeal}</h3>

                <div class="recipe-actions">

                    <button
                        class="favorite-btn"
                        data-id="${recipe.idMeal}"
                    >
                        ❤️
                    </button>

                    <button
                        class="recipe-btn"
                        onclick="window.location.href='recipe.html?id=${recipe.idMeal}'"
                    >
                        View Recipe →
                    </button>

                </div>

            </div>

        </article>

        `;

    });

}