// NECESSARY IMPORTS
import React, { Component, } from 'react';
import DisplayConversation from '../Displayconversation/DisplayConversation.component';
import MessageBox from '../MessageBox/MessageBox.component';

// MESSAGEPANEL COMPONENT , ITS THE COMPONENT THAT GETS DISPLAYED WHEN THE USER HAS GIVEN A USERNAME
class MessagePanel extends Component {
    state = {
        messages: []
    }
    // THIS IS HOW TO CREATE A WEBSOCKET CONNECTION FROM THE CLIENT 
    // SIDE, THIS IS THE ONLY COMPONENT THAT NEEDS TO COMMUNICATE WITH THE SERVER
    connection = new WebSocket('ws://localhost:8080/')
    // ON THE MOUNTING PHASE A FUNCTION IS CREATED THAT RETRIEVES 
    // MESSAGES AUTOMATICALLY FROM THE SERVER
    componentDidMount() {
        this.connection.onmessage = (message) => {
            const data = JSON.parse(message.data)
            this.setState({ messages: [...this.state.messages, data] })
        }
    }
    // A FUNCTION IS CREATED THAT AUTOMATICALLY 
    // SENDS MESSAGE BACK TO THE SERVER SO THAT EVERYONE CAN SEE
    getMessage = (message) => {
        const data = { username: this.props.username, message: message }

        this.connection.send(JSON.stringify(data))
        const toSelf = { username: "you", message: message }
        this.setState({ messages: [...this.state.messages, toSelf] })
    }


    render() {
        return (
            <div className="messagePanel">
                <DisplayConversation messages={this.state.messages} />
                <MessageBox getMessage={this.getMessage} />
            </div>
        );
    }
}

export default MessagePanel;
