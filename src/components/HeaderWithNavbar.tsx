import React, { useState } from "react";

const HeaderWithNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <header className="header"> {/* Enclose everything in a header */}
      <div className="header-content"> {/* Container for header content */}
        <h1>My portfolio</h1> {/* Your header title or logo */}
        <nav className="navbar">
          <div className="dropdown">
          <button className="button" onClick={() => toggleDropdown("home")}>Home</button>
          {activeDropdown === "home" && <div className="dropdown-content">Welcome to the Home Page</div>}
          </div>
          <div className="dropdown">
          <button className="button" onClick={() => toggleDropdown("about")}>About</button>
          {activeDropdown === "about" && <div className="dropdown-content">Capturing emotions, moments, and stories-one frame at a time.</div>}
          </div>
          <div className="dropdown">
          <button className="button" onClick={() => toggleDropdown("contact")}>Contact</button>
          {activeDropdown === "contact" && <div className="dropdown-content">Contact us at +254 715 493594</div>}
          </div>
        </nav>
        </div>
    </header>
  );
};

export default HeaderWithNavbar;