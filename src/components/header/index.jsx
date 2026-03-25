import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Сникер - магазин</h1>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={styles.link}
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
          >
            Главная
          </NavLink>

          <NavLink
            to="/cart"
            className={styles.link}
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
          >
            Корзина
          </NavLink>

          <NavLink
            to="/contacts"
            className={styles.link}
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
