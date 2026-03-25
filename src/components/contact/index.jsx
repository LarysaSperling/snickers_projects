import React from "react";
import styles from "./styles.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Контакты</h1>

        <div className={styles.info}>
          <p>8 800 000 00 00</p>
          <p>email@example@gmail.com</p>
        </div>

        <form className={styles.form}>
          <input type="email" placeholder="Ваш email" />
          <textarea placeholder="Введите сообщение"></textarea>
        </form>
      </div>
    </section>
  );
}

export default Contact;
