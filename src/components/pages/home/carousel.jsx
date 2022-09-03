import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from '../../data/data1';

const carousel = () => {
    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        items: 5,
        navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        dots:false,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5
        }
    }
    };
    return (
        <div className="carousel">
           <div className="carousel-main1">
           <OwlCarousel className="slider-items owl-carousel" {...options}>
            {
                carousel1.data1.map((item,index)=>{
                    return(
                        <div className="item"
                         key={item.id} 
                         style={{background:`${item.bgColor}`}}>
                            <img src={item.img}  />
                            <h4>{item.title}</h4>
                        </div>
                    )
                })
            }
        </OwlCarousel>
           </div>
        </div>
    )
}

export default carousel