import { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser, signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // redirect the previous page
  const from = location.state?.from?.pathname || "/";

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then((result) => {
        setError("");
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        setError("");
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubLogin = () => {
    signInWithGitHub()
      .then((result) => {
        setError("");
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto min-h-[calc(100vh-143px)] pt-10">
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {error && (
          <p className="text-red-600 flex gap-2 items-center pb-3">
            {" "}
            <CiWarning className="text-xl"></CiWarning> {error}
          </p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow focus:border-rose-500  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow  border focus:border-rose-500 rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none " id="password" type="password" placeholder="******************" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded focus:outline-none " type="submit">
            Sign In
          </button>
          <div className="flex items-center">
            <button className="mr-4 hover:text-rose-600 p-2 rounded bg-rose-200" onClick={handleGoogleLogin}>
              <FaGoogle size={24} />
            </button>
            <button className="hover:text-rose-600 p-2 rounded bg-rose-200" onClick={handleGithubLogin}>
              <FaGithub size={24} />
            </button>
          </div>
        </div>
      </form>
      <div className="text-center">
        <p>
          Don't have an account?{" "}
          <Link className="inline-block align-baseline font-bold text-sm text-rose-500 hover:text-rose-800" to="/registration">
            Register here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
