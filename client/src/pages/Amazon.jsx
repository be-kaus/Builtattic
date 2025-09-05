import React from "react";

const Amazon = () => {
  return (
    <div className="px-2 py-4 sm:px-4 md:px-6 lg:px-8 space-y-8">
      {/* Search Bar */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-xs sm:max-w-md px-4 py-2 border rounded-full"
        />
      </div>

      {/* 8 Circle Images */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6 text-center">
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Item 1"
            className="w-24 h-24 rounded-full border mx-auto mb-2"
          />
          <p>Item 1</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Item 2"
            className="w-24 h-24 rounded-full border mx-auto mb-2"
          />
          <p>Item 2</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Item 3"
            className="w-24 h-24 rounded-full border mx-auto mb-2"
          />
          <p>Item 3</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Item 4"
            className="w-24 h-24 rounded-full border mx-auto mb-2"
          />
          <p>Item 4</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Item 5"
            className="w-24 h-24 rounded-full border mx-auto mb-2"
          />
          <p>Item 5</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Item 6"
            className="w-24 h-24 rounded-full border mx-auto mb-2"
          />
          <p>Item 6</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Item 7"
            className="w-24 h-24 rounded-full border mx-auto mb-2"
          />
          <p>Item 7</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/100"
            alt="Item 8"
            className="w-24 h-24 rounded-full border mx-auto mb-2"
          />
          <p>Item 8</p>
        </div>
      </div>

      {/* Sidebar + Rectangular Images */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Sidebar (responsive width) */}
        <div
          className="w-full lg:w-1/4 xl:w-1/6 bg-gray-100 p-2 sm:p-4 rounded overflow-y-auto max-h-[100vh]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Hide scrollbar for Webkit browsers */}
          <style>
            {`
              .sidebar-scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <div className="sidebar-scrollbar-hide">
            <h2 className="font-semibold mb-4">Filters</h2>

            {/* Category */}
            <div className="mb-4">
              <h3 className="font-medium">Category</h3>
              <label className="block">
                <input type="checkbox" /> Residential
              </label>
              <label className="block">
                <input type="checkbox" /> Commercial
              </label>
              <label className="block">
                <input type="checkbox" /> Recreational
              </label>
              <label className="block">
                <input type="checkbox" /> Institutional
              </label>
              <label className="block">
                <input type="checkbox" /> Infrastructural
              </label>
              <label className="block">
                <input type="checkbox" /> Agricultural
              </label>
              <label className="block">
                <input type="checkbox" /> Mixed Use
              </label>
              <label className="block">
                <input type="checkbox" /> Industrial
              </label>
            </div>

            {/* Style */}
            <div className="mb-4">
              <h3 className="font-medium">Style</h3>
              <label className="block">
                <input type="checkbox" /> Classical
              </label>
              <label className="block">
                <input type="checkbox" /> Gothic
              </label>
              <label className="block">
                <input type="checkbox" /> Renaissance
              </label>
              <label className="block">
                <input type="checkbox" /> Baroque
              </label>
              <label className="block">
                <input type="checkbox" /> Modernism
              </label>
              <label className="block">
                <input type="checkbox" /> Bauhaus
              </label>
              <label className="block">
                <input type="checkbox" /> Brutalism
              </label>
              <label className="block">
                <input type="checkbox" /> Minimalism
              </label>
              <label className="block">
                <input type="checkbox" /> Neo-Futurism
              </label>
            </div>

            {/* Material Used */}
            <div className="mb-4">
              <h3 className="font-medium">Material Used</h3>
              <label className="block">
                <input type="checkbox" /> Stone
              </label>
              <label className="block">
                <input type="checkbox" /> Brick
              </label>
              <label className="block">
                <input type="checkbox" /> Concrete
              </label>
              <label className="block">
                <input type="checkbox" /> Steel
              </label>
              <label className="block">
                <input type="checkbox" /> Glass
              </label>
              <label className="block">
                <input type="checkbox" /> Wood
              </label>
              <label className="block">
                <input type="checkbox" /> Bamboo
              </label>
              <label className="block">
                <input type="checkbox" /> Aluminum
              </label>
              <label className="block">
                <input type="checkbox" /> Copper
              </label>
            </div>

            {/* Soil Type */}
            <div className="mb-4">
              <h3 className="font-medium">Soil Type</h3>
              <label className="block">
                <input type="checkbox" /> Loose
              </label>
              <label className="block">
                <input type="checkbox" /> Soft
              </label>
              <label className="block">
                <input type="checkbox" /> Firm
              </label>
              <label className="block">
                <input type="checkbox" /> Stiff
              </label>
              <label className="block">
                <input type="checkbox" /> Dense
              </label>
              <label className="block">
                <input type="checkbox" /> Hard
              </label>
              <label className="block">
                <input type="checkbox" /> Sandy
              </label>
            </div>

            {/* Terrain */}
            <div className="mb-4">
              <h3 className="font-medium">Terrain</h3>
              <label className="block">
                <input type="checkbox" /> Flat
              </label>
              <label className="block">
                <input type="checkbox" /> Sloping
              </label>
              <label className="block">
                <input type="checkbox" /> Hilly
              </label>
              <label className="block">
                <input type="checkbox" /> Mountainous
              </label>
              <label className="block">
                <input type="checkbox" /> Coastal
              </label>
              <label className="block">
                <input type="checkbox" /> Waterfront
              </label>
            </div>

            {/* Climate Adaptability */}
            <div className="mb-4">
              <h3 className="font-medium">Climate Adaptability</h3>
              <label className="block">
                <input type="checkbox" /> Hot & Dry
              </label>
              <label className="block">
                <input type="checkbox" /> Hot & Humid
              </label>
              <label className="block">
                <input type="checkbox" /> Cold
              </label>
              <label className="block">
                <input type="checkbox" /> Temperate
              </label>
              <label className="block">
                <input type="checkbox" /> Tropical
              </label>
            </div>

            {/* Roof Type */}
            <div className="mb-4">
              <h3 className="font-medium">Roof Type</h3>
              <label className="block">
                <input type="checkbox" /> Flat
              </label>
              <label className="block">
                <input type="checkbox" /> Gable
              </label>
              <label className="block">
                <input type="checkbox" /> Hip
              </label>
              <label className="block">
                <input type="checkbox" /> Shed
              </label>
              <label className="block">
                <input type="checkbox" /> Mansard
              </label>
              <label className="block">
                <input type="checkbox" /> Gambrel
              </label>
              <label className="block">
                <input type="checkbox" /> Dome
              </label>
              <label className="block">
                <input type="checkbox" /> Pyramid
              </label>
              <label className="block">
                <input type="checkbox" /> Curved
              </label>
            </div>

            {/* Interior Plan */}
            <div className="mb-4">
              <h3 className="font-medium">Interior Plan</h3>
              <label className="block">
                <input type="checkbox" /> Open
              </label>
              <label className="block">
                <input type="checkbox" /> Closed
              </label>
              <label className="block">
                <input type="checkbox" /> Linear
              </label>
              <label className="block">
                <input type="checkbox" /> Centralized
              </label>
              <label className="block">
                <input type="checkbox" /> Radial
              </label>
              <label className="block">
                <input type="checkbox" /> Grid
              </label>
              <label className="block">
                <input type="checkbox" /> Cluster
              </label>
            </div>

            {/* Sustainability */}
            <div className="mb-4">
              <h3 className="font-medium">Sustainability</h3>
              <label className="block">
                <input type="checkbox" /> Passive Solar Design
              </label>
              <label className="block">
                <input type="checkbox" /> Green Roofs
              </label>
              <label className="block">
                <input type="checkbox" /> Rainwater Harvesting
              </label>
              <label className="block">
                <input type="checkbox" /> Greywater Recycling
              </label>
              <label className="block">
                <input type="checkbox" /> Natural Ventilation
              </label>
              <label className="block">
                <input type="checkbox" /> Recycled Materials
              </label>
              <label className="block">
                <input type="checkbox" /> Net-Zero Energy
              </label>
              <label className="block">
                <input type="checkbox" /> Daylighting
              </label>
              <label className="block">
                <input type="checkbox" /> Smart Glass
              </label>
            </div>

            {/* Additional Features */}
            <div className="mb-4">
              <h3 className="font-medium">Additional Features</h3>
              <label className="block">
                <input type="checkbox" /> Balconies
              </label>
              <label className="block">
                <input type="checkbox" /> Verandas
              </label>
              <label className="block">
                <input type="checkbox" /> Terraces
              </label>
              <label className="block">
                <input type="checkbox" /> Patios
              </label>
              <label className="block">
                <input type="checkbox" /> Pergolas
              </label>
              <label className="block">
                <input type="checkbox" /> Courtyards
              </label>
              <label className="block">
                <input type="checkbox" /> Skylights
              </label>
              <label className="block">
                <input type="checkbox" /> Domes
              </label>
            </div>
          </div>
        </div>

        {/* Rectangular Images (responsive width) */}
        <div className="w-full lg:w-3/4 xl:w-5/6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 1
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 2
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 3
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 4
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 5
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 6
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 1
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 2
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 3
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 4
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 5
          </div>
          <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
            Rect 6
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amazon;


