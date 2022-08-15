import React, { useState } from "react";
import Item from "./Item.js";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  function handleFormSubmit(e) {
    const item = { name: name, desc: desc, id: uuid() };
    setItems([...items, item]);
    e.preventDefault();
    setName("");
    setDesc("");
  }

  function handleClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Название: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>

        <div>
          <label htmlFor="desc">Описание: </label>
          <input
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>

        <div className="form-footer">
          <div className="validation">
            {name === "" && `Заполните название товара`}
            <br />
            {desc === "" && `Заполните описание товара`}
          </div>
          <input
            type="submit"
            className="ui-button"
            value="Добавить"
            disabled={name === "" || desc === ""}
          />
        </div>
      </form>

      <div>
        {items.length === 0 && (
          <p className="ui-title">Добавьте первый товар</p>
        )}
      </div>

      <ul className="ui-list">
        {items.map((item) => (
          <li className="ui-item-list" key={item.id}>
            <Item info={item} />
            <button
              className="item-button"
              onClick={() => handleClick(item.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
