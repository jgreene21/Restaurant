import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import MenuForm from './components/MenuForm';
import Menus from './components/Menus';

class App extends React.Component {
  state = { menus: [], };

  componentDidMount() {
    // menu make a call to our rails server to get Items
    axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data, })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addItem = (name) => {
    // menu make api call to rails server to add item
    // menu update state
  }

  updateMenu = (id) => {
    // menu make api call to update menu
    // menu update state
  }

  deleteMenu = (id) => {
    // menu make api call to delete menu
    // menu remove it from state
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <MenuForm addItem={this.addItem} />
        <br />
        <br />
        <Menus
          menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
      </Container>
    );
  }
}

export default App;
