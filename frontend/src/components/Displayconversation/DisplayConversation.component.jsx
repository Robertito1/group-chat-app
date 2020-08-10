import React, { Component } from 'react';
import './DisplayConversation.css'


class DisplayConversation extends Component {
    // THIS FUNCTION IS CALLED AS A PROP TO SHOW MESSGAGES SENT TO THE SERVER
    displayMessage = () => this.props.messages.map(message => <div className='data'><div className='sender'>{message.username}</div><div className='message'>{message.message}</div> </div>)

    render() {
        return (
            <div className="displayConversation">
                <h3 className='header'>REACT TEAM G GROUP CHAT</h3>
                <hr />
                {this.displayMessage()}
            </div>
        );
    }
}

export default DisplayConversation;
