import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
        <header>
            <div className="header-banner">
            <h1>{props.title}</h1>
                <nav>
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>                
                </nav>
            </div>
            
            <h2>En perpétuelle quête de savoir</h2>
        </header>
    );
};

export default Header;