import React, { useState } from "react";
import api from "../config/axios.jsx";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await api.post("/auth/register", registerData);
      toast.success(res.data.message);
      setSuccess(res.data.message);

      setRegisterData({ fullName: "", email: "", password: "" });
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.statusText ||
        "Something went wrong";
      setError(msg);
      toast.error(`Error: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f5f5f7] text-[#1d1d1f] h-[89vh] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-8 border border-gray-200">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-center tracking-tight">
          Create Account
        </h1>
        <p className="text-[#6e6e73] text-center mt-2">
          Register to start shopping
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-[#6e6e73] mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#f5f5f7] border border-gray-300 text-[#1d1d1f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007aff]"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#6e6e73] mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#f5f5f7] border border-gray-300 text-[#1d1d1f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007aff]"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#6e6e73] mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#f5f5f7] border border-gray-300 text-[#1d1d1f] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007aff]"
            />
          </div>

          {/* Error & Success Messages */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && (
            <p className="text-green-600 text-sm text-center">{success}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#007aff] hover:bg-[#0062cc] disabled:opacity-50 text-white font-medium py-3 rounded-lg shadow-sm transition-colors duration-300"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-[#6e6e73] text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#007aff] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
