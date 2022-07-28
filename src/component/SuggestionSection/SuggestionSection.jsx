import React from 'react';
import SuggestionSlider from '../SuggestionSlider/SuggestionSlider';
import './SuggestionSection.css';

const SuggestionSection = () => {
    return (
        <div className='suggestion-section'>
            <div className="suggestions mt-0">
                <p>Suggestions For You</p>
                <a href="/#">See All</a>
            </div>

            <SuggestionSlider />
        </div>
    );
};

export default SuggestionSection;