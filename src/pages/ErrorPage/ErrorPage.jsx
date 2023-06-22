import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=740&t=st=1683205631~exp=1683206231~hmac=015b291baf5ae58169cae8ea60f632b8a58e20653f2b06b2896ce935cdf6db4d" alt="" />
      <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 " onClick={handleClick}>
        Go back
      </button>
    </div>
  );
};

export default ErrorPage;
