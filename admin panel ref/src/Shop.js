import React, { useState } from "react";
import uuid from "react-uuid";
import ItemsList from "../comp/ItemsList.js";
import AddItem from "../comp/AddItem.js";

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

  function handleDickClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleSetterName(e) {
    setName(e.target.value);
  }

  function handleSetterDesc(e) {
    setDesc(e.target.value);
  }

  return (
    <>
      <AddItem
        onFormSubmit={handleFormSubmit}
        name={name}
        onSetterName={handleSetterName}
        desc={desc}
        onSetterDesc={handleSetterDesc}
      />

      <div>
        {items.length === 0 && (
          <p className="ui-title">Добавьте первый товар</p>
        )}
      </div>
      <ItemsList items={items} onDickClick={handleDickClick} />
    </>
  );
}
