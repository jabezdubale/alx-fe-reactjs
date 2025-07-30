import AddRecipeForm from "./components/AddRecipeForm";
import { Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AddRecipeForm />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/recipe/edit/:recipeId" element={<EditRecipeForm />} />
      </Routes>
    </>
  );
}

export default App;
