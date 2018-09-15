import React from 'react'
import { Link } from 'react-router-dom'

function makeMenu() {
    return Object.entries({ root: 'Root', home: 'Home', routing: 'Routing', context: 'Context' }).map(entry => {
        return <li key={`/${entry[0]}`}><Link to={`/${entry[0]}`}>{entry[1]}</Link></li>
    });
}

export default () => (<ul className="menu">{makeMenu()}</ul>)