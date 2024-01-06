import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <div className='bar'>
            <div className="bar-subject">
                <label htmlFor="subject">Quoi ?</label>
                <input type="search" placeholder="Accident, fils électriques, blessure, fuite..." />
            </div>
            <div className="bar-location">
                <label htmlFor="location">Où ?</label>
                <select id='location'>
                    <option value="uap1">UAP1</option>
                    <option value="uap2">UAP2</option>
                    <option value="uap3">UAP3</option>
                    <option value="uap4">UAP4</option>
                    <option value="platine">Platine</option>
                    <option value="orion">Orion</option>
                    <option value="administratif">Administratif</option>
                    <option value="site">Site</option>
                </select>
            </div>
            <button type='button'>
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 18c1.846 0 3.543-.635 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396c1.054-1.355 1.689-3.052 1.689-4.898 0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
            </button>
        </div>
    );
};

export default SearchBar;