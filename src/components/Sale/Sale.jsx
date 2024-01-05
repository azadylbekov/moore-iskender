import React from "react";
import styles from "./Sale.module.scss";
import { Container } from "../Container";
import Slider from "react-slick";
import icons from '@/icons/icons';
import { ProductCard } from "../ProductCard/ProductCard";


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


export const Sale = () => {
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
    <div className={styles.sale}>
      <Container>
        <div className="title-flex">
          <h2 className={"section-title " + styles.title}>Аукционные товары</h2>
          <a className="sidelink" href="#">
            перейти в каталог
          </a>
        </div>
        <Slider {...settings}>
          <ProductCard isSale={true}/>
          <ProductCard isSale={true}/>
          <ProductCard isSale={true}/>
          <ProductCard isSale={true}/>
          <ProductCard isSale={true}/>
          <ProductCard isSale={true}/>
          <ProductCard isSale={true}/>
          <ProductCard isSale={true}/>
        </Slider>
      </Container>
    </div>
  );
};
