import React, {Component} from 'react'
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
    const isEnabled = this.state.name && this.state.phoneNumber && this.state.group
    
    return (
      <div>
            <form onSubmit={this.handleSubmit}>

                    <label htmlFor='name'>Name: </label>
                    <input
                        type='text'
                        name='name'
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder='Name is required'
                    />

                    <label htmlFor='phoneNumber'>Phone Number: </label>
                    <input
                        type='text'
                        name='phoneNumber'
                        onChange={this.handleChange}
                        value={this.state.phoneNumber}
                        placeholder='Phone Number is required'
                    />

                    <label htmlFor='group'>Group: </label>
                    <select onChange={this.handleChange}>
                        <option value="college">College</option>
                        <option value="co-worker">Co-worker</option>
                        <option value="frenemy">Frenemy</option>
                        <option value="randos">Randos</option>
                        <option value="high school">High School</option>
                        <option value="gracehopper">Grace Hopper</option>
                    </select>

                    <button type="submit" disabled={isEnabled}>Submit</button>
            </form>

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
    )
  }
}