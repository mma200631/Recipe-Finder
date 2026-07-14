export function displayInstructions(steps, index = 0) {

    if (index >= steps.length) {

        return "";

    }

    return `
        <p>${steps[index]}</p>
        ${displayInstructions(steps, index + 1)}
    `;

}