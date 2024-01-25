const addButton = document.getElementById("addButton");
const ul = document.getElementById("list");
const allRecipes = [];
let recipeID = 0;
let currentElement = 0;

const initialPage = document.getElementById("add-recipe");
const recipePage = document.getElementById("recipe");

addButton.addEventListener("click", function(){
const newRecipeObj = 
    {
        recipeID: recipeID, 
        title: "Untitled", 
        ingredients: "",
        instructions: "",
    }
    recipeID++;

    const newRecipe = document.createElement("li");
    allRecipes.push(newRecipeObj);

    newRecipe.innerHTML = `<button id=${newRecipeObj.recipeID}>${newRecipeObj.title}</button>`;
    ul.prepend(newRecipe);

    const button = newRecipe.querySelector('button');
    button.addEventListener('click', function() {
        const clickedRecipeID = parseInt(button.getAttribute('id'), 10);

        initialPage.style.display = "none";
        recipePage.innerHTML = `<h2>Title</h2>
        <input id="input-title">
        <button id="deleteButton">Delete</button>

        <h2>Ingredients</h2>
        <textarea id="input-ingredients"></textarea>
    
        <h2>Instructions</h2>
        <textarea id="input-instructions"></textarea>`;

        recipePage.style.display = "block";

        
        let title = document.getElementById("input-title");
        title.value = allRecipes[clickedRecipeID].title;
        
        let ingredients = document.getElementById("input-ingredients");
        ingredients.value = allRecipes[clickedRecipeID].ingredients;
        
        let instructions = document.getElementById("input-instructions");
        instructions.value = allRecipes[clickedRecipeID].instructions;
        
        const deleteButton = document.getElementById("deleteButton");
        
        title.addEventListener("input", function(){
            allRecipes[clickedRecipeID].title = title.value 
            button.innerText = title.value
        });
        
        ingredients.addEventListener("input", function(){
            allRecipes[clickedRecipeID].ingredients = ingredients.value 
        });
        
        instructions.addEventListener("input", function(){
            allRecipes[clickedRecipeID].instructions = instructions.value 
        });

        deleteButton.addEventListener("click", function(){
            ul.removeChild(newRecipe);
            allRecipes.splice(clickedRecipeID, 1);
            recipePage.innerHTML = "";
        });
    });
});