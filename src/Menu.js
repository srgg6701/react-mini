import React from 'react'
import { Link } from 'react-router-dom'

function setMenuOption(link, text){
    return <li key={`/${link}`}><Link to={`/${link}`}>{text}</Link></li>
}

function makeMenu() {
    return Object.entries({ home: 'Home', routing: 'Routing', context: 'ThemeContext' }).map(entry => {
        return setMenuOption(entry[0], entry[1])
    });
}

export default () => (
    <ul className="menu">
    {setMenuOption('', 'Root')}
    {makeMenu()}
</ul>)