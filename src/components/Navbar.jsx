import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Home, Info, MessageCircle, Phone, LogIn } from 'lucide-react';

const Navbar = () => {
  const navigate=useNavigate()
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 backdrop-blur-lg bg-opacity-90 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div onClick={navigate("/foodlist")} className="flex-shrink-0">
            <h1 className="text-2xl font-black bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 text-transparent bg-clip-text hover:scale-105 transform transition-all duration-300">
              <span className="text-yellow-300">Eat</span>
              <span className="text-white">Log</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink
                to="/FoodList"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <Info className="w-4 h-4" />
                <span>About</span>
              </NavLink>

              <NavLink
                to="/chat"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <MessageCircle className="w-4 h-4" />
                <span>ChatBot</span>
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </NavLink>

              <NavLink
                to="/FoodList"
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300"
            >
              {isMobile ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out transform ${
          isMobile ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-b from-indigo-600/95 to-purple-600/95 backdrop-blur-lg">
          <NavLink
            to="/FoodList"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`
            }
            onClick={() => setIsMobile(false)}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`
            }
            onClick={() => setIsMobile(false)}
          >
            <Info className="w-5 h-5" />
            <span>About</span>
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`
            }
            onClick={() => setIsMobile(false)}
          >
            <MessageCircle className="w-5 h-5" />
            <span>ChatBot</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`
            }
            onClick={() => setIsMobile(false)}
          >
            <Phone className="w-5 h-5" />
            <span>Contact</span>
          </NavLink>

          <NavLink
            to="/"
            className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
            onClick={() => setIsMobile(false)}
          >
            <LogIn className="w-5 h-5" />
            <span>Login</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;