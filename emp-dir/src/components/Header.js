import React from 'react';
import '../styles/Header.css';

function Header () {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Click on any of the headings to sort by headings otherwise use the search bar to search by name.</p>
        </div>
    )
}

export default Header;

