import { useState } from "react";
import styles from "./ProductCard.module.scss";
import icons from "@/icons/icons";
import card1 from "@/assets/images/card1.png";
import { Counter } from "../Counter/Counter";

export const ProductCard = ({ isSale }) => {
	const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={styles.productCard}>
      <div className={styles.imageCover}>
        <img className={styles.mainImg} src={card1} alt="" />
        <button onClick={() => setIsLiked(!isLiked)} className={styles.likeBtn}>
          <img src={isLiked ? icons.heartFilled : icons.heart} alt="" />
        </button>
      </div>
      <h4 className={styles.title}>Title of the product</h4>
			<div className={styles.priceBlock}>
      	<h3 className={isSale ? styles.salePrice : styles.price}>1294 c</h3>
      	{isSale && <h4 className={styles.oldPrice}>1294 c</h4>}
			</div>
      <h5 className={styles.available}>В наличии</h5>
      <h5 className={styles.type}>Комплект</h5>
      <Counter />
    </div>
  );
};
