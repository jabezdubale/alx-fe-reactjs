import { useParams } from "react-router-dom";
import datas from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const data = datas.find((item) => item.id === Number(id));

  return (
    <div className="w-3/5 bg-gray-100 mx-auto p-5 my-5 rounded-3xl">
      <h2 className="text-4xl mt-3 mx-auto">{data.title}</h2>
      <p className="text-2xl font-light">{data.summary}</p>
      <p className="text-base text-justify mx-3 p-3">{data.Detail}</p>
      <img
        src={data.image}
        alt="food image"
        className="rounded-2xl w-2/5 mx-auto my-3"
      />
    </div>
  );
};

export default RecipeDetail;
