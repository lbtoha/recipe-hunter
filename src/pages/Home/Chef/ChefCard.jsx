import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  console.log(chef);
  return (
    <div className="bg-white shadow-lg overflow-hidden w-full  p-4">
      <div className="relative">
        <LazyLoad
          threshold={0.95}
          onContentVisible={() => {
            console.log("loaded!");
          }}>
          <img src={chef?.chef_picture} alt={chef?.chef_name} className="w-full h-72 object-cover object-top  " />
        </LazyLoad>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-rose-500 opacity-0 hover:opacity-90 transition-opacity duration-300 rounded-full px-3 py-2">
            <Link to={`/chef/${chef?.id}`} className="text-white font-medium">
              View Recipes
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{chef?.chef_name}</h3>
        <p className="text-gray-600">Years of Experience: {chef?.years_of_experience}</p>
        <p className="text-gray-600">Number of Recipes: {chef?.num_of_recipes}</p>
        <p className="text-gray-600 flex gap-3 items-center">
          Likes: {chef?.likes} <FaHeart className="text-rose-600"></FaHeart>{" "}
        </p>
      </div>
    </div>
  );
};

export default ChefCard;
