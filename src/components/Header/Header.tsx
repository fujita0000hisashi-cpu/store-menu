import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.headerLogo}>STORE</h1>
        <nav className={styles.headerNav}>
          <ul className={styles.headernNavList}>
            <li><a href="#menu" className={styles.headerNavLink}>Menu</a></li>
            <li><a href="#about" className={styles.headerNavLink}>About</a></li>
            <li><a href="#location" className={styles.headerNavLink}>Location</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.hero}>
        <p className={styles.heroTitle}>Store Menu</p>
      </div>
    </header>
  );
}