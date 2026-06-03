import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <h1 className="text-3xl font-bold">Coderpoint</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <Link to="/" className="hover:text-green-500">
            Home
          </Link>
          <Link to="/courses" className="hover:text-green-500">
            Courses
          </Link>
          <Link to="/contact" className="hover:text-green-500">
            Contact
          </Link>
          <Link to="/about" className="hover:text-green-500">
            About
          </Link>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link to="/login">
            <button className="border border-green-500 text-green-500 px-5 py-2 rounded-xl hover:bg-green-500 hover:text-white transition">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col p-4 gap-4 font-semibold">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link to="/courses" onClick={() => setIsOpen(false)}>
              Courses
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full border border-green-500 text-green-500 py-2 rounded-xl">
                Register
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}