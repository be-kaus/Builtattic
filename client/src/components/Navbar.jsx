// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Active link styling with Apple blue
//   const activeLinkStyle = {
//     color: '#0071E3', // Apple blue
//     fontWeight: '600',
//   };

//   const NavLinks = ({ className }) => (
//     <div className={className}>
//       {[
//         { to: "/amazon", label: "Studio" },
//         { to: "/urban", label: "Firm" },
//         { to: "/associates", label: "Associates" },
//         { to: "/blinkit", label: "WareHouse" },
//         { to: "/login", label: "Login" },
//       ].map((link) => (
//         <NavLink
//           key={link.to}
//           to={link.to}
//           style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
//           className="py-2 px-3 rounded-md text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-300 text-lg font-medium"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           {link.label}
//         </NavLink>
//       ))}
//     </div>
//   );

//   const MenuIcon = () => (
//     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//     </svg>
//   );

//   const CloseIcon = () => (
//     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//     </svg>
//   );

//   return (
//     <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">

//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <NavLink to="/" className="text-2xl font-semibold text-[#1D1D1F] tracking-wide">
//               Builtattic
//             </NavLink>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <NavLinks className="flex items-baseline space-x-6" />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-gray-100 focus:outline-none"
//             >
//               {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
//           <NavLinks className="px-4 pt-3 pb-4 space-y-2 flex flex-col" />
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-gray-900">
          Builtattic
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/amazon" className="text-gray-600 hover:text-black">
            Studio
          </NavLink>
          <NavLink to="/urban" className="text-gray-600 hover:text-black">
            Firm
          </NavLink>
          <NavLink to="/associates" className="text-gray-600 hover:text-black">
            Associates
          </NavLink>
          <NavLink to="/blinkit" className="text-gray-600 hover:text-black">
            WareHouse
          </NavLink>
          <NavLink to="/login" className="text-gray-600 hover:text-black">
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 hover:text-black"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <NavLink
            to="/amazon"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Studio
          </NavLink>
          <NavLink
            to="/urban"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Firm
          </NavLink>
          <NavLink
            to="/associates"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Associates
          </NavLink>
          <NavLink
            to="/blinkit"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            WareHouse
          </NavLink>
          <NavLink
            to="/login"
            className="text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
