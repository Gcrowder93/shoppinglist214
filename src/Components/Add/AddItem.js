import React, { useState } from 'react';

export default function AddItem({ addItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    addItem(newItem);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="additem"
        placeholder="add item"
        value={newItem}
        required
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
