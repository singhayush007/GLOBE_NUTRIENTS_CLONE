import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://i0.wp.com/globenutrients.com/wp-content/uploads/2025/09/pageloader-image.png?w=1000&ssl=1"
              alt="Globe Nutrients"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="navbar-menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Home
          </NavLink>

          {/* Categories Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setShowCategoriesDropdown(true)}
            onMouseLeave={() => setShowCategoriesDropdown(false)}
          >
            <button className="nav-link dropdown-toggle">
              Categories <span className="dropdown-arrow">▼</span>
            </button>

            {showCategoriesDropdown && (
              <div className="dropdown-menu">
                <Link to="/categories" className="dropdown-item">
                  Creatine
                </Link>
                <Link to="/categories" className="dropdown-item">
                  Glutamine
                </Link>
                <Link to="/categories" className="dropdown-item">
                  Omega-3
                </Link>
                <Link to="/categories" className="dropdown-item">
                  Multivitamins & Minerals
                </Link>
                <Link to="/categories" className="dropdown-item">
                  Pre Workout
                </Link>
                <Link to="/categories" className="dropdown-item">
                  Proteins
                </Link>
                <Link to="/categories" className="dropdown-item">
                  Mass Gainer
                </Link>
                <Link to="/categories" className="dropdown-item">
                  BCAA & Aminos
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            My Account
          </NavLink>

          {/* Brands Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setShowBrandsDropdown(true)}
            onMouseLeave={() => setShowBrandsDropdown(false)}
          >
            <button className="nav-link dropdown-toggle">
              Brands <span className="dropdown-arrow">▼</span>
            </button>

            {showBrandsDropdown && (
              <div className="dropdown-menu">
                <Link to="/brands" className="dropdown-item">
                  Rule 1
                </Link>
                <Link to="/brands" className="dropdown-item">
                  Dymatize
                </Link>
                <Link to="/brands" className="dropdown-item">
                  Cellucor C4
                </Link>
                <Link to="/brands" className="dropdown-item">
                  GAT
                </Link>
                <Link to="/brands" className="dropdown-item">
                  Ghost
                </Link>
                <Link to="/brands" className="dropdown-item">
                  Hammer
                </Link>
                <Link to="/brands" className="dropdown-item">
                  JNX Sports
                </Link>
                <Link to="/brands" className="dropdown-item">
                  Muscle Tech
                </Link>
                <Link to="/brands" className="dropdown-item">
                  Nitraflex
                </Link>
                <Link to="/brands" className="dropdown-item">
                  Pro Shops
                </Link>
                <Link to="/brands" className="dropdown-item">
                  Xtend
                </Link>
                <Link to="/brands" className="dropdown-item">
                  International Protein
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Cart
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search......"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
      </div>
    </nav>
  );
}
