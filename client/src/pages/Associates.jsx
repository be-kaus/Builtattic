import React from "react";
import Footer from "/src/components/Footer.jsx";

const Associates = () => {
  return (
    <>
      <div className="bg-white text-[#1D1D1F] min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Hire Top Associates
            </h1>
            <p className="text-lg text-[#6E6E73] mt-3">
              Connect with the best architects and designers to build your dream
              space.
            </p>
          </div>

          {/* Professionals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {/* Block 1 */}
            <div className="bg-white rounded-xl shadow-lg border overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://imgs.search.brave.com/cRAfi7Z-cHDCrmV0GbvgNhfTjqmgd9Q7ifhSJ4KdtoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbXMu/aW50ZXJpb3Jjb21w/YW55LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOC9t/b2Rlcm4td29vZGVu/LWhvbWUtZGVzaWdu/LmpwZw"
                  alt="Cover"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="https://imgs.search.brave.com/Gir6JKSLYSYPi0wtcy_yLjrb4FX7ca2AuIQrB_Yf1L8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQwLzJh/L2Y1LzQwMmFmNWNk/MjQ3MWIxMjI5OGQ1/NDZjODJiMjAxOTg4/LmpwZw"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-white absolute bottom-2 right-2"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-32">
                <div>
                  <h2 className="text-lg font-semibold">John Doe</h2>
                  <p className="text-sm text-gray-600">Stanford University</p>
                  <p className="text-sm text-gray-500">
                    Graduate • Class of 2024
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    $200 / week
                  </p>
                </div>

                <div className="text-sm text-gray-500 text-right">
                  Los Angeles, USA
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-white rounded-xl shadow-lg border overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Cover"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="https://imgs.search.brave.com/Gir6JKSLYSYPi0wtcy_yLjrb4FX7ca2AuIQrB_Yf1L8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQwLzJh/L2Y1LzQwMmFmNWNk/MjQ3MWIxMjI5OGQ1/NDZjODJiMjAxOTg4/LmpwZw"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-white absolute bottom-2 right-2"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-32">
                <div>
                  <h2 className="text-lg font-semibold">Emily Carter</h2>
                  <p className="text-sm text-gray-600">Harvard University</p>
                  <p className="text-sm text-gray-500">Student • 3rd Year</p>
                  <p className="text-sm font-medium text-gray-800">
                    $180 / week
                  </p>
                </div>
                <div className="text-sm text-gray-500 text-right">
                  Dubai, UAE
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-white rounded-xl shadow-lg border overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Cover"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="https://via.placeholder.com/60"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-white absolute bottom-2 right-2"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-32">
                <div>
                  <h2 className="text-lg font-semibold">Rajesh Kumar</h2>
                  <p className="text-sm text-gray-600">IIT Delhi</p>
                  <p className="text-sm text-gray-500">
                    Graduate • Class of 2023
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    $150 / week
                  </p>
                </div>
                <div className="text-sm text-gray-500 text-right">
                  Kerala, India
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-white rounded-xl shadow-lg border overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Cover"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="https://via.placeholder.com/60"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-white absolute bottom-2 right-2"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-32">
                <div>
                  <h2 className="text-lg font-semibold">Sophia Martinez</h2>
                  <p className="text-sm text-gray-600">Oxford University</p>
                  <p className="text-sm text-gray-500">Student • 2nd Year</p>
                  <p className="text-sm font-medium text-gray-800">
                    $210 / week
                  </p>
                </div>
                <div className="text-sm text-gray-500 text-right">
                  New York, USA
                </div>
              </div>
            </div>

            {/* Block 5 */}
            <div className="bg-white rounded-xl shadow-lg border overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Cover"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="https://via.placeholder.com/60"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-white absolute bottom-2 right-2"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-32">
                <div>
                  <h2 className="text-lg font-semibold">Michael Lee</h2>
                  <p className="text-sm text-gray-600">MIT</p>
                  <p className="text-sm text-gray-500">
                    Graduate • Class of 2022
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    $230 / week
                  </p>
                </div>
                <div className="text-sm text-gray-500 text-right">
                  Kerala, India
                </div>
              </div>
            </div>

            {/* Block 6 */}
            <div className="bg-white rounded-xl shadow-lg border overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Cover"
                  className="w-full h-48 object-cover"
                />
                <img
                  src="https://via.placeholder.com/60"
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-white absolute bottom-2 right-2"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-32">
                <div>
                  <h2 className="text-lg font-semibold">Aisha Khan</h2>
                  <p className="text-sm text-gray-600">University of Toronto</p>
                  <p className="text-sm text-gray-500">Student • Final Year</p>
                  <p className="text-sm font-medium text-gray-800">
                    $175 / week
                  </p>
                </div>
                <div className="text-sm text-gray-500 text-right">
                  Swiss Alps
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Associates;
