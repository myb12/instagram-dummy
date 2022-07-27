import React from 'react';
import './StorySlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StorySlider = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }
        ]
    };

    return (
        <div className='mt-4'>
            <div className='story-slider'>
                <Slider {...settings}>
                    {
                        [...new Array(15)].map((el, i) => <div key={i} className="d-flex flex-column align-items-center">
                            <div className="slider-item">
                                <img className="" src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/262295709_5351580041524973_229989686152442541_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGz5ABa-fKIuG-FuzCLvnMc5yX41LpJrjDnJfjUukmuMI4enOsSteOYtpbbRnCwFld_07k0fKCrUyAqcRKKDI5k&_nc_ohc=nOKUEXRfAZMAX8aidrf&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-U0HuesRJbJ8QrdMKH79knBg5sLCW9xE14wQRzIC74ZQ&oe=62E2E091" alt="" />
                            </div>
                            <span className='user-name'>shagor_88</span>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default StorySlider;