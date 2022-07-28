import React from 'react';
import './SuggestionCard.css';

const SuggestionCard = () => {
    return (
        <div className='suggestion-card'>
            <div className='d-flex align-items-center'>
                <img className="" src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-1/294469874_778146093200531_3289317010184032573_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=107&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHcehR0Bovg2oqyH_LI44k1CfSzETtBhPwJ9LMRO0GE_Icxf8__KHCAas8Cf0Fzd9Vweb7zd1RxT8HUskMGpNG8&_nc_ohc=MLreTStjkWEAX9O4_sf&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT-CSUa6PSMKSyWNKmVu5BOzrfjZnmVfOjR_oyVUvyzXZQ&oe=62E4F0FF" alt="" />

                <div className="suggestion-name">
                    <p>kiurd.gentleman</p>
                    <span>Suggested for you</span>
                </div>
            </div>

            <a href="/#">Follow</a>
        </div>
    );
};

export default SuggestionCard;