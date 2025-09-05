import React from "react";

const BlinkitPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Building Materials, Delivered Fast
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Source everything for your construction needs from trusted
            suppliers.
          </p>

          {/* Search Bar */}
          <div className="mt-4 sm:mt-6">
            <input
              type="text"
              placeholder="Search for bricks, cement, steel..."
              className="w-full max-w-xs sm:max-w-lg mx-auto block border rounded-full px-3 py-2 sm:px-4 sm:py-2 shadow-sm"
            />
          </div>
        </div>

        <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Heading */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
                Shop by Category
              </h1>
              <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
                Browse our wide range of construction materials.
              </p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Bricks"
                  alt="Bricks"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Bricks & Blocks
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Cement"
                  alt="Cement"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Cement & Concrete
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Steel"
                  alt="Steel"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Steel & Metals
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Sand"
                  alt="Sand"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Sand & Aggregates
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Pipes"
                  alt="Pipes"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Pipes & Fittings
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Electrical"
                  alt="Electrical"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Electrical Supplies
                </p>
              </div>

              {/* Card 7 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Paints"
                  alt="Paints"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Paints & Finishes
                </p>
              </div>

              {/* Card 8 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Tools"
                  alt="Tools"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Tools & Equipment
                </p>
              </div>

              {/* Card 1 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Bricks"
                  alt="Bricks"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Bricks & Blocks
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Cement"
                  alt="Cement"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Cement & Concrete
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Steel"
                  alt="Steel"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Steel & Metals
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Sand"
                  alt="Sand"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Sand & Aggregates
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Pipes"
                  alt="Pipes"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Pipes & Fittings
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Electrical"
                  alt="Electrical"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Electrical Supplies
                </p>
              </div>

              {/* Card 7 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Paints"
                  alt="Paints"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Paints & Finishes
                </p>
              </div>

              {/* Card 8 */}
              <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition">
                <img
                  src="https://placehold.co/300x200?text=Tools"
                  alt="Tools"
                  className="w-full h-24 sm:h-32 object-cover rounded-md"
                />
                <p className="mt-2 sm:mt-4 font-medium text-gray-800 text-sm sm:text-base">
                  Tools & Equipment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlinkitPage;
