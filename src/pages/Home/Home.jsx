import React, { useState } from 'react';
import './Home.css';
import Header from '../../component/Header/Header'
import StorySlider from '../../component/StorySlider/StorySlider';
import Posts from '../../component/Posts/Posts';

const Home = () => {
    const [searchClicked, setSearchClicked] = useState(false);

    const handleSearchClick = (e) => {
        const searchInput = e.target.closest('.header-search');
        if (!searchInput) {
            setSearchClicked(false);
        } else {
            setSearchClicked(true);
        }
    }
    return (
        <div className='container' onClick={(e) => handleSearchClick(e)}>
            <Header searchClicked={searchClicked} />

            <div className="row" style={{ marginTop: 60 }}>
                <div className="col-12 col-lg-8">
                    <StorySlider />
                    <Posts />
                </div>
                <div className="col-12 col-lg-4">

                </div>
            </div>
        </div>
    );
};

export default Home;