import React from "react";
import { useCart } from "../../context";
import News from "../news";
import ProductCard from "../productCard";
import styles from "./styles.module.css";

function Main() {
  const { products } = useCart();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <News />

        <h1 className={styles.title}>Товары</h1>

        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
