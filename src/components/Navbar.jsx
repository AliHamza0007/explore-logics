import "../styles/Navbar.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import Logo from "../assets/FINAL-LOGO.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavbarScroll, setNavbarScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` ${isNavbarScroll ? "navbarScroll shadow" : "navbarFixed"}`}
    >
      <nav className="navbar navbar-expand-lg navbar-light" id="page-nav">
        <div className="container ">
          <NavLink to="/" className="navbar-brand ">
            <img className="img-fluid" alt="Logo" src={Logo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <motion.i
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  repeat: "Infinity",
                },
              }}
              className="fas   fa-bars fs-1  navbar-toggler-icon"
            ></motion.i>
            <motion.i
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  repeat: "Infinity",
                  repeatDelay: 0,
                  delay: 0,
                },
              }}
              className="fas   fa-close fs-1 navbar-toggler-icon"
            ></motion.i>{" "}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item p-xl-2 p-0">
                <NavLink className="nav-link  projectHome" to="/">
                  Home
                </NavLink>
                <Link
                  className="nav-link Home "
                  spy
                  smooth
                  duration={1000}
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item p-xl-2 p-0">
                <Link
                  className="nav-link "
                  spy
                  smooth
                  duration={1000}
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item p-xl-2 p-0">
                <Link
                  className="nav-link "
                  spy
                  smooth
                  duration={1000}
                  to="service"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item p-xl-2 p-0">
                <Link
                  className="nav-link"
                  spy
                  smooth
                  duration={1000}
                  to="portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item p-xl-2 p-0">
                <Link
                  className="nav-link "
                  spy
                  smooth
                  duration={1000}
                  to="contact-us"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
