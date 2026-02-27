export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-log">STORE</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li><a href="#menu" className="header-nav-link">Menu</a></li>
            <li><a href="#about" className="header-nav-link">About</a></li>
            <li><a href="#location" className="header-nav-link">Location</a></li>
          </ul>
        </nav>
      </div>
      <div className="hero">
        <p className="hero-text">Store Menu</p>
      </div>
    </header>
  );
}