import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean); //filters out the recipe with the same id from all the recipes and cleans out any undefined returns that might be returned by the find()

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                removeFavorite(recipe.id);
              }}
            >
              Remove Favorite
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
