// edit and delete buttons here for items

import React, { useState } from 'react';

export default function EditItem({ onEditItem, onDeleteItem }) {
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
      {/* <input
        className="edititem"
        placeholder="edit item"
        value={newEditItem}
        onChange={(e) => setEditItem(e.target.value)}
      /> */}
      <div onClick={handleClick}>
        <button
          className="editbutton"
          type="edit"
          value={newEditItem}
          //   onClick={() => setEditItem(false)}
        >
          Edit
        </button>
      </div>
      <button className="deletebutton" type="delete" value={newDeleteItem}>
        Delete
      </button>
    </form>
  );
}
