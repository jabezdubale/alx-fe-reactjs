import AddRecipeForm from "./components/AddRecipeForm";
import { Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <>
      {/* <Router></Router> */}
      <Routes>
        <Route path="/" element={<AddRecipeForm />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/recipe/edit/:recipeId" element={<EditRecipeForm />} />
      </Routes>
    </>
  );
}

export default App;
