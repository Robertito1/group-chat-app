import React, { Component } from 'react';


class DisplayConversation extends Component {
    // THIS FUNCTION IS CALLED AS A PROP TO SHOW MESSGAGES SENT TO THE SERVER
    displayMessage = () => this.props.messages.map(message => <div>{message.username}: {message.message}</div>)

    render() {
        return (
            <div className="displayConversation">
                {this.displayMessage()}
            </div>
        );
    }
}

export default DisplayConversation;
