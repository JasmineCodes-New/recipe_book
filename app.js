// app.js
document.addEventListener('DOMContentLoaded', function () {
    const viewRecipeButtons = document.querySelectorAll('.card-action a');

    viewRecipeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default behavior of the link
            const recipeURL = button.getAttribute('href');
            // Navigate to the recipe details page
            window.location.href = recipeURL;
        });
    });
});
