import React from 'react';

const Header = () => {
    return (
        <ul className='header-menu'>
                <ul className='sub-headers'>
                    <a href='default'>
                        <li>
                            <img src='./logo.png' className='head-logo' alt='Anatolian Rock Revival Project Logo'/>
                        </li>
                    </a>
                    <a href='default' className='category'>
                        <li>Hikayeler</li>
                    </a>
                    <a href='default' className='category'>
                        <li>Posterler</li>
                    </a>
                </ul>
        </ul>
    );
}

export default Header;