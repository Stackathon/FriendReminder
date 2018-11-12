import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom'
import axios from 'axios'
import AddFriendTable from './AddFriendTable'

export default class CreateFriend extends Component {
  constructor () {
      super()
      this.state = {
        friends: [],
        name: '',
        phoneNumber: '',
        group: ''
	    }
    this.addFriend = this.addFriend.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  async componentDidMount () {
    const res = await axios.get('/api/friends')
    console.log('res', res)
    this.setState({friends: res.data})
  }

  addFriend (friend) {
	  this.setState({
		  friends: [...this.state.friends, friend]
	  })
  }

  handleSelect (evt) {
    this.setState({
      group: evt.target.value
    })
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit (evt) {
    evt.preventDefault()
    try {
      const res = await axios.post('/api/friends', this.state)
      this.addFriend(res.data)
      this.setState({
        name: '',
        phoneNumber: '',
        group: ''
	    })
    }
	  catch (err) {
      this.setState({
        errorMessage: `There was a problem adding a friend: ${err.message}`
      })
    }
  }

  render () {
    
    return (
        <div>
          <Form inline onSubmit={this.handleSubmit}>  
              <FormGroup>
                <Label for="name" hidden>Name</Label>
                <Input 
                    type="text" 
                    name="name" 
                    id="exampleName" 
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder="First and Last Name" 
                />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="phone" hidden>Phone Number</Label>
                <Input 
                    type="text" 
                    name="phoneNumber" 
                    id="examplePhone" 
                    onChange={this.handleChange}
                    value={this.state.phoneNumber}
                    placeholder="Phone ex: 19999999999" 
                />
              </FormGroup>
              {' '}
              <FormGroup>
                <Label for="select"><strong> SELECT A GROUP </strong></Label>
                <Input 
                    type="select" 
                    name="select" 
                    id="exampleSelect"
                    onChange={this.handleSelect}>
                >
                  <option>High School</option>
                  <option>College</option>
                  <option>Frenemy</option>
                  <option>Randos</option>
                  <option>Grace Hopper</option>
                </Input>
              </FormGroup>
              {' '}
            <Button color="success" type="submit">Add a friend</Button>
          
          </Form>
              <div>
                <AddFriendTable friends={this.state.friends}/>
                <Button tag={Link} to={`/second`} color="success" size="lg" block>Let's get to it!</Button>
                {/* onClick={() => singleCampusOnly(campus)}> {campus.name} */}
              </div>
        </div>
    )
  }
}
