import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li><a href="#menu" className={styles.headerNavLink}>Menu</a></li>
            <li><a href="#about" className={styles.headerNavLink}>About</a></li>
            <li><a href="#location" className={styles.headerNavLink}>Location</a></li>
          </ul>
        </nav>
        <h1 className={styles.logo}>
          <img src="/img/logo.svg" alt="COFFEE" className={styles.logoImg} />
        </h1>
      </div>
    </header>
  );
}