import React from 'react'

const Header = () => {
    return (
        <nav aria-label="Navegacion principal">
            <ul>
                <li><a aria-current href="https://google.com">Link 1</a></li>
                <li><a href="https://google.com">Link 2</a></li>
            </ul>
        </nav>
    );
}

export default Header;