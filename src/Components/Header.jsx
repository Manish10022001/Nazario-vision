//Header component
export function Header() {
  const NavItems = [
    { title: "Home", link: "#home" },
    { title: "Collections", link: "#products" },
    { title: "Lifestyle", link: "#lifestyle" },
    { title: "About", " link": "#about" },
    { title: "Contact", link: "#contact" },
  ];
  return (
    <header className="header">
      <div className="nav-container">
        <a href="#home" className="logo">
           <img src="/logo.jpg" alt="Nazario Logo" style={{ height: "40px", marginRight: "10px" }} />
          <span style={{ fontSize: "30px", fontWeight: "bold", color: "#333" }}></span>
        </a>
        <nav>
          <ul className="nav-links">
            {NavItems.map((item, index) => (
              <li key={index}>
                <a href={item.link}> {item.title} </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
