import React from "react";
import { Container } from "../Container";
import styles from "./Addresses.module.scss";
import smallLogo from "@/assets/images/small-logo.png";
import icons from "@/icons/icons";

export const Addresses = () => {
  return (
    <div className={styles.addresses}>
      <Container>
        <h2 className={"section-title " + styles.title}>Адреса магазинов</h2>
        <div className={styles.cardGrid}>
          {Array.from(Array(3).keys()).map((num) => (
            <div key={num} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardTopleft}>
                  <div className={styles.logoCover}>
                    <img src={smallLogo} alt="" />
                  </div>
                  <div className={styles.desc}>
                    <h4 className={styles.title}>Iskender home</h4>
                    <a className={styles.link} href="#">
                      открыть в карте
                    </a>
                  </div>
                </div>
                <div className={styles.cardTopRight}>
                  <img src={icons.cardArrow} alt="" />
                </div>
              </div>
              <div className={styles.divide}></div>
              <div className={styles.middle}>
                <div className={styles.location}>
                  <img src={icons.location} alt="" />
                  <p className={styles.locationText}>
                    Кыргызстан, г. Бишкек ул. Турусбекова A167
                  </p>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.bottomItem}>
                  <img src={icons.clock} alt="" />
                  <p>08:00 - 22:00</p>
                </div>
                <div className={styles.bottomItem}>
                  <img src={icons.phone} alt="" />
                  <p>+996 500 345 345</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
