import React from "react";
import { useCart } from "../../context";
import styles from "./styles.module.css";

function ProductCard({ product }) {
  const { cartData, addToCart } = useCart();

  const isInCart = cartData.some(
    (item) => item.name === product.name
  );

  const handleAdd = () => {
    if (!isInCart) {
      addToCart(product);
    }
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={product.image}
        alt={product.name}
      />

      <h3 className={styles.name}>{product.name}</h3>

      <div className={styles.bottom}>
        <div>
          <p className={styles.label}>цена:</p>
          <p className={styles.price}>{product.price} €</p>
        </div>

        <button
          className={`${styles.button} ${
            isInCart ? styles.buttonActive : ""
          }`}
          onClick={handleAdd}
          disabled={isInCart}
        >
          {isInCart ? "✓" : "+"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
