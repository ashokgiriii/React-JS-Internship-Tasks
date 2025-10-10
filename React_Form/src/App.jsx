import { useState } from "react";
const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle validation
  const validate = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z]+$/; // only letters, single word

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!isNaN(formData.firstName[0])) {
      newErrors.firstName = "First name cannot start with a number";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    } else if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName =
        "First name must contain only letters and be a single word";
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!isNaN(formData.lastName[0])) {
      newErrors.lastName = "Last name cannot start with a number";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    } else if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName =
        "Last name must contain only letters and be a single word";
    }

    // Birthday Validation
    if (!formData.month || !formData.day || !formData.year)
      newErrors.birthday = "Please select full birth date";

    // Gender Validation
    if (!formData.gender) newErrors.gender = "Please select gender";

    // Phone Number Validation
    const phoneNumberRegex = /^[0-9]{10}$/; // ✅ no "!"
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneNumberRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits (numbers only)";
    }

    // Email Validation
    const emailRegex = /\S+@\S+\.\S+/; // basic pattern: text@text.text
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"; // empty field check
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @ symbol"; // specific "@" check
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address format"; // invalid format
    }

    // Password Validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/;

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be 8–100 characters and include uppercase, lowercase, number, and special character";
    }

    return newErrors;
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("✅ Submitted Data:", formData);

      // Success Hiding In Three Seconds

      // Clearing The Form Filed
      setFormData({
        firstName: "",
        lastName: "",
        month: "",
        day: "",
        year: "",
        gender: "",
        phone: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex flex-col w-[100%] md:w-[40%]  mt-[2rem] mx-auto">
      <h1 className="text-[3rem] text-[#0766ff] md:text-[4rem] leading-[3rem] mb-4 md:mb-8 text-center font-bold">
        facebook
      </h1>

      <div className="flex flex-col bg-white shadow items-center rounded-3xl">
        <div className="flex  items-center gap-4 justify-between w-full px-4">
          <h2 className="text-[1.5rem] font-bold mt-4">User Regestration</h2>
         
        </div>

        <form className="w-full flex flex-col p-4" onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="flex gap-4 w-full mb-2">
            <div className="w-[50%]">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border w-full border-[#00000030] rounded-sm p-3"
                type="text"
                placeholder="First name"
              />
              {errors.firstName && (
                <span className="error text-red-500 text-sm">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="w-[50%]">
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border w-full border-[#00000030] rounded-sm p-3"
                type="text"
                placeholder="Last name"
              />
              {errors.lastName && (
                <span className="error text-red-500 text-sm">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          {/* Birthday */}
          <label className="mb-1 font-medium">Birthday</label>
          <div className="birthday mb-2 flex justify-between gap-2 ">
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              className="border w-[33.33%] border-[#00000030] p-3 rounded-sm"
            >
              <option value="">Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>

            <select
              name="day"
              value={formData.day}
              onChange={handleChange}
              className="border w-[33.33%] border-[#00000030] p-3 rounded-sm"
            >
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="border w-[33.33%] border-[#00000030] p-3 rounded-sm"
            >
              <option value="">Year</option>
              {Array.from({ length: 121 }, (_, i) => 2025 - i).map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>
          {errors.birthday && (
            <span className=" text-red-500 text-sm mb-2">
              {errors.birthday}
            </span>
          )}

          {/* Gender */}
          <label className="mb-1 font-medium">Gender</label>
          <div className="flex justify-between items-center mb-2 gap-2">
            {["Male", "Female", "Other"].map((g) => (
              <label
                key={g}
                className="border w-[calc(100%/3)] rounded-sm p-3 flex items-center justify-between border-[#00000030]"
              >
                {g}
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                />
              </label>
            ))}
          </div>
          {errors.gender && (
            <span className="text-red-500 text-sm mb-2">{errors.gender}</span>
          )}

          {/* Phone */}
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border mb-2 p-3 border-[#00000030] rounded-sm"
            type="number"
            placeholder="Phone number"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm mb-2">{errors.phone}</span>
          )}

          {/* Email */}
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border mb-2 p-3 border-[#00000030] rounded-sm"
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mb-2">{errors.email}</span>
          )}

          {/* Password */}
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border mb-2 p-3 border-[#00000030] rounded-sm"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm mb-2">{errors.password}</span>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="border border-[#00000030] p-3 rounded-md bg-[#0766ff] text-white tracking-[2px] text-[1.5rem] font-bold hover:bg-[#045deb] transition duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
