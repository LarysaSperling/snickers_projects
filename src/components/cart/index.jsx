import React from "react";
import { useCart } from "../../context";
import CartCard from "../cartCard";
import styles from "./styles.module.css";

function Cart() {
  const { cartData } = useCart();

  const totalPrice = cartData.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <section className={styles.cartSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Корзина</h1>

        <div className={styles.content}>
          <div className={styles.items}>
            {cartData.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>

          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Итого</h2>

            <div className={styles.summaryList}>
              {cartData.map((item) => (
                <p key={item.id} className={styles.summaryItem}>
                  {item.name}
                </p>
              ))}
            </div>

            <div className={styles.line}></div>

            <div className={styles.totalBlock}>
              <span className={styles.totalLabel}>цена:</span>
              <strong className={styles.totalPrice}>{totalPrice} €</strong>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Cart;
