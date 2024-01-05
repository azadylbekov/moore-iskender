import React from "react";
import styles from "./News.module.scss";
import { Container } from "../Container";
import { NewsCard } from "../NewsCard/NewsCard";
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


export const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />
  };


  return (
    <div className={styles.news}>
      <Container>
        <div className="title-flex">
          <h2 className={"section-title " + styles.title}>Новости</h2>
          <a className="sidelink" href="#">
            все
          </a>
        </div>
        <Slider {...settings}>
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />
					<NewsCard />          
        </Slider>
      </Container>
    </div>
  );
};
