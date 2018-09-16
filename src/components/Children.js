import React from 'react';

class Doors extends React.Component {
    constructor(props){
        super(props);
        console.log(this);
    }
    static Doorways() {
        return <div>🚪 Doorways here</div>
    }
    render() {
        return (<div>
            <h4>🚪 Parent doors here.</h4>
            {this.props.children}
        </div>);
    }
}

export default class Children extends React.Component {
    render() {
        return <div>
            <Doors level="top">
                <hr/>
                <p>Yo! Children here</p>
            </Doors>
            <Doors.Doorways />
        </div>
    }
}