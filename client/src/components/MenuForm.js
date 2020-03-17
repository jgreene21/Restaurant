import React from 'react';
import { Form, } from "semantic-ui-react";

class MenuForm extends React.Component {
  state = { name: "", };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name } = this.state
    this.props.addMenu(name)
    this.setState({ name: '' })
  }

  render() {
    const { name } = this.state

    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder='Menu Name'
              name='name'
              value={name}
              onChange={this.handleChange}
            />

            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
    )
  }
}


export default MenuForm;