const AddRecipeForm = () => {
  return (
    <form className="flex flex-col justify-start items-start w-2/5 mx-auto my-5 py-5 shadow-2xl bg-gray-100 gap-2 p-2 rounded-2xl">
      <h1 className="text-2xl w-full text-center pb-5">Add new Recipe</h1>
      <input
        type="text"
        placeholder="Recipe Name"
        required
        className="w-full rounded-lg px-4 py-2"
      />
      <textarea
        placeholder="Include ingredients"
        required
        className="w-full rounded-lg px-4 py-2"
      ></textarea>
      <textarea
        placeholder="Recipe Detail"
        required
        className="w-full rounded-lg px-4 py-2"
      ></textarea>
      <input type="file" required />
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
