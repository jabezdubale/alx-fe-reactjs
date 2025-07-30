import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";

const RecipeList = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const recipes = useRecipeStore((state) =>
    searchTerm ? state.filteredRecipes : state.recipes
  );
  return (
    <div>
      <SearchBar />
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>

          <p>{recipe.description}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              addFavorite(recipe.id);
            }}
          >
            Add to favorites
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
