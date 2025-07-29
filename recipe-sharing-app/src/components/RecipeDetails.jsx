import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  console.log(recipe);
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button>Edit recipe</button>
      <button>Delete recipe</button>
    </div>
  );
};

export default RecipeDetails;
