import React, { Component } from 'react';

class MessageBox extends Component {

    messageHandler = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            this.props.getMessage(e.target.value)
            e.target.value = ''
        }
    }

    render() {
        return (
            <div className="messageBox">
                <textarea onKeyDown={this.messageHandler}> </textarea>
            </div>
        );
    }
}

export default MessageBox;
