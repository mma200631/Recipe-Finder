const container =
    document.getElementById("favoritesContainer");

const favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

if (favorites.length === 0) {

    container.innerHTML = `

        <div class="empty-state">

            <h2>❤️</h2>

            <h3>No Favorites Yet</h3>

            <p>

                Save recipes from the Explore page.

            </p>

        </div>

    `;

}

else {

    favorites.forEach(recipe => {

        container.innerHTML += `

        <article class="recipe-card">

            <img
                src="${recipe.strMealThumb}"
                alt="${recipe.strMeal}"
            >

            <div class="recipe-content">

                <h3>${recipe.strMeal}</h3>

                <button
                    class="remove-btn"
                    data-id="${recipe.idMeal}"
                >

                    Remove

                </button>

            </div>

        </article>

        `;

    });

}

document.addEventListener("click", event => {

    if (!event.target.classList.contains("remove-btn"))
        return;

    const id = event.target.dataset.id;

    const updatedFavorites = favorites.filter(recipe =>
        recipe.idMeal !== id
    );

    localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
    );

    location.reload();

});