import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from "socket.io-client";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:5000"
    };
  }
  componentWillMount(){
    console.log("First Run")
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.post('http://127.0.0.1:5000/addmessage',{
      senderId:"5c6c2e94c156721f09f5fe8e",
      recieverId:"5c6c3264c156721f09f5fe92",
      message:"Hello Henry"
    }, 
    ).then((res)=>{
      console.log("Response",res)
    })
  }
  componentDidMount() {
    console.log("Run")
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("message", data => console.log("Data",data));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
