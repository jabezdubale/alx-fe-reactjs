import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const handleDelete = (event) => {
    event.preventDefault();
    deleteRecipe(id);
    navigate("/");
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
