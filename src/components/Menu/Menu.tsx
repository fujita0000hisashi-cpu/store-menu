import styles from "./Menu.module.css"

const DRINKS = [
  { name: "Coffee", price: "400"},
  { name: "Cafe Latte", price: "500"},
  { name: "Espresso", price: "300"},
];

const FOODS = [
  { name: "Sandwich", price: "600"},
  { name: "Salad", price: "500"},
  { name: "Cake", price: "400"},
];

function MenuList({ items }: { items: { name: string; price: string; }[] }) {
  return (
    <ul className={styles.menuList}>
      {items.map((item) => (
        <li key={item.name} className={styles.menuItem}>
          <span className={styles.itemName}>{item.name}</span>
          <span className={styles.itemPrice}>{item.price}</span>
        </li>
      ))}
    </ul>
  );
}

export function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.menuInner}>
        <h2 className={styles.sectionTitle}>MENU</h2>
        <div className={styles.menuColumns}>
          <section className={styles.menuCategory}>
            <h3 className={styles.menuHeading}>Drink</h3>
            <MenuList items={DRINKS} />
          </section>
          <section className={styles.menuCategory}>
            <h3 className={styles.menuHeading}>Food</h3>
            <MenuList items={FOODS} />
          </section>
        </div>
      </div>
    </section>
  );
}