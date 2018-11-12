import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddFriendForm from './AddFriendForm'
import SMSForm from './SMSForm'
import SelectFilterWithDefaultValue from './Results'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Enter your name: </label>
              <input
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
            <p>{this.state.greeting}</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
            <h2>Friend Reminder!</h2>
            <Route exact path='/first' component={AddFriendForm} />
            <Route exact path='/second' component={SMSForm} />
            <Route exact path='/third' component={SelectFilterWithDefaultValue} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
