import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="name" hidden>Name</Label>
          <Input type="text" name="name" id="exampleName" placeholder="First and Last Name" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="phone" hidden>Phone Number</Label>
          <Input type="text" name="phone" id="examplePhone" placeholder="Phone ex: 19999999999" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>High School</option>
            <option>College</option>
            <option>Frenemy</option>
            <option>Randos</option>
            <option>Grace Hopper</option>
          </Input>
        </FormGroup>
        {' '}
        <Button>Add</Button>
      </Form>
    );
  }
}