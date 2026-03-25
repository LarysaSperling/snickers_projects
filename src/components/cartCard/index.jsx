import React, { useState } from "react";
import { useCart } from "../../context";
import styles from "./styles.module.css";

function CartCard({ item }) {
  const { deleteFromCart } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);

    setTimeout(() => {
      deleteFromCart(item.id);
    }, 250);
  };

  return (
    <div className={`${styles.card} ${isRemoving ? styles.removing : ""}`}>
      <div className={styles.left}>
        <img className={styles.image} src={item.image} alt={item.name} />

        <div className={styles.info}>
          <h3 className={styles.name}>{item.name}</h3>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.priceWrap}>
          <p className={styles.label}>цена:</p>
          <p className={styles.price}>{item.price} €</p>
        </div>

        <button className={styles.deleteBtn} onClick={handleRemove} type="button">
          <img src="/korb.svg" alt="delete" />
        </button>
      </div>
    </div>
  );
}

export default CartCard;
