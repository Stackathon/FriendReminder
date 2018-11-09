import React from 'react'
import './SMSForm.css'

export default class SMSForm extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            message: {
                to: '',
                body: ''
            },
            submitting: false,
            error: false
        }

        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
    }

    render () {
        return (
            <form>
                <div>
                    <label htmlFor="to">To:</label>
                    <input
                        type="tel"
                        name="to"
                        id="to"
                        value={this.state.message.to}
                        onChange={this.onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                        name="body" 
                        id="body"
                        value={this.state.message.body}
                        onChange={this.onHandleChange}
                    />
                </div>
                <button type="submit">Send message</button>
            </form>
        )
    }
}