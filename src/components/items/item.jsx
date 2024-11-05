import React, { useState } from 'react';
import style from './item.module.css';
import checkImg from '../../assets/img/check.png';
import editImg from '../../assets/img/pen.png';
import removeImg from '../../assets/img/remove.png';
const Item = ({ title, id, getData, createdTime }) => {
  const [isEditing, setIsEditing] = useState(false); 
  const [newTitle, setNewTitle] = useState(title);
  const deleteItem = () => {
    getData((prevData) => prevData.filter((item) => item.id !== id));
  };
  const done = (e) => {
    const h2Element = e.target.closest(`.${style.todoCard}`).querySelector('h2');
    if (h2Element.dataset.checked === 'true') {
      h2Element.style.textDecoration = "none";
      h2Element.style.color = "#000";
      h2Element.dataset.checked = 'false';
    } else {
      h2Element.style.textDecoration = "line-through";
      h2Element.style.color = "gray";
      h2Element.dataset.checked = 'true';
    }
  };
  const editItem = () => {
    setIsEditing(true);
  };
  const saveEdit = () => {
    getData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item
      )
    );
    setIsEditing(false);
  };
  return (
    <div id={id} className={style.todoCard}>
      <div className={style.text__content}>
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={saveEdit}
            autoFocus
            className={style.editinput}
          />
        ) : (
          <h2 data-checked="false">{title}</h2>
        )}
        <p>{createdTime}</p>
      </div>
      <div className={style.btns}>
        <button onClick={done}>
          <img src={checkImg} alt="Done" />
        </button>
        <button onClick={editItem}>
          <img src={editImg} alt="Edit" />
        </button>
        <button onClick={deleteItem}>
          <img src={removeImg} alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export default Item;
