import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className=" bg-white shadow-lg py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex text-lg">
            <span className="font-bold text-purple-700">E</span>-Fla
            <Zap className="text-yellow-400 w-4 fill-yellow-400" />h
          </Link>
          <nav className="flex items-center gap-x-3">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <button className="flex">
            <ShoppingCart />
            <sup className="bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              0
            </sup>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
