import React from 'react';

class Doors extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
    }
    static Doorways() {
        return (<fieldset>
            <legend>
                <h4>Children here</h4>
            </legend>
            <p>🚪 Doorways as a children of Doors here.</p>
        </fieldset>);
    }
    render() {
        return (<fieldset>
            <legend>
                <h3>🚪 Parent here</h3>
            </legend>
            {this.props.children}
        </fieldset>);
    }
}

export default class Children extends React.Component {
    render() {
        return <div>
            <Doors level="top">
                <p>Sailor, if you're going to locate children within a component, then you got to put them as <code>this.props.children</code> inside it. Ok?</p>
                <Doors.Doorways />
            </Doors>
        </div>
    }
}