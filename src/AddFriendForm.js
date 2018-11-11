import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

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
 
  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSelect (evt) {
    this.setState({
      group: evt.target.value
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
    //const isEnabled = this.state.name && this.state.phoneNumber
    return (
        <div>
           {/* && this.state.group */}
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
                <Label for="select">Select</Label>
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
            <Button type="submit">Add a friend</Button>
          
          </Form>
              <div>
                {
                    this.state.friends.map(friend => {
                        return <ul key={friend.id}>
                                    <li>Name: {friend.name}</li>
                                    <li>Phone Number: {friend.phoneNumber}</li>
                                    <li>Group: {friend.group}</li>
                                </ul>
                    })
                }
              </div>
        </div>
    )
  }
}


    // const isEnabled = this.state.name && this.state.phoneNumber && this.state.group
    
    // return (
    //   <div>
    //       <Form inline >
          
    //         <FormGroup>
    //           <Label for="name" hidden>Name</Label>
    //           <Input 
    //               type="text" 
    //               name="name" 
    //               id="exampleName" 
    //               //onChange={this.handleChange}
    //               //value={this.state.name}
    //               ////onSubmit={this.handleSubmit}
    //               placeholder="First and Last Name" 
    //           />
    //         </FormGroup>
    //         {' '}
    //         <FormGroup>
    //           <Label for="phone" hidden>Phone Number</Label>
    //           <Input 
    //               type="text" 
    //               name="phone" 
    //               id="examplePhone" 
    //               //onChange={this.handleChange}
    //               //value={this.state.phoneNumber}
    //               placeholder="Phone ex: 19999999999" 
    //           />
    //         </FormGroup>
    //         {' '}
    //         <FormGroup>
    //           <Label for="select">Select</Label>
    //           <Input 
    //               type="select" 
    //               name="select" 
    //               id="exampleSelect"
    //               //onChange={this.handleChange}>
    //           >
    //             <option>High School</option>
    //             <option>College</option>
    //             <option>Frenemy</option>
    //             <option>Randos</option>
    //             <option>Grace Hopper</option>
    //           </Input>
    //         </FormGroup>
    //         {' '}
    //         <Button type="submit" disabled={isEnabled}>Add a friend</Button>
    //   </Form>

    //         {
    //             this.state.friends.map(friend => {
    //                 return <ul key={friend.id}>
    //                             <li>Name: {friend.name}</li>
    //                             <li>Phone Number: {friend.phoneNumber}</li>
    //                             <li>Group: {friend.group}</li>
    //                         </ul>
    //             })
    //         }

    //     </div>
    // )