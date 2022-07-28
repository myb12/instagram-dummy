import React from 'react';
import './SuggestionSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { IoIosClose } from 'react-icons/io';
import { suggestionData } from '../../fakeData/fakeData';

const SuggestionSlider = () => {

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className=''>
            <div className='suggestion-slider'>
                <Slider {...settings} >
                    {
                        suggestionData.map((el, i) => <div key={i} className="suggestion-slider-card-wrapper">
                            <div className="suggestion-slider-card">
                                <div className="suggestion-slider-item">
                                    <img src={el.image} alt="" />
                                </div>

                                <div className='suggestion-slider-card-footer'>
                                    <p>{el.name}</p>
                                    <span>{el.text.slice(0, 17)}...</span>
                                </div>
                                <button className='follow-btn'>Follow</button>

                                <IoIosClose className="suggestion-close" />
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default SuggestionSlider;