import React, { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    onAddItem(newItem);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="additem"
        placeholder="add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="addbutton" type="submit" onSubmit={setNewItem}>
        Add Item
      </button>
    </form>
  );
}
