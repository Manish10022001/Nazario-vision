import React, { useState } from "react";
import "../App.css";
import Login from "../LoginSignUp/Login";
import SignUp from "../LoginSignUp/SignUp";

export function Header() {
  const [currentPage, setCurrentPage] = useState(null); // 'login' | 'signup' | null

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
          {/* Logo on the left */}
          <a href="#home" className="logo">
            <img
              src="/logo.jpg"
              alt="Nazario Logo"
              style={{ height: "40px" }}
            />
          </a>

          {/* Nav items in the center */}
          <nav className="nav-center">
            <ul className="nav-links">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth buttons on the right */}
          <div className="nav-actions">
            <button
              className="header-btn"
              style={{
                padding: "8px 18px",
                border: "1px solid #333",
                borderRadius: "20px",
                background: "white",
                color: "#333",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background 0.2s",
                cursor: "pointer",
                marginRight: "8px",
              }}
              onClick={() => setCurrentPage("login")}
            >
              Login
            </button>
            <button
              className="header-btn"
              style={{
                padding: "8px 18px",
                border: "1px solid #333",
                borderRadius: "20px",
                background: "#333",
                color: "white",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background 0.2s",
                cursor: "pointer",
              }}
              onClick={() => setCurrentPage("signup")}
            >
              Signup
            </button>
          </div>
        </div>
      </header>
      {/* Conditionally render Login or SignUp in a modal */}
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
          <div style={{}} onClick={(e) => e.stopPropagation()}>
            {/* Close button handled inside Login/Signup modals */}
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
