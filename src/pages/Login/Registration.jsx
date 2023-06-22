import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { CiWarning } from "react-icons/ci";
import { Link } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [authError, setAuthError] = useState("");

  const { setUser, signUp, updateUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setEmailError("Email is required");
      return;
    } else if (password.trim() === "") {
      passwordError("password is required");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    signUp(email, password)
      .then((result) => {
        setEmailError("");
        setPasswordError("");
        setAuthError("");
        const loggedUser = result.user;
        setUser(loggedUser);
        updateUser(name, photoURL);
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto min-h-[calc(100vh-143px)] lg:pt-10">
      {authError && (
        <p className="text-red-600 flex gap-2 items-center pb-3 px-8">
          {" "}
          <CiWarning className="text-xl"></CiWarning> {authError}
        </p>
      )}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Name
          </label>
          <input className="shadow focus:border-rose-500  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="name" type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow focus:border-rose-500  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && (
            <p className="text-red-600 flex gap-2 items-center py-2">
              {" "}
              <CiWarning className="text-xl"></CiWarning> {emailError}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow  border focus:border-rose-500 rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none " id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && (
            <p className="text-red-600 flex gap-2 items-center py-2">
              {" "}
              <CiWarning className="text-xl"></CiWarning> {passwordError}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="photoURL">
            Photo URL
          </label>
          <input className="shadow focus:border-rose-500  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="photoURL" type="text" placeholder="Photo URL" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none " type="submit">
            Sign Up
          </button>
          <span>
            Have a account{" "}
            <Link className="inline-block align-baseline font-bold text-sm text-rose-500 hover:text-rose-800" to="/login">
              Login here
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Registration;
