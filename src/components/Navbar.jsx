import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent">
      <div className="max-w-6xl mx-auto bg-white shadow-md  rounded-b-2xl">
        <div className="flex items-center justify-between py-4 px-6">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="logo" className="h-8" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
            <li><Link to="/" className="hover:text-blue-600 cursor-pointer">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 cursor-pointer">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-600 cursor-pointer">Services</Link></li>
            <li><Link to="/team" className="hover:text-blue-600 cursor-pointer">Team Members</Link></li>
            <li><Link to="/doctor" className="hover:text-blue-600 cursor-pointer">Doctor Profile</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 cursor-pointer">Contact</Link></li>
          </ul>

          {/* Button */}
          <button className="hidden md:block bg-lime-200 hover:bg-lime-300 text-black font-semibold px-4 py-2 rounded-md shadow">
            BOOK AN APPOINTMENT
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <ul className="flex flex-col items-center gap-4 py-4 text-gray-800 font-medium">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">About</li>
              <li className="hover:text-blue-600 cursor-pointer">Services</li>
              <li className="hover:text-blue-600 cursor-pointer">Team Members</li>
              <li className="hover:text-blue-600 cursor-pointer">Doctor Profile</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
              <button className="bg-lime-200 hover:bg-lime-300 text-black font-semibold px-4 py-2 rounded-md shadow">
                BOOK AN APPOINTMENT
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;