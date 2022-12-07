import React from "react";
import carousel2 from "../../data/data2";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import ProductItem from "../common/ProductItem";

const homesec2 = () => {
  const options = {
    margin: 40,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    items: 3,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="homesec2">
      <div className="carousel-main2">
        <p>Natural Only</p>
        <h2>New Products</h2>
        <div className="carousel">
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {carousel2.data2.map((item, index) => {
              return (
                <ProductItem
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  key={index}
                  product={item}
                />
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default homesec2;
