import { useParams } from "react-router-dom";
import datas from "../data.json";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  useEffect(() => {
    setData(datas.find((item) => item.id === Number(id)));
  }, [id]);

  useEffect(() => {
    setIngredients(data.summary);
    setInstructions(data.Detail);
  }, [data]);

  return (
    <div className="w-3/5 bg-gray-100 mx-auto p-5 my-5 rounded-3xl shadow-2xl">
      <h2 className="text-4xl mt-3 mx-auto">{data.title}</h2>
      <p className="text-2xl font-light">{ingredients}</p>
      <p className="text-base text-justify mx-3 p-3">{instructions}</p>
      <img
        src={data.image}
        alt="food image"
        className="rounded-2xl w-2/5 mx-auto my-3"
      />
    </div>
  );
};

export default RecipeDetail;
