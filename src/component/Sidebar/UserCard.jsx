import React from 'react';
import './UserCard.css';

const UserCard = () => {
    return (
        <div className='user-card'>
            <div className='d-flex align-items-center'>
                <img className="" src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/262295709_5351580041524973_229989686152442541_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGz5ABa-fKIuG-FuzCLvnMc5yX41LpJrjDnJfjUukmuMI4enOsSteOYtpbbRnCwFld_07k0fKCrUyAqcRKKDI5k&_nc_ohc=nOKUEXRfAZMAX8aidrf&_nc_ht=scontent.fdac138-1.fna&oh=00_AT-U0HuesRJbJ8QrdMKH79knBg5sLCW9xE14wQRzIC74ZQ&oe=62E2E091" alt="" />

                <div className="users-name">
                    <p>uncultured_buffon</p>
                    <span>Mohammad Yasin</span>
                </div>
            </div>

            <a href="/#">Swith</a>
        </div>
    );
};

export default UserCard;