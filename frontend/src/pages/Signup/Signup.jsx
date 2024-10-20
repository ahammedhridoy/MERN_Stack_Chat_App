import { useState } from "react";
import axios from "./../../../node_modules/axios/lib/axios";
import toast, { Toaster } from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");

  const { setUser } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !username || !gender || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        fullName,
        email,
        password,
        username,
        gender,
        confirmPassword,
      });

      console.log(res);

      if (res?.status === 200) {
        toast.success("User created successfully");

        // Resetting form fields using setter functions
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setUsername("");
        setGender("");
      }
      console.log(res?.data);
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
      setUser(res?.data?.user);
      // setTimeout(() => {
      //   window.location.href = "/login";
      // }, 3000);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="min-h-screen hero ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card bg-base-100 lg:w-[30%] w-[80%] shadow-xl rounded">
        <div className="card-body">
          <h2 className="mb-5 text-4xl font-bold text-center">Sign Up!</h2>

          <form onSubmit={handleSubmit}>
            <label className="flex items-center gap-2 input input-bordered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                required
                placeholder="Full Name"
                autoComplete="on"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
            </label>
            <label className="flex items-center gap-2 my-4 input input-bordered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                required
                className="grow"
                placeholder="Email"
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>

            <label className="flex items-center gap-2 input input-bordered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                required
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </label>

            <label className="flex items-center gap-2 my-4 input input-bordered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>

            <label className="flex items-center gap-2 my-4 input input-bordered">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                required
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </label>

            <label htmlFor="gender" className="flex items-center gap-2 my-4">
              <select
                className="w-full select select-bordered"
                required
                id="gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value="" default>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>

            <button className="btn bg-[var(--blue-color)] w-full text-white" type="submit">
              Sign Up
            </button>
          </form>

          <p>
            Already have an account?{" "}
            <a className="text-[var(primary-color)] font-bold" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
