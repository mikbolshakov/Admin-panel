import React from "react";
import Item from "./Item.js";

function ItemsList(props) {
  return (
    <ul className="ui-list">
      {props.items.map((item) => (
        <li className="ui-item-list" key={item.id}>
          <Item info={item} />
          <button
            className="item-button"
            onClick={() => props.onDickClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemsList