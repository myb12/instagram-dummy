import React from 'react';
import './StorySlider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { storyData } from '../../fakeData/fakeData';

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
                        storyData.map((el, i) => <div key={i} className="d-flex flex-column align-items-center">
                            <div className="slider-item">
                                <img src={el.image} alt="" />
                            </div>
                            <span className='user-name'>{el.username}</span>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default StorySlider;