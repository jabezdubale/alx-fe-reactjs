import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = useRecipeStore((state) =>
    searchTerm ? state.filteredRecipes : state.recipes
  );
  return (
    <div>
      <SearchBar />
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {console.log(recipe)}
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>

          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
