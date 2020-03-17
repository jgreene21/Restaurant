import React from 'react';
import './App.css';
import axios from 'axios';
import { Container, Image } from 'semantic-ui-react';
import MenuForm from './components/MenuForm';
import Menus from './components/Menus';
import Pic from './header.png'

class App extends React.Component {
  state = { menus: [] };

  componentDidMount() {
    axios
    .get("/api/menus")
    .then( (res) => {
      this.setState({ menus: res.data, })
    })
    .catch( (err) => {
      console.log(err)
    })
  }

  addMenu = menuName => {
    axios
    .post('/api/menus', { 
      name: menuName 
    })
    .then( (res) => {
      this.setState({
        menus: [
          { ...res.data, menu_id: res.data.id, items: [] },
          ...this.state.menus
        ]
      });
    })
    .catch(e => {
      console.log(e);
    });
};

addItem = (menuId, itemName, ItemPrice) => {
  axios
    .post(`api/menus/${menuId}/items`, {
      name: itemName,
      price: ItemPrice
    })
    .then(res => {
      console.log(res);
      const newMenus = this.state.menus.map(menu => {
        if (menu.menu_id != menuId) return menu;
        else return { ...menu, items: [...menu.items, res.data] };
      });
      this.setState({
        menus: newMenus
      });
    })
    .catch(e => {
      console.log(e);
    });
};

  updateMenu = (id) => {
    axios
    .patch(`/api/menus/${id}`, {
    })
    .then((res) => {
     console.log(res)
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  deleteMenu = (id) => {
    axios
    .delete(`api/menus/${id}`)
    .then((res)=>{
      const newMenus= this.state.menus.filter( menu=> menu.id !== id)
      this.setState({
        menus:newMenus
      })
    })
    .catch((err)=>{
      console.log(err)
    });
  }

  render(){
    return (
      <Container style={{ padding: "30px 0", }}>
        <Image src={Pic} fluid/>
        <hr/>
        <Menus addItem={this.addItem} menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
        <hr/>
        <MenuForm addMenu={this.addMenu} />
      </Container>
    )};
  };

export default App;
