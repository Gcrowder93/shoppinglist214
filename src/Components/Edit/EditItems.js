// edit and delete buttons here for items
import ItemList from '../List/ItemList';
import React, { useState } from 'react';
// import ItemDetail from '../Detail/ItemDetail';

export default function EditItem({ item, onEditItem, onDeleteItem }) {
  const [newEditItem, setEditItem] = useState('');
  const [newDeleteItem, setDeleteItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditItem('');
    setDeleteItem('');
    onEditItem(newEditItem);
    onDeleteItem(newDeleteItem);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setEditItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div onClick={handleClick}>
        <h2>{ItemList.id}</h2>
        {/* <h3>{ItemDetail.id}</h3> */}
        <button type="edit" onSubmit={() => onEditItem(item.id)}>
          Edit
        </button>
        <button type="delete" onSubmit={() => onDeleteItem(item.id)}>
          Delete
        </button>
      </div>
    </form>
  );
}
