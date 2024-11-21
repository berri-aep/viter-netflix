import React from "react";
import { imgPath } from "../../helpers/function-general";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="header bg-[#0D1017]">
      <div className="container">
        <div className="header__wrapper flex justify-between items-center">
          <ul className="header_nav flex gap-4 text-white items-center">
            <img
              src={`${imgPath}/netflixLogo.png`}
              alt=""
              className="w-[200px] h-[80px] object-cover"
            />
            <li>
              <Link>TV Shows</Link>
            </li>
            <li>
              <Link>Movies</Link>
            </li>
            <li>
              <Link>Recently Added</Link>
            </li>
            <li>
              <Link>My List</Link>
            </li>
          </ul>
          <Search stroke="white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
