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
        return <div>Doors comes here!{this.props.children}</div>;
    }
}

export default class Home extends React.Component {
    render() {
        return <div>
            🏡 Home, sweet home!
            <Doors level="top">
                <hr/>
                <p>Yo! Children here</p>
            </Doors>
            <Doors.Doorways />
        </div>
    }
}