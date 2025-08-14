import { useState, useEffect } from "react";
import data from "../data.json";

const HomePage = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(data);
  }, []);
  return (
    <>
      <ul className="grid grid-cols-2 gap-4 m-4 sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        {datas.map((data) => (
          <li
            key={data.id}
            className="flex flex-col justify-between bg-gray-100 hover:bg-gray-300 rounded-2xl p-8 col-span-2 md:col-span-3 lg:col-span-4 shadow-lg"
          >
            <h2 className="text-2xl mt-3">{data.title}</h2>
            <p className="text-base">{data.summary}</p>
            <img
              src={data.image}
              alt="food image"
              className="rounded-2xl w-2/5 mx-auto"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
