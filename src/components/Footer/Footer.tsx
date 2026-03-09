import styles from "./Footer.module.css"
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.footerCopy}>
          &copy; 2026 Store
        </p>
      </div>
    </footer>
  );
}