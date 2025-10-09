import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(data));
    alert("Signup successful! Please login now.");
    navigate("/login");
  };

  return (
    <div className="flex flex-col  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25%]">
      <h1 className="text-2xl  text-white tracking-[1px] font-bold bg-gray-600 p-4 rounded-t-md">
        Signup Routes
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-b-md p-2 w-[100%] border border-gray-300 flex flex-col "
      >
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label className="font-medium tracking-wider" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="border border-gray-200 rounded-md p-2 outline-none"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2 relative">
          <label className="font-medium tracking-wider" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="border border-gray-200 p-2 rounded-md outline-none pr-10"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be 8+ chars, include uppercase, lowercase, number & special char",
              },
            })}
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
          className="p-2 mt-2  border border-gray-400 bg-gray-800 text-white font-bold tracking-[1px] rounded-md cursor-pointer hover:bg-gray-700"
        >
          Signup
        </button>

        <Link
          to="/login"
          className="text-center p-2 tracking-[1px] text-green-700 cursor-pointer hover:text-green-600"
        >
          Login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
