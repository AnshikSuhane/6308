import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Github,
} from "lucide-react";
import { FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-4 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div>
            <div className="text-3xl flex items-center gap-3 font-bold uppercase tracking-wide text-yellow-300">
              <p>Eat</p>
              <p className="text-green-200">Log</p>
              <FaLeaf className="text-green-400" />
            </div>
            <p className="text-green-200 mt-2 text-lg leading-relaxed">
              Helping you track your meals and stay healthy, one calorie at a
              time.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-200 hover:text-green-100 transition duration-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className="text-green-200 hover:text-green-100 transition duration-300"
                >
                  D
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-green-200 hover:text-green-100 transition duration-300"
                >
                  About Us
                </Link> 
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-green-200 hover:text-green-100 transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="text-green-200 hover:text-green-100 transition duration-300"
                >
                  ChatBot
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-200">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>support@Eatlog.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Health Street, Wellness City</span>
              </li>
            </ul>
          </div>

          {/* Follow Us & Newsletter Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-200">
              Follow Us
            </h4>
            <div className="flex space-x-6 mb-4">
              <a
                href="https://www.facebook.com/"
                className="hover:text-green-100 transition duration-300"
              >
                <Facebook className="h-7 w-7" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="hover:text-green-100 transition duration-300"
              >
                <Instagram className="h-7 w-7" />
              </a>
              <a
                href="https://www.twitter.com/"
                className="hover:text-green-100 transition duration-300"
              >
                <Twitter className="h-7 w-7" />
              </a>
              <a
                href="https://www.github.com/"
                className="hover:text-green-100 transition duration-300"
              >
                <Github className="h-7 w-7" />
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-green-200">
                Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="py-2 px-4 rounded-l focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />
                <button className="bg-green-600 py-2 px-4 rounded-r hover:bg-green-500 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p className="text-sm text-green-200">
            &copy; {new Date().getFullYear()} Calories Counter. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
