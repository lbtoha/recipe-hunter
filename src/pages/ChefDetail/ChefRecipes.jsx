import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Loader from "../../component/Loader";

const ChefRecipes = ({ id }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-10-server-lbtoha.vercel.app/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="my-container">
      <h1 className="text-3xl lg:text-4xl text-center mt-10 font-bold">Recipes</h1>
      <div className="bg-rose-600 w-14 h-1 mb-10 mx-auto mt-1"></div>
      <div className="px-3  lg:px-0 flex flex-col items-center lg:items-start lg:grid grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Recipe key={`${recipe._id}+"1254"`} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
