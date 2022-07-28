import React from 'react';
import './PostImageSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const PostImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='post-image-slider'>
            <Slider {...settings}>
                {
                    images?.map((el, i) => <div key={i}>
                        <img src={el?.standard_resolution?.url} alt="" />
                    </div>)
                }

            </Slider>
        </div>
    );
};

export default PostImageSlider;