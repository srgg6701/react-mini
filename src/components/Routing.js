import React from 'react'

export default props => {
    console.log('Default, props=>', props);
    return <div>
        <h4>Listen, Dude.</h4>
        <p><code>props</code> here are what you get with Router. Particularly, they are <code>History</code>, <code>Location</code>, <code>Match</code></p>
    </div>
}