import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="premium-navbar">
        <div className="container navbar-main">

          {/* LOGO */}
          <Link
            to="/"
            className="premium-logo"
            onClick={closeMenu}
          >
            <div className="logo-symbol">
              <span>♛</span>
              <strong>N</strong>
            </div>

            <div className="logo-text">
              <h2>Najia Group</h2>
              <p>
                Building Businesses. Creating Opportunities.
              </p>
            </div>
          </Link>


          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className={`navbar-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>


          {/* NAV LINKS */}
          <div
            className={`premium-nav-links ${
              menuOpen ? "mobile-open" : ""
            }`}
          >

            <Link
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              to="/businesses"
              onClick={closeMenu}
            >
              Businesses
            </Link>
            <Link
              to="/gallery"
              onClick={closeMenu}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="premium-contact-btn"
              onClick={closeMenu}
            >
              <i className="bi bi-telephone-fill"></i>
              Contact Us
            </Link>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;