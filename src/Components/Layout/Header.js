import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>PACK UP!</h1>
        </header>
    )
}

const headerStyle = {
    background: 'grey',
    color: 'lightgrey',
    textAlign: 'center',
    padding: '10px',
    border: '10px teal solid'
}

export default Header;