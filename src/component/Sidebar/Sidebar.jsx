import React from 'react';
import { BsDot } from 'react-icons/bs';
import './Sidebar.css';
import SuggestionCard from './SuggestionCard';
import UserCard from './UserCard';

const footerLinks = [
    'About',
    'Help',
    'Press',
    'API',
    'Jobs',
    'Privacy',
    'Terms',
    'Locations',
    'Language',
    'English',
]

const Sidebar = () => {
    return (
        <div>
            <UserCard />
            <div className="suggestions">
                <p>Suggestions For You</p>
                <a href="/#">See All</a>
            </div>
            {
                [...new Array(5)].map((el, i) => <SuggestionCard key={i} />)
            }

            <div className="little-footer">
                {
                    footerLinks.map((el, i) => <span key={i}>
                        <a href="/#">{el}</a>
                        <BsDot />
                    </span>)
                }
            </div>
        </div>
    );
};

export default Sidebar;