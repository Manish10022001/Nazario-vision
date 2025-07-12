

export function Footer() {
  return (
    <footer
      className="footer"
      style={{
        background: "var(--torea-bay)",
        color: "var(--white)",
        padding: "32px 0 16px 0",
        textAlign: "center",
        marginTop: "40px",
        fontSize: "1.05rem",
        letterSpacing: "0.5px",
        boxShadow: "0 -2px 12px rgba(65,105,225,0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 200px", textAlign: "left" }}>
            <img
              src="/logo.jpg"
              alt="Nazario Logo"
              style={{ height: "36px", marginBottom: "12px" }}
            />
            <div style={{ fontWeight: 600, fontSize: "1.2rem" }}>
              Nazario Vision
            </div>
            <div
              style={{
                fontSize: "0.95rem",
                color: "var(--light-blue-2)",
                marginTop: "6px",
              }}
            >
              Your destination for premium eyewear
            </div>
          </div>
          <div style={{ flex: "1 1 200px", margin: "16px 0" }}>
            <div style={{ fontWeight: 500, marginBottom: "8px" }}>
              Quick Links
            </div>
            <a
              href="#home"
              style={{
                color: "var(--white)",
                textDecoration: "none",
                marginRight: "18px",
              }}
            >
              Home
            </a>
            <a
              href="#products"
              style={{
                color: "var(--white)",
                textDecoration: "none",
                marginRight: "18px",
              }}
            >
              Collections
            </a>
            <a
              href="#lifestyle"
              style={{
                color: "var(--white)",
                textDecoration: "none",
                marginRight: "18px",
              }}
            >
              Lifestyle
            </a>
            <a
              href="#about"
              style={{
                color: "var(--white)",
                textDecoration: "none",
                marginRight: "18px",
              }}
            >
              About
            </a>
            <a
              href="#contact"
              style={{ color: "var(--white)", textDecoration: "none" }}
            >
              Contact
            </a>
          </div>
          <div style={{ flex: "1 1 200px", textAlign: "right" }}>
            <div style={{ fontWeight: 500, marginBottom: "8px" }}>
              Contact Us
            </div>
            <div style={{ fontSize: "0.95rem" }}>
              Email:{" "}
              <a
                href="mailto:info@nazariovision.com"
                style={{ color: "var(--light-blue-1)", textDecoration: "none" }}
              >
                info@nazariovision.com
              </a>
            </div>
            <div style={{ fontSize: "0.95rem" }}>
              Phone:{" "}
              <a
                href="tel:+911234567890"
                style={{ color: "var(--light-blue-1)", textDecoration: "none" }}
              >
                +91 12345 67890
              </a>
            </div>
            <div style={{ fontSize: "0.95rem", marginTop: "8px" }}>
              <a
                href="https://instagram.com/nazariovision"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--light-blue-1)", marginRight: "10px" }}
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/nazariovision"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--light-blue-1)", marginRight: "10px" }}
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/nazariovision"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--light-blue-1)" }}
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid var(--light-blue-2)",
            margin: "24px 0",
          }}
        />
        <div style={{ fontSize: "0.95rem", color: "var(--light-blue-2)" }}>
          &copy; {new Date().getFullYear()} Nazario Vision. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
