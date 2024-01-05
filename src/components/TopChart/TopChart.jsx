import React from "react";
import { Container } from "../Container";
import styles from "./TopChart.module.scss";
import { ProductCard } from "../ProductCard/ProductCard";
import Slider from "react-slick";
import icons from '@/icons/icons';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
			<img src={icons.arrowLeft} alt="" />
			</div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
			<img src={icons.arrowRight} alt="" />
			</div>
  );
}

export const TopChart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />
  };

  return (
    <div className={styles.topChart}>
      <Container>
        <div className="title-flex">
          <h2 className={"section-title " + styles.title}>Хиты продаж</h2>
          <a className="sidelink" href="#">
            перейти в каталог
          </a>
        </div>
        {/* <ProductCard />
				<ProductCard isSale={true} /> */}
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </Container>
    </div>
  );
};

