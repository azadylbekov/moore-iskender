import React from "react";
import { Container } from "../Container";
import styles from "./Categories.module.scss";
import image1 from "@/assets/images/category/image1.png";
import image2 from "@/assets/images/category/image2.png";
import image3 from "@/assets/images/category/image3.png";
import image4 from "@/assets/images/category/image4.png";
import image5 from "@/assets/images/category/image5.png";
import image6 from "@/assets/images/category/image6.png";
import image7 from "@/assets/images/category/image7.png";
import image8 from "@/assets/images/category/image8.png";
import image9 from "@/assets/images/category/image9.png";
import image10 from "@/assets/images/category/image10.png";
import image11 from "@/assets/images/category/image11.png";

const categories = [
  {
    id: 1,
    title: "Ванны",
    image: image1,
  },
  {
    id: 2,
    title: "Смесители",
    image: image2,
  },
  {
    id: 3,
    title: "Вытяжки для кухни",
    image: image3,
  },
  {
    id: 4,
    title: "Кухонные мойки",
    image: image4,
  },
  {
    id: 5,
    title: "Другие",
    image: image5,
  },
  {
    id: 6,
    title: "Унитазы",
    image: image6,
  },
  {
    id: 7,
    title: "Вытяжки для кухни",
    image: image7,
  },
  {
    id: 8,
    title: "Умывальники",
    image: image8,
  },
  {
    id: 9,
    title: "Полотенцесушители",
    image: image9,
  },
  {
    id: 10,
    title: "Водонагреватели",
    image: image10,
  },
  {
    id: 11,
    title: "Душевые",
    image: image11,
  },
  {
    id: 12,
    title: "Водонагреватели",
    image: image1,
  },
  {
    id: 13,
    title: "Водонагреватели",
    image: image2,
  },
  {
    id: 14,
    title: "Полотенцесушители",
    image: image3,
  },
];

export const Categories = () => {
  return (
    <div>
      <Container>
        <h2 className={"section-title " +  styles.title}>Категории</h2>
        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryItem}>
              <h3 className={styles.title}>{category.title}</h3>
              <h4 className={styles.subtitle}>3000 товаров</h4>
              <div className={styles.imageCover}>
                <img src={category.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
