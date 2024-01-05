import React from "react";
import styles from "./Header.module.scss";
import { Container } from "../Container";
import logo from "@/assets/images/logo.svg";
import icons from "@/icons/icons";

export const Header = () => {

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerFlex}>
          <img src={logo} alt="logo" />
          <button className={styles.catalogueBtn}>
            <img src={icons.burger} alt="burger icon" />
            <span>Каталог</span>
          </button>
					<form className={styles.form}>
						<div className={styles.formSearchIcon}>
							<img src={icons.search} alt="" />
						</div>
						<input className={styles.input} type="text" placeholder="Поиск" />
						<div className={styles.numbers}>
							<span>42903</span>
						</div>
					</form>
					<div className={styles.login}>
						<h4>Добро пожаловать</h4>
						<h3>Вход/Регистрация</h3>
					</div>
					<div className={"circle " + styles.avatar}>
						<img src={icons.profile} alt="profile" />
					</div>
					<div className={styles.divide}></div>
					<div className={"circle " + styles.cart}>
						<img src={icons.cart} alt="cart" />
						<div className={styles.cartBadge}><span>2</span></div>
					</div>
        </div>
      </Container>
    </header>
  );
};