import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <h3 className={styles.title}>Контакты</h3>
          <p className={styles.text}>8 800 000 00 00</p>
          <p className={styles.text}>email@example@gmail.com</p>
          <p className={styles.copy}>
            2024 Сникер-магазин. Все права защищены
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/facebook.svg" alt="facebook" />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/twitter.svg" alt="twitter" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="/instagram.svg" alt="instagram" />
            </a>
          </div>

         <div className={styles.inputWrap}>
  <input
    className={styles.input}
    type="email"
    placeholder="Введите свой email"
  />
</div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
