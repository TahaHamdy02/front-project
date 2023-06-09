import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import {
  MdOutlineRestaurantMenu,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import images from "../../constants/images";
import "./navbar.css";
const Navbar = () => {
  const location = useLocation();
  const isLoginPage = /\/(register|login)/.test(location.pathname);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const scrollHeader = () => {
      const header = document.querySelector(".app__navbar");
      header.classList.toggle("bg-header", window.scrollY >= 50);
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  const links = [
    { path: "/home", label: "Home" },
    { path: "/aboutus", label: "About Us" },
    { path: "/ourservices", label: "Services" },
    { path: "/ourblogs", label: "Blogs" },
  ];

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  const NavMenu = () => (
    <>
      {links.map((link) => (
        <li key={link.path} className="p__opensans">
          <Link to={link.path} onClick={handleLinkClick}>
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );

  const handleDropdownClick = () => {
    setToggleDropdown(!toggleDropdown);
  };
  const dropdownLinks = [
    { path: "/ourchefs", label: "Chefs" },
    { path: "/contactus", label: "Contact" },
    { path: "/faq", label: "Faq" },
    { path: "/commingsoon", label: "comming soon" },
    { path: "/error", label: "Error" },
  ];
  const Dropdown = () => (
    <ul className="app__navbar-dropdown" onClick={handleLinkClick}>
      {dropdownLinks.map((label, i) => (
        <li key={i} className="p__opensans">
          <Link to={label.path}>{label.label}</Link>
        </li>
      ))}
    </ul>
  );

  if (isLoginPage) return null;
  const user = JSON.parse(localStorage.getItem("user"));
  const exist = user || false;
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <NavMenu />
        <li
          className={`p__opensans dropdown flex__center ${
            toggleDropdown && "active"
          }`}
          onClick={handleDropdownClick}
        >
          pages <MdOutlineKeyboardArrowDown />
          {toggleDropdown && <Dropdown />}
        </li>
      </ul>
      <div className="app__navbar-login">
        {exist ? (
          <li style={{ listStyleType: "none" }} className="p__opensans">
            {user.firstName}
          </li>
        ) : (
          <Link to="/login" className="p__opensans">
            Log In / Register
          </Link>
        )}
        <div />
        <Link to="/ourservices#booktable">
          <p className="p__opensans">Book Table</p>
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          <MdOutlineRestaurantMenu
            className="close"
            color="#dcca87"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <GiHamburger
            color="#a77a33"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="app__navbar-smallscren_overlay flex__center slide-bottom">
            <ul className="app__navbar-smallscren-links">
              <NavMenu />
              <li
                className="p__opensans dropdown"
                style={{ flexDirection: "column" }}
                onClick={handleDropdownClick}
              >
                <span className="flex__center">
                  pages <MdOutlineKeyboardArrowDown />
                </span>
                {toggleDropdown && <Dropdown />}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
