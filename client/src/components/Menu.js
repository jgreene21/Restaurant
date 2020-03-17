import React from "react";
import { Accordion, Icon, Button, } from "semantic-ui-react";
import ItemForm from "./ItemForm";

const Menu = ({
  name,
  menu_id,
  items,
  handleAccordionClick,
  accordionIndex,
  activeIndex,
  addItem,
  updateMenu,
  deleteMenu
}) => {
  return (
    <h2>
      <Accordion.Title
        active={activeIndex === accordionIndex}
        index={accordionIndex}
        onClick={handleAccordionClick}
      >
        <Icon name="dropdown" />
      {`${name}`}
      </Accordion.Title>
      <Accordion.Content active={activeIndex === accordionIndex}>
        <h4>{items.map( item => (
          <div key={item.id}>
            {`${item.name}`}
          </div>
        ))}</h4>
        <ItemForm menuId={menu_id} addItem={addItem} />
      </Accordion.Content >
        <Button
          icon
          color="red"
          size="tiny"
          onClick={() => deleteMenu(menu_id)}
          style={{ marginLeft: "15px", }}>
          <Icon name="trash" />
        </Button>
        <Button
          icon
          color="blue"
          size="tiny"
          onClick={() => updateMenu(menu_id)}
          style={{ marginLeft: "15px", }}>
          <Icon name="pencil" />
        </Button>
        </h2>
  )};

    export default Menu; 


