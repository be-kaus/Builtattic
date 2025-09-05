import React from "react";
import Footer from "/src/components/Footer.jsx";

const UrbanPage = () => {
  return (
    <>
      <div className="bg-white text-[#1D1D1F] min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F]">
              Hire Top Firms
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
                  <h2 className="text-lg font-semibold">Modern Villa</h2>
                  <p className="text-sm text-gray-600">
                    Residential • Minimalism
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    $150 / sq. ft
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
                  <h2 className="text-lg font-semibold">Glass Tower</h2>
                  <p className="text-sm text-gray-600">
                    Commercial • Modernism
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    $220 / sq. ft
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
                  <h2 className="text-lg font-semibold">Eco Farmhouse</h2>
                  <p className="text-sm text-gray-600">
                    Agricultural • Eco-style
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    $95 / sq. ft
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
                  <h2 className="text-lg font-semibold">Luxury Penthouse</h2>
                  <p className="text-sm text-gray-600">
                    Residential • Modernism
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    $320 / sq. ft
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
                  <h2 className="text-lg font-semibold">Eco Farmhouse</h2>
                  <p className="text-sm text-gray-600">
                    Agricultural • Eco-style
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    $95 / sq. ft
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
                  <h2 className="text-lg font-semibold">Mountain Retreat</h2>
                  <p className="text-sm text-gray-600">Recreational • Rustic</p>
                  <p className="text-sm font-medium text-gray-800">
                    $180 / sq. ft
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

export default UrbanPage;
