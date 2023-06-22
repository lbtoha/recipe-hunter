import { useState } from "react";
import { DynamicStar } from "react-dynamic-star";
import LazyLoad from "react-lazy-load";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe }) => {
  const { recipe_name, recipe_image, ingredients, cooking_method, rating } = recipe;
  const [star, setStar] = useState({
    rating: rating,
    totalStars: 5,
    sharpness: 2.5,
    width: 25,
    height: 30,
    outlined: true,
    outlinedColor: "",
    fullStarColor: "#E11D48",
    emptyStarColor: "transparent",
  });

  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = () => {
    toast("The recipe is your favorite");
    setIsFavorite(true);
  };

  return (
    <div className="max-w-sm overflow-hidden shadow-lg">
      <LazyLoad
        threshold={0.95}
        onContentVisible={() => {
          console.log("loaded!");
        }}>
        <img className="w-full object-cover object-center max-h-80" src={recipe_image} alt="" />
      </LazyLoad>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{recipe_name}</div>
        {ingredients.map((ingredient) => (
          <p key={ingredients[0]}>{ingredient}</p>
        ))}
        <p className="text-gray-700 font-Lora text-lg mb-3">{cooking_method}</p>
        <DynamicStar rating={parseFloat(star.rating)} width={parseFloat(star.width)} height={parseFloat(star.height)} outlined={star.outlinedColor ? star.outlinedColor : star.outlined} totalStars={star.totalStars} sharpnessStar={star.sharpness} fullStarColor={star.fullStarColor} emptyStarColor={star.emptyStarColor} />

        <button onClick={addFavorite} className={`my-4 px-4 py-2 w-full bg-rose-600 hover:bg-rose-700 text-white font-bold ${isFavorite ? " bg-rose-400 hover:bg-rose-400" : ""}`} disabled={isFavorite}>
          Favorite
        </button>
      </div>
    </div>
  );
};

export default Recipe;
