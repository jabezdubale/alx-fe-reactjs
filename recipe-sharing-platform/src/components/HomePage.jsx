import { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(data);
  }, []);
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 m-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {datas.map((data) => (
          <li
            key={data.id}
            className="flex flex-col justify-between bg-gray-100 hover:bg-gray-300 rounded-2xl p-8 shadow-lg"
          >
            <Link to={`/recipe/${data.id}`}>
              <h2 className="text-2xl mt-3">{data.title}</h2>
              <p className="text-base">{data.summary}</p>
              <img
                src={data.image}
                alt="food image"
                className="rounded-2xl w-2/5 mx-auto"
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
