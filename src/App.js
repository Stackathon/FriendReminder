import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddFriendForm from './AddFriendForm'
import SMSForm from './SMSForm'
import Home from './Home'
import SelectFilterWithDefaultValue from './Results'
import Navbar from './Navbar'

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
            <Navbar />
            
            <Route exact path='/add' component={AddFriendForm} />
            <Route exact path='/texts' component={SMSForm} />
            <Route exact path='/responses' component={SelectFilterWithDefaultValue} />
            <Route exact path='/' component={Home} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
