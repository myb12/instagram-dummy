import React from 'react';
import { BsDot } from 'react-icons/bs';
import { footerLinks, suggestionData } from '../../fakeData/fakeData';
import './Sidebar.css';
import SuggestionCard from './SuggestionCard';
import UserCard from './UserCard';

const Sidebar = () => {

    return (
        <div>
            <UserCard />
            <div className="suggestions">
                <p>Suggestions For You</p>
                <a href="/#">See All</a>
            </div>
            {
                suggestionData.slice(0, 5).map((el, i) => <SuggestionCard key={i} data={el} />)
            }

            <div className="little-footer">
                {
                    footerLinks.map((el, i) => <span key={i}>
                        <a href="/#">{el}</a>
                        <BsDot />
                    </span>)
                }

                <p className='copywrite'>© 2022 INSTAGRAM FROM META</p>
            </div>
        </div>
    );
};

export default Sidebar;