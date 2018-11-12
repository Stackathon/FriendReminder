import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './SMSForm.css'

export default class SMSForm extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            friends: [],
            group: '',
            submitting: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    }

    async componentDidMount () {
        const friends = await axios.get('/api/friends')
        this.setState({
            friends: friends.data
        })
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();

        const filteredFriends = this.state.friends.filter(friend => friend.group === this.state.group)
        const filteredNumbers = filteredFriends.map(friend => friend.phoneNumber)
        this.setState({ 
            submitting: true 
        });
        fetch('/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(filteredNumbers)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({ 
                error: false,
                submitting: false,
              });
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
    }

    render () {
        return (    
            <div>
                <label htmlFor="group"><strong>Hmmmm...who shall we remind today?</strong></label>{' '}
                <select name="group" value={this.state.group} onChange={this.handleChange}>
                    <option>High School</option>
                    <option>College</option>
                    <option>Frenemy</option>
                    <option>Randos</option>
                    <option>Grace Hopper</option>
                </select>
                <br />
                <Button tag={Link} to={`/responses`} type="submit" disabled={this.state.submitting} onClick={this.onSubmit} color="info" size="lg" block> TEXT AWAAAAY!</Button>
            </div>
        )
    }
}




//THIS IS WORKING!!!!!

// import React from 'react'
// import './SMSForm.css'

// export default class SMSForm extends React.Component {
//     constructor (props) {
//         super(props) 
//         this.state = {
//             message: {
//                 to: '',
//                 body: ''
//             },
//             submitting: false,
//             error: false
//         }

//         this.onHandleChange = this.onHandleChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     onHandleChange(event) {
//         const name = event.target.getAttribute('name');
//         this.setState({
//           message: { ...this.state.message, [name]: event.target.value }
//         });
//     }

//     onSubmit(event) {
//         event.preventDefault();
//         this.setState({ submitting: true });
//         fetch('/api/messages', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(this.state.message)
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.success) {
//               this.setState({
//                 error: false,
//                 submitting: false,
//                 message: {
//                   to: '',
//                   body: ''
//                 }
//               });
//             } else {
//               this.setState({
//                 error: true,
//                 submitting: false
//               });
//             }
//           });
//     }

//     render () {
//         return (
//             <form
//             onSubmit={this.onSubmit}
//             className={this.state.error ? 'error sms-form' : 'sms-form'}
//             >
//                 <div>
//                     <label htmlFor="to">To:</label>
//                     <input
//                         type="tel"
//                         name="to"
//                         id="to"
//                         value={this.state.message.to}
//                         onChange={this.onHandleChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="body">Body:</label>
//                     <textarea
//                         name="body" 
//                         id="body"
//                         value={this.state.message.body}
//                         onChange={this.onHandleChange}
//                     />
//                 </div>
//                 <button type="submit" disabled={this.state.submitting}>
//                     Send message
//                 </button>
//             </form>
//         )
//     }
// }