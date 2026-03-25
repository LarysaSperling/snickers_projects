import React, { useState } from "react";
import styles from "./styles.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Некорректный email";
    }

    if (!form.name) {
      newErrors.name = "Введите имя";
    }

    if (!form.message) {
      newErrors.message = "Введите сообщение";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Форма отправлена:", form);

      setForm({
        email: "",
        name: "",
        message: "",
      });
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Контакты</h1>
        <div className={styles.line}></div>

        <div className={styles.content}>
          <div className={styles.left}>
            <ul className={styles.list}>
              <li>8 800 000 00 00</li>
              <li>email@example@gmail.com</li>
            </ul>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ваш email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Ваше имя"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className={styles.error}>{errors.name}</p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Введите сообщение"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className={styles.error}>{errors.message}</p>
                )}
              </div>

              <button className={styles.button} type="submit">
                Отправить
              </button>
            </form>
          </div>

          <div className={styles.right}>
            <p className={styles.find}>Найдите нас:</p>

            <div className={styles.socials}>
              <a href="https://snapchat.com" target="_blank" rel="noreferrer">
                <img src="/snapchat.svg" alt="snapchat" />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src="/facebook1.svg" alt="facebook" />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src="/x_icon.svg" alt="x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
