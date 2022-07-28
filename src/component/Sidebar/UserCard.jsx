import React from 'react';
import UseData from '../../hooks/UseData';
import './UserCard.css';

const UserCard = () => {
    const [user] = UseData();

    return (
        <div className='user-card'>
            <div className='d-flex align-items-center'>
                <img className="" src={user?.profile_picture} alt="" />

                <div className="users-name">
                    <p>{user?.username}</p>
                    <span>{user?.name}</span>
                </div>
            </div>

            <a href="/#">Swith</a>
        </div>
    );
};

export default UserCard;



