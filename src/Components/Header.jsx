import React, { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import "../App.css";
import Login from "../LoginSignUp/Login";
import SignUp from "../LoginSignUp/SignUp";

export function Header({ cartItems, setSearchQuery }) {
  const [currentPage, setCurrentPage] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  const NavItems = [
    { title: "Home", link: "#home" },
    { title: "Collections", link: "#products" },
    { title: "Lifestyle", link: "#lifestyle" },
    { title: "About", link: "#about" },
    { title: "Contact", link: "#contact" },
  ];

  const closeAuth = () => setCurrentPage(null);

  return (
    <>
      <header className="header">
        <div className="nav-container">
          {/* Logo */}
          <a href="#home" className="logo">
            <img
              src="/logo.jpg"
              alt="Nazario Logo"
              style={{ height: "40px" }}
            />
          </a>

          {/* Navigation Links */}
          <nav className="nav-center">
            <ul className="nav-links">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side actions */}
          <div
            className="nav-actions"
            style={{ display: "flex", alignItems: "center", gap: "15px" }}
          >
            {
              <div
                style={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                {/* Search toggle button */}
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--ebony)",
                    padding: 0,
                    display: "flex-wrap",
                    alignItems: "center",
                  }}
                  aria-label="Search"
                  title="Search"
                >
                  <Search size={24} />
                </button>

                {/* Cart icon with badge */}
                <div
                  style={{ position: "relative", cursor: "pointer" }}
                  title="Cart"
                >
                  <ShoppingCart size={24} color="var(--ebony)" />
                  {cartItems.length > 0 && (
                    <span className="cart-badge">{cartItems.length}</span>
                  )}
                </div>
              </div>
            }
            {/* Login and Signup */}
            <button
              className="header-btn-login"
              onClick={() => setCurrentPage("login")}
            >
              Login
            </button>
            <button
              className="header-btn-signup"
              onClick={() => setCurrentPage("signup")}
            >
              Signup
            </button>
          </div>
        </div>

        {/* Search input */}
        {showSearch && (
          <div
            style={{
              padding: "10px",
              backgroundColor: "var(--light-blue-3)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "50%",
                padding: "8px 12px",
                borderRadius: "6px",
                border: `1.5px solid var(--iron)`,
                color: "var(--ebony)",
                fontSize: "1rem",
              }}
            />
          </div>
        )}
      </header>

      {/* Auth modals */}
      {(currentPage === "login" || currentPage === "signup") && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={closeAuth}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {currentPage === "login" && (
              <Login setCurrentPage={setCurrentPage} />
            )}
            {currentPage === "signup" && (
              <SignUp setCurrentPage={setCurrentPage} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
