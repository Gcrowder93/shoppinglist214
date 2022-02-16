import React, { useState } from 'react';

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
        <button type="edit" onSubmit={() => onEditItem(item.id)}>
          Edit
        </button>
        <button type="delete" onClick={() => onDeleteItem(onDeleteItem)}>
          Delete
        </button>
      </div>
    </form>
  );
}
