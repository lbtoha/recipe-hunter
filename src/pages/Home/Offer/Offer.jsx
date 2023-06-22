import { TbTruckDelivery } from "react-icons/tb";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import LazyLoad from "react-lazy-load";
const backgroundImage = "https://assignment-10-server-lbtoha.vercel.app/image1";

const Offer = () => {
  return (
    <div className="my-container ">
      <div className="flex flex-col-reverse px-3 lg:px-0 lg:grid grid-cols-7 mb-4 lg:mb-0">
        <div className="col-span-4">
          <h2 className=" text-2xl lg:text-3xl font-bold mt-8 lg:mt-14 text-rose-600 font-Satisfy mb-6 border-b-2  border-yellow-200 w-fit">What We Offer</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-6">We Offer Best</h3>
          <h3 className="text-4xl lg:text-5xl font-bold ">Dish In The Town</h3>
          <p className="text-gray-500 lg:me-4 mt-4 font-Lora text-md lg:text-lg">In our restaurant with people who are important to you, conversations that bring you closer to each other and those who enjoy our dishes. Traditional dishes with local products of highest quality. including succulent Veal Chops Sicilian, spicy Lobster Fra Diazole, tender Chicken Contadina.</p>
          <div className="lg:flex ">
            <div>
              <div className="flex gap-3 items-center mt-4 ">
                <span className="p-2 bg-rose-500 rounded">
                  <TbTruckDelivery className="text-2xl text-white  " />
                </span>
                <span className="text-lg text-gray-700">Fast Delivery In Just 1 Hour</span>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <span className="p-2 bg-rose-500 rounded">
                  <FaMapMarkerAlt className="text-2xl text-white  " />
                </span>
                <span className="text-lg text-gray-700">Wide Coverage Map</span>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <span className="p-2 bg-rose-500 rounded">
                  <BiDish className="text-2xl text-white  " />
                </span>
                <span className="text-lg text-gray-700">More Than 150 Couriers</span>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <span className="p-2 bg-rose-500 rounded">
                  <FaMobileAlt className="text-2xl text-white  " />
                </span>
                <span className="text-lg text-gray-700">Amazing Mobile App</span>
              </div>
            </div>
            <div className="flex items-center ml-4 hidden lg:block">
              <LazyLoad
                threshold={0.95}
                onContentVisible={() => {
                  console.log("loaded!");
                }}>
                <img className="w-60 h-40" src={backgroundImage} alt="" />
              </LazyLoad>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <LazyLoad
            threshold={0.95}
            onContentVisible={() => {
              console.log("loaded!");
            }}>
            <img src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default Offer;
