import React from 'react'
import styles from './NewsCard.module.scss'
import pic from '@/assets/images/illustration.png';

export const NewsCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.desc}>
				<h3 className={styles.sale}>-50%</h3>
				<p>На кухонную мебель</p>
				<a className={styles.detailLink} href="#">Подробнее</a>
			</div>
			<div className={styles.imageCover}>
				<img src={pic} alt="" />
			</div>
		</div>
	)
}
