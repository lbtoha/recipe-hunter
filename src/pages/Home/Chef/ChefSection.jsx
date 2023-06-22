import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import Loader from "../../../component/Loader";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);

  if (!chefs) {
    return <Loader></Loader>;
  }

  useEffect(() => {
    fetch("https://assignment-10-server-lbtoha.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Meet Our Chefs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chefs.map((chef) => {
            return <ChefCard chef={chef} key={chef.id + 454} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
