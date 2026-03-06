import styles from "./Location.module.css"
export function Location() {
  return (
    <section id="location" className={styles.location}>
      <div className={styles.locationHero}>
        <h2 className={styles.sectionTitle}>Location</h2>
      </div>
      <div className={styles.locationInner}>
        <div className={styles.locationHeadingWrapper}>
          <h3 className={styles.locationHeading}>OUR STORE</h3>
        </div>
        <div className={styles.mapWrapper}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4585.299293219977!2d139.7062494041788!3d35.64507269733178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b40ba660b1b%3A0x8858088b6942f55f!2z44CSMTUwLTAwMjIg5p2x5Lqs6YO95riL6LC35Yy65oG15q-U5a-_5Y2X!5e0!3m2!1sja!2sjp!4v1592748907506!5m2!1sja!2sjp"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.locationInfo}>
          <p>
            X-XX-XX, Ebisuminami, Shibuya-ku, Tokyo 150-0022<br />
            東京都渋谷区恵比寿南X-XX-XX
          </p>
          <p>
            Open 7 days a Week<br />
            9:00am to 10:00pm
          </p>
          <p>Tel : XX-XXXX-XXXX</p>
        </div>
      </div>
    </section>
  );
}