import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Send input to HomePage
  };

  return (
    <div>
      {/* Logo */}
      <div className="h-[130px] bg-white flex justify-center p-4">
        <Link to="/">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-[100px] w-[100px] cursor-pointer"
          />
          </Link>
      </div>

      {/* Nav Links */}
      <header className="h-[100px] flex justify-between items-center gap-6 py-4 px-6 bg-white border border-orange-200 border-l-0 border-r-0">
        <nav className="flex space-x-4 text-[15px] gap-6 px-8">
          <Link to="/game-guides" className="hover:text-yellow-600 transition">Game Guides</Link>
          <Link to="/reviews" className="hover:text-yellow-600 transition">Game Reviews</Link>
          <Link to="/tips" className="hover:text-yellow-600 transition">Tips, Tricks</Link>
          <Link to="/about" className="hover:text-yellow-600 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-600 transition">Contact</Link>
        </nav>

        {/* Search & Subscribe */}
        <div className="flex items-center gap-3 px-4 py-6">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
            className="border px-2 py-1 rounded"
          />
          <button className="bg-[#d09a40] px-4 py-2 rounded text-white font-medium">
            SUBSCRIBE
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
