import styles from "./Menu.module.css"

type MenuItem = { name: string; price: string };

const DRINKS: MenuItem[] = [
  { name: "Coffee", price: "400"},
  { name: "Cafe Latte", price: "500"},
  { name: "Espresso", price: "300"},
];

const FOODS: MenuItem[] = [
  { name: "Sandwich", price: "600"},
  { name: "Salad", price: "500"},
  { name: "Cake", price: "400"},
];

const OTHERS: MenuItem[] = [
  { name: "Cookie", price: "300"},
  { name: "Chocolate", price: "350"},
];

function MenuList({ items }: { items: MenuItem[] }) {
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

function MenuCategory({ title, items, }: { title: string; items: MenuItem[]; }) {
  return (
    <section className={styles.menuCategory} aria-label={title}>
      <h3 className={styles.menuHeading}>{title}</h3>
      <MenuList items={items} />
    </section>
  );
}

export function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.menuHero}>
        <h2 className={styles.sectionTitle}>MENU</h2>
      </div>
      <div className={styles.menuInner}>
        <div className={styles.menuColumns}>

          {/* Left: Drink */}
          <MenuCategory title="Drink" items={DRINKS} />

          {/* Right: Food + Other */}
          <div className={styles.menuRight}>
            <MenuCategory title="Food" items={FOODS} />
            <MenuCategory title="Other" items={OTHERS} />
          </div>
        </div>
      </div>
    </section>
  );
}