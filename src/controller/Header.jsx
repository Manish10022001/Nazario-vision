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
          Nazario
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
