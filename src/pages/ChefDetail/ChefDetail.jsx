import { useLoaderData } from "react-router-dom";
import ChefRecipes from "./ChefRecipes";
import LazyLoad from "react-lazy-load";

const ChefDetail = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="my-container">
        <div className="px-3 lg:px-0 lg:grid grid-cols-2 my-10 gap-4">
          <LazyLoad
            threshold={0.95}
            onContentVisible={() => {
              console.log("loaded!");
            }}>
            <img src={data.chef_picture} className="h-[350px] lg:h-[450px] w-full object-cover object-top" alt="" />
          </LazyLoad>
          <div className="bg-white rounded-md pt-4 ps-3 lg:ps-0 lg:pt-0  lg:p-4">
            <h4 className="text-2xl font-bold mb-2 text-gray-900 ">Chef Name: {data.chef_name}</h4>
            <p className="mb-2 font-Lora text-lg text-gray-600 ">
              <span className="border-b-4 border-rose-600">Bio</span>: {data.chef_bio}
            </p>
            <p className="mb-2">Likes: {data.likes}</p>
            <p className="mb-2">Number of Recipes: {data.num_of_recipes}</p>
            <p className="mb-2">Experience: {data.years_of_experience}</p>
          </div>
        </div>
      </div>
      <ChefRecipes id={data.id} />
    </div>
  );
};

export default ChefDetail;
