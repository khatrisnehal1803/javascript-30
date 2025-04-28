const reciperFrom = document.getElementById('reciperFrom')
const recipetitle = document.getElementById('recipetitle')
const recipeIngredients = document.getElementById('recipeIngredients')
const recipeInsturctions = document.getElementById('recipeInsturctions')
const recipelist = document.getElementById('recipelist')
const recipeselect = document.getElementById(' recipeselect')

let recipe = [];

reciperFrom.addEventListener('submit',(e)=>{
    e.preventDefault();

    const newRecipe =
    {
        title: recipetitle.Value.trim(),
        Ingredients: recipeIngredients.Value.trim(),
        Insturctions: recipeInsturctions.Value.trim()
    };

    recipe.push(newRecipe);
    displayrecipes();
    reciperFrom.requestFullscreen();

    filterselect.addEventListener('change',()=>{
        displayrecipes();
    });
});

function displayrecipes ()
{
    recipelist.innerHTML='';

    const filter = filterselect.Value;
    const filterredrecipes = recipe.filter(recipe =>{
    });
}