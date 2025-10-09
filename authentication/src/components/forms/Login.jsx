import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No user found. Please signup first.");
      return;
    }

    if (
      savedUser.email === data.email &&
      savedUser.password === data.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/profile");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex flex-col  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%]">
      <h1 className="text-2xl  text-white tracking-[1px] font-bold bg-gray-600 p-4 rounded-t-md">
        Login Routes
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-b-md p-2 w-[100%] border border-gray-300 flex flex-col gap-2 "
      >
        <div className="flex flex-col gap-2">
          <label className="font-medium tracking-wider" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="border border-gray-200 rounded-md p-2 outline-none"
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 relative">
          <label className="font-medium tracking-wider" htmlFor="password">
            Password
          </label>

          <input
            id="password"
            className="border border-gray-200 p-2 rounded-md outline-none"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {/*  Toggle */}
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-10 cursor-pointer text-gray-500 hover:text-gray-700 select-none"
          >
            {showPassword ? "Hide" : "Show"}
          </span>

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="p-2  border border-gray-400 bg-gray-800 text-white font-bold tracking-[1px] rounded-md cursor-pointer hover:bg-gray-700"
        >
          Login
        </button>

        <Link
          to="/signup"
          className="text-center tracking-[1px] text-green-700 cursor-pointer hover:text-green-600"
        >
          Signup
        </Link>
      </form>
    </div>
  );
};

export default Login;
