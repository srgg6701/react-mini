import React from 'react'

export default props => {
    console.log('Default, props=>', props);
    return <div>Listen, Dude.
        <p><code>props</code> here are what you get with Router. Particularly, they are <code>History</code>, <code>Location</code>, <code>Match</code></p>
    </div>
}