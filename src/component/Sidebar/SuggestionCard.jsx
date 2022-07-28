import React from 'react';
import './SuggestionCard.css';

const SuggestionCard = ({ data }) => {
    return (
        <div className='suggestion-card'>
            <div className='d-flex align-items-center'>
                <img className="" src={data.image} alt="" />

                <div className="suggestion-name">
                    <p>{data.username}</p>
                    <span>{data.text}</span>
                </div>
            </div>

            <a href="/#">Follow</a>
        </div>
    );
};

export default SuggestionCard;