import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [loggedUser, setLoggedUser] = useState();
  const [currentPath, setCurrentPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setLoggedUser(user);
  }, [user]);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white shadow py-4 px-6 text-lg ">
      <nav className="flex justify-between items-center my-container">
        <div className="flex items-center">
          <Link to="/" className={` text-3xl lg:text-4xl font-bold text-gray-800 ${currentPath === "/" ? "text-rose-600" : ""} text-slate-900 font-Satisfy`}>
            Mr<span className="text-rose-600">C</span>hef
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          <Link to="/" className={`text-gray-800 hover:text-rose-600 transition-colors duration-200 ${currentPath === "/" ? "text-rose-600" : ""}`}>
            Home
          </Link>
          <Link to="/blog" className={`text-gray-800 hover:text-rose-600 transition-colors duration-200 ${currentPath === "/blog" ? "text-rose-600" : ""}`}>
            Blog
          </Link>

          {loggedUser ? (
            <div className="relative flex gap-3">
              <button className="flex items-center text-gray-800 hover:text-rose-600 transition-colors duration-200 focus:outline-none">
                <span className="sr-only">User menu</span>
                {loggedUser && <img src={loggedUser.photoURL} alt="Profile" className="h-8 w-8  border-2 border-rose-400 rounded-full" title={loggedUser.displayName} />}
              </button>
              <button onClick={() => logOut()} className=" text-white px-2 hover:bg-rose-700 transition-colors px-3 py-1  bg-rose-600  duration-200 text-center">
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/login" className=" text-white px-3 py-1 hover:bg-rose-700 transition-colors bg-rose-600  duration-200 text-center">
              Login
            </Link>
          )}
        </div>
        <div className="sm:hidden">{isMenuOpen ? <FiX className="text-rose-600 text-2xl cursor-pointer" onClick={handleMenuClose} /> : <FiMenu className="text-rose-600 text-2xl cursor-pointer" onClick={handleMenuOpen} />}</div>
      </nav>
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden bg-white py-4 px-6 absolute lg:relative z-50 top-[68px] right-0 w-36 shadow-md`}>
        <ul className="flex flex-col gap-4">
          <li>
            <Link to="/" className="text-gray-800 hover:text-rose-600 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-gray-800 hover:text-rose-600 transition-colors duration-200">
              Blog
            </Link>
          </li>
          {loggedUser ? (
            <div className="relative">
              <button className="flex items-center  text-gray-800 hover:text-rose-600 transition-colors duration-200 focus:outline-none border-2 border-rose-400 rounded-full">{loggedUser && <img src={loggedUser.photoURL} title={loggedUser.displayName} alt="Profile" className="h-8 w-8 rounded-full" />}</button>
              {loggedUser && (
                <button onClick={() => logOut()} className=" text-white px-2 hover:bg-rose-700 transition-colors mt-3 bg-rose-600  duration-200">
                  Log Out
                </button>
              )}
            </div>
          ) : (
            <Link to="/login" className=" text-white px-2 text-center hover:bg-rose-700 transition-colors mt-3 bg-rose-600  duration-200 ">
              Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
