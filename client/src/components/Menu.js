import React from 'react';
import axios from 'axios'
import { Checkbox, Header, Button, Icon, } from "semantic-ui-react";

export default class Menu extends React.Component {
  state = {
    items: []
  }
  componentDidMount() {
    axios.get(`/api/menus/${this.props.id}/items`)
    .then( res => {
      console.log(res)
      this.setState({ items: res.data, })
    })
    .catch( err => {
      console.log(err)
    })
  }
  render() {
    const { id, complete, name, updateMenu, deleteMenu } = this.props
    return (
      <div style={styles.flex}>
        <div style={styles.flex}>
          <Checkbox
            defaultChecked={complete}
            onClick={() => updateMenu(id)}
          />
          <div style={complete ? styles.complete : {}} className="center">
            <Header as="h2" style={{ marginLeft: "15px", }}>{name}</Header>
          </div>
        </div>
        <Button
          icon
          color="red"
          size="tiny"
          onClick={() => deleteMenu(id)}
          style={{ marginLeft: "15px", }}
        >
          <Icon name="trash" />

        

        </Button>
        {this.state.items.map( i => i.name)}
      </div>
    )
  }
}


const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};
