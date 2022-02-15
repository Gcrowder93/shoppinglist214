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

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        className="edititem"
        placeholder="edit item"
        value={newEditItem}
        onChange={(e) => setEditItem(e.target.value)}
      /> */}
      <button className="editbutton" type="submit" value={newEditItem}>
        Edit
      </button>
      <button className="deletebutton" type="submit" value={newDeleteItem}>
        Delete
      </button>
    </form>
  );
}
