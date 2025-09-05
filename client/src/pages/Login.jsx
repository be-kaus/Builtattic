// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast"; 
// import axios from "../config/axios.jsx";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );

//       toast.success(res.data.message || "Login successful 🎉");
//       console.log("User Data:", res.data.data);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Something went wrong ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-black text-neutral-300 h-[89vh] flex items-center justify-center px-4">
//       <div className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-md p-8 border border-neutral-800">
//         {/* Header */}
//         <h1 className="text-3xl font-extrabold text-white text-center">
//           Welcome Back
//         </h1>
//         <p className="text-neutral-400 text-center mt-2">
//           Sign in to continue shopping
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-8 space-y-6">
//           {/* Email */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-neutral-400 mb-1"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               required
//               className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-neutral-400 mb-1"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               required
//               className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
//             />
//           </div>

//           {/* Forgot password */}
//           <div className="flex items-center justify-between text-sm">
//             <Link
//               to="/forgot-password"
//               className="text-white hover:text-neutral-300 transition-colors"
//             >
//               Forgot password?
//             </Link>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-white hover:bg-neutral-200 disabled:opacity-50 text-black font-semibold py-3 rounded-lg shadow-lg transition-colors duration-300"
//           >
//             {loading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="my-6 flex items-center">
//           <div className="flex-grow border-t border-neutral-700"></div>
//           <span className="px-3 text-neutral-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-neutral-700"></div>
//         </div>

//         {/* Social Login */}
//         <button className="w-full flex items-center justify-center bg-black hover:bg-neutral-800 text-white font-medium py-3 rounded-lg shadow-md transition-colors duration-300 border border-neutral-700">
//           <svg
//             className="w-5 h-5 mr-2"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 48 48"
//           >
//             <path
//               fill="#FFC107"
//               d="M43.6 20.5H42V20H24v8h11.3C34.6 32.7 29.9 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.1 0 20-8.9 20-20 0-1.3-.1-2.7-.4-3.9z"
//             />
//             <path
//               fill="#FF3D00"
//               d="M6.3 14.7l6.6 4.8C14.6 16.2 18.9 14 24 14c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.5 29.3 4 24 4c-7.9 0-14.7 4.6-17.7 11.3z"
//             />
//             <path
//               fill="#4CAF50"
//               d="M24 44c5.8 0 10.7-1.9 14.2-5.1l-6.6-5.5C29.9 36 27 37 24 37c-5.9 0-10.6-3.3-12.7-8h-7l-7 5.4C9.3 39.4 16.1 44 24 44z"
//             />
//             <path
//               fill="#1976D2"
//               d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.3-4.6 6-9.3 6-5.1 0-9.4-3.2-10.9-7.7h-7l-7 5.4C9.3 39.4 16.1 44 24 44c11.1 0 20-8.9 20-20 0-1.3-.1-2.7-.4-3.9z"
//             />
//           </svg>
//           Continue with Google
//         </button>

//         {/* Signup link */}
//         <p className="text-center text-neutral-400 text-sm mt-6">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-white hover:text-neutral-300">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"; 
import axios from "../config/axios.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "/auth/login",
        { email, password },
        { withCredentials: true }
      );

      toast.success(res.data.message || "Login successful 🎉");
      console.log("User Data:", res.data.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-[#1D1D1F] h-[89vh] flex items-center justify-center px-4">
      <div className="bg-[#F5F5F7] rounded-2xl shadow-xl w-full max-w-md p-8 border border-gray-200">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-[#1D1D1F] text-center">
          Welcome Back
        </h1>
        <p className="text-[#6E6E73] text-center mt-2">
          Sign in to continue shopping
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#6E6E73] mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#1D1D1F] placeholder-[#A1A1A6] focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#6E6E73] mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#1D1D1F] placeholder-[#A1A1A6] focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
            />
          </div>

          {/* Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <Link
              to="/forgot-password"
              className="text-[#0071E3] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0071E3] hover:bg-[#005BB5] disabled:opacity-50 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-[#6E6E73] text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login */}
        <button className="w-full flex items-center justify-center bg-white hover:bg-gray-100 text-[#1D1D1F] font-medium py-3 rounded-lg shadow-sm transition-colors duration-300 border border-gray-300">
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C34.6 32.7 29.9 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.1 0 20-8.9 20-20 0-1.3-.1-2.7-.4-3.9z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.6 16.2 18.9 14 24 14c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.5 29.3 4 24 4c-7.9 0-14.7 4.6-17.7 11.3z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.8 0 10.7-1.9 14.2-5.1l-6.6-5.5C29.9 36 27 37 24 37c-5.9 0-10.6-3.3-12.7-8h-7l-7 5.4C9.3 39.4 16.1 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.3-4.6 6-9.3 6-5.1 0-9.4-3.2-10.9-7.7h-7l-7 5.4C9.3 39.4 16.1 44 24 44c11.1 0 20-8.9 20-20 0-1.3-.1-2.7-.4-3.9z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Signup link */}
        <p className="text-center text-[#6E6E73] text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#0071E3] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
