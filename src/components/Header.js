import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="header relative bg-zinc-700"
    >
      <div className="flex justify-between items-center border-zinc-700 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-[0.5_1_0%]">
          <Link to="/">
            <img
              className="w-10 h-10 ml-20"
              src="https://icon-library.com/images/rick-and-morty-icon/rick-and-morty-icon-15.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <nav className="md:flex space-x-10">
          <Link to="/episodes">
            <div className="relative text-white">Episodes</div>
          </Link>
          <Link to="/character">
            <div className="relative text-white">Characters</div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
