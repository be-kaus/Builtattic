import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Report Issue</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Products</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Partners</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-blue-600"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
