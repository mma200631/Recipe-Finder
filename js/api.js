import { API_BASE_URL } from "./constants.js";

// Search recipes
export async function searchRecipes(query) {

    try {

        const response = await fetch(
            `${API_BASE_URL}search.php?s=${query}`
        );

        if (!response.ok) {

            throw new Error("Unable to fetch recipes.");

        }

        const data = await response.json();

        return data.meals || [];

    }

    catch(error){

        console.error(error);

        return [];

    }

}

// Get recipe by ID
export async function getRecipeById(id){

    try{

        const response = await fetch(
            `${API_BASE_URL}lookup.php?i=${id}`
        );

        if(!response.ok){

            throw new Error("Unable to fetch recipe.");

        }

        const data = await response.json();

        return data.meals[0];

    }

    catch(error){

        console.error(error);

        return null;

    }

}