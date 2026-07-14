import { searchRecipes } from "./api.js";
import { displayRecipes } from "./recipe.js";

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

async function loadRecipes(searchTerm) {

    const recipes = await searchRecipes(searchTerm);

    displayRecipes(recipes);
}

// Search button
if (searchButton) {

    searchButton.addEventListener("click", () => {

        const term = searchInput.value.trim();

        if (!term) return;

        loadRecipes(term);

    });

}

// Press Enter to search
if (searchInput) {

    searchInput.addEventListener("keydown", event => {

        if (event.key === "Enter") {

            const term = searchInput.value.trim();

            if (!term) return;

            loadRecipes(term);

        }

    });

}

// Load recipes when page opens
//loadRecipes("Chicken");

const quickSearchButtons =
    document.querySelectorAll(".quick-search");

quickSearchButtons.forEach(button => {

    button.addEventListener("click", () => {

        const searchText =
            button.textContent.replace(/[^\w\s]/g, "").trim();

        searchInput.value = searchText;

        loadRecipes(searchText);

    });

});