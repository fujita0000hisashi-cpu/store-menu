import styles from "./About.module.css"
export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutHero}>
        <h2 className={styles.sectionTitle}>About</h2>
      </div>
      <div className={styles.aboutInnter}>
        <div className={styles.aboutHeadingWrapper}>
          <h3 className={styles.aboutHeading}>COFFEE</h3>
        </div>
        <div className={styles.aboutText}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga fugiat modi sed, ducimus voluptatum placeat quibusdam neque voluptatibus, ipsam debitis eius velit.
            Provident explicabo tempora non repellendus. Id, earum vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga fugiat modi sed, ducimus voluptatum placeat quibusdam neque voluptatibus, ipsam debitis eius velit.
            Provident explicabo tempora non repellendus. Id, earum vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga fugiat modi sed, ducimus voluptatum placeat quibusdam neque voluptatibus, ipsam debitis eius velit.
            Provident explicabo tempora non repellendus. Id, earum vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga fugiat modi sed, ducimus voluptatum placeat quibusdam neque voluptatibus, ipsam debitis eius velit.
            Provident explicabo tempora non repellendus. Id, earum vero?
          </p>
        </div>
        <div className={styles.aboutButton}>
          <a href="#" className={styles.readMore}>
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
}