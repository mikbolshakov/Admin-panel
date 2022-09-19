import React from "react";

function AddItem(props) {
  return (
    <>
      <form onSubmit={props.onFormSubmit}>
        <div>
          <label htmlFor="name">Название: </label>
          <input
            type="text"
            id="name"
            value={props.name}
            onChange={props.onSetterName}
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>

        <div>
          <label htmlFor="desc">Описание: </label>
          <input
            type="text"
            id="desc"
            value={props.desc}
            onChange={props.onSetterDesc}
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>

        <div className="form-footer">
          <div className="validation">
            {props.name === "" && `Заполните название товара`}
            <br />
            {props.desc === "" && `Заполните описание товара`}
          </div>
          <input
            type="submit"
            className="ui-button"
            value="Добавить"
            disabled={props.name === "" || props.desc === ""}
          />
        </div>
      </form>
    </>
  );
}

export default AddItem