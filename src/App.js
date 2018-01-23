import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageView from './messages/message-view';

class App extends Component {
  render(){
    // const headerStyle = { color: '#ff00ff', textDecoration: 'underline' }
    return (
      <MessageView />
     )
   }
}

export default App;
