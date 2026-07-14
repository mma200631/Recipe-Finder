const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const saveButton = document.getElementById("savePlanner");

// Load saved meal plan
const savedMeals =
    JSON.parse(localStorage.getItem("mealPlanner")) || {};

days.forEach(day => {

    if (savedMeals[day]) {

        document.getElementById(`${day}-breakfast`).value =
            savedMeals[day].breakfast || "";

        document.getElementById(`${day}-lunch`).value =
            savedMeals[day].lunch || "";

        document.getElementById(`${day}-dinner`).value =
            savedMeals[day].dinner || "";

    }

});

saveButton.addEventListener("click", () => {

    const planner = {};

    days.forEach(day => {

        planner[day] = {

            breakfast: document.getElementById(`${day}-breakfast`).value,

            lunch: document.getElementById(`${day}-lunch`).value,

            dinner: document.getElementById(`${day}-dinner`).value

        };

    });

    localStorage.setItem(
        "mealPlanner",
        JSON.stringify(planner)
    );

    alert("Meal plan saved successfully! 🎉");

});