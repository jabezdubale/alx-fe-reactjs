import { useState } from "react";

const AddRecipeForm = () => {
  const [recName, setRecName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validate = [];
    recName ? console.log(recName) : validate.push("Receipe Name not found");
    ingredients
      ? console.log(ingredients)
      : validate.push("ingredients not found");
    steps ? console.log(steps) : validate.push("Steps not found");
    image ? console.log(image) : validate.push("Image not found");

    if (validate.length) {
      setErrors(validate);
      validate.map((vals) => alert(vals));
      return;
    }

    setRecName("");
    setIngredients("");
    setSteps("");
    setImage(null);
    console.log(errors);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start items-start w-2/5 sm:w-3/5 md:w-4/5 font-roboto mx-auto my-5 py-5 shadow-2xl bg-gray-100 gap-2 p-2 rounded-2xl"
    >
      <h1 className="text-2xl w-full text-center pb-5">Add new Recipe</h1>
      <input
        type="text"
        placeholder="Recipe Name"
        value={recName}
        onChange={(e) => setRecName(e.target.value)}
        className="w-full rounded-lg px-4 py-2"
      />
      <textarea
        placeholder="Include ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full rounded-lg px-4 py-2"
      ></textarea>
      <textarea
        placeholder="Recipe steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full rounded-lg px-4 py-2"
      ></textarea>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button
        type="submit"
        className="mx-auto w-48 bg-blue-500 rounded-lg px-4 py-2"
      >
        Submit
      </button>
    </form>
  );
};

export default AddRecipeForm;

// title
// summary
// Detail
// file image
