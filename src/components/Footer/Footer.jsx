import React from "react";
import styles from "./Footer.module.scss";
import { Container } from "../Container";
import bigLogo from "@/assets/images/big-logo.svg";
import appStore from "@/assets/images/appstore.png";
import googlePlay from "@/assets/images/googleplay.png";
import icons from '@/icons/icons';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.mainGrid}>
          <div className={styles.leftGrid}>
            <img src={bigLogo} alt="" />
            <p>
              Первый отечественный бренд Iskender на рынке сантехники от
              компании ОсОО «Стройдом.кг»
            </p>
            <div className={styles.appImages}>
              <img src={appStore} alt="" />
              <img src={googlePlay} alt="" />
            </div>
          </div>
          <div className={styles.rightGrid}>
            <div className={styles.rightGridItem}>
              <h3 className={styles.itemHeading}>Адреса</h3>

              <div className={styles.textBlock}>
                <h4 className={styles.itemGrayText}>ЭлитСтрой</h4>
                <h5 className={styles.itemWhiteText}>ул. Ден-Сяопина 18/1</h5>
              </div>
              <div className={styles.textBlock}>
                <h4 className={styles.itemGrayText}>ЭлитСтрой</h4>
                <h5 className={styles.itemWhiteText}>ул. Ден-Сяопина 18/1</h5>
              </div>
              <div className={styles.textBlock}>
                <h4 className={styles.itemGrayText}>ЭлитСтрой</h4>
                <h5 className={styles.itemWhiteText}>ул. Ден-Сяопина 18/1</h5>
              </div>
            </div>
						<div className={styles.rightGridItem}>
              <h3 className={styles.itemHeading}>Компания</h3>

              <div className={styles.textBlock}>
                <h4 className={styles.itemGrayText}>Каталог</h4>
              </div>
              <div className={styles.textBlock}>
                <h4 className={styles.itemGrayText}>Избранное</h4>
              </div>
              <div className={styles.textBlock}>
                <h4 className={styles.itemGrayText}>Личный кабинет</h4>
              </div>
            </div>
						<div className={styles.rightGridItem}>
              <h3 className={styles.itemHeading}>Контакты</h3>

              <div className={styles.textBlock}>
                <h4 className={styles.itemGrayText}>Email:</h4>
                <h5 className={styles.itemWhiteText}>iskender.kg@gmail.com</h5>
              </div>
              <div className={styles.textBlock}>
                <h4 className={styles.itemGrayText}>Телефон:</h4>
                <h5 className={styles.itemWhiteText}>+996 (500) 000-104</h5>
                <h5 className={styles.itemWhiteText}>+996 (500) 000-104</h5>
                <h5 className={styles.itemWhiteText}>+996 (500) 000-104</h5>
              </div>

							<div className={styles.whatsapp}>
								<img src={icons.whatsapp} alt="" />
								<p>WhatsApp</p>
							</div>
            </div>
          </div>
        </div>
				<div className={styles.divide}></div>
					<div className={styles.bottomGrid}>
						<div className={styles.bottomGridLeft}>
							<p>© 2023 Iskender.kg - Отечественный бренд сантехники</p>
						</div>
						<div className={styles.bottomGridRight}>
							<div className={styles.socialIcons}>
								<img src={icons.instagram} alt="" />
							</div>
							<div className={styles.socialIcons}>
								<img src={icons.facebook} alt="" />
							</div>
						</div>
					</div>
      </Container>
    </footer>
  );
};
