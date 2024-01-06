import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="logo">
                Refer<span>.</span>it
            </div>
            <div className="switch_page">
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1h-3c-3.309 0-6 2.691-6 6v1h1 1 11 1 1v-1c0-3.309-2.691-6-6-6z"/><path d="m16.604 11.048c.604-1.029.872-2.228.751-3.44-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974.11 1.105-.28 2.194-1.072 2.986l-1.192 1.192 1.618.475c4.232 1.24 4.281 5.496 4.281 5.539h2c0-1.789-.956-5.285-4.396-6.952z"/></svg>
            </div>
        </header>
    );
};

export default Header;