// NECCESSARY IMPORTS
import React, { Component } from 'react';
import Login from './components/Login/Login.component'
import MessagePanel from './components/MeassagePanel/MessagePanel.component'
import './App.css';

// MAIN COMPONENT TO OUR APPLICATION
class App extends Component {
  // STATE : USERNAME SET TO NULL ,TO BE RECIEVED VIA PROPS FROM THE LOGIN COMPONENT
  state = {
    username: null
  }
  // THIS FUNCTION IS PASSED IN AS A PROP TO THE LOGIN COMPONENT TO RETRIEVE THE USERNAME VALUE FROM THE INPUT IN LOGIN
  setUsername = (username) => {
    this.setState({ username })
  }
  render() {
    return (
      // CONDITIONAL RENDERING OF EITHER THE MESSAGEPANEL COMPONENT(IF USER IS LOGGED)  OR
      // LOGIN COMPONENT IF THE USER IS YET TO LOGIN
      <div className="App">

        {
          !this.state.username ?
            <Login setUsername={this.setUsername} />
            :
            <MessagePanel username={this.state.username} />
        }

      </div>
    );
  }
}

export default App;