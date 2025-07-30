import AddRecipeForm from "./components/AddRecipeForm";
import { Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <>
      <Routes>
        {/* <Router></Router> */}
        <Route path="/" element={<AddRecipeForm />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/recipe/edit/:recipeId" element={<EditRecipeForm />} />
      </Routes>
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </>
  );
}

export default App;
