import React from "react";
import styles from "./styles.module.css";

function News() {
  return (
    <section className={styles.banner}>
      <div className={styles.top}>
        <img
          className={styles.logo}
          src="/sneakerstore__arad_icon.jpeg.svg"
          alt="logo"
        />

        <h2 className={styles.one}>ONE</h2>

        <img
          className={styles.topShoe}
          src="/air-max-plus-se-shoes-hH93Cl-removebg-preview 1.png"
          alt="top sneakers"
        />

        <div className={styles.discount}>
          <p>UP TO</p>
          <h1>50% OFF</h1>
        </div>
      </div>

      <div className={styles.bottom}>
        <h2 className={styles.air}>AIR</h2>

        <img
          className={styles.bottomShoe}
          src="/air-max-tw-shoes-DhpWvV-removebg-preview 1.png"
          alt="bottom sneakers"
        />
      </div>
    </section>
  );
}

export default News;