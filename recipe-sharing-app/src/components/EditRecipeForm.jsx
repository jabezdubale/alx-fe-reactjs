import { useNavigate, useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useEffect, useState } from "react";
import DeleteRecipeButton from "./DeleteRecipeButton";

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const handleEdit = (e) => {
    e.preventDefault();
    updateRecipe(title, description, Number(recipeId));
    navigate("/");
  };
  return (
    <form>
      <h1>Edit Recipe</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleEdit}>Edit</button>
      <DeleteRecipeButton id={Number(recipeId)} />
    </form>
  );
};

export default EditRecipeForm;
