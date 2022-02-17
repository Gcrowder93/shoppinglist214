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
        style={{
          width: '200px',
          borderRadius: '5px',
          textAlign: 'center',
          fontStyle: 'italic',
        }}
        placeholder="add new item"
        value={newItem}
        required
        onChange={(e) => setNewItem(e.target.value)}
      />
      <br></br>
      <button
        style={{
          borderRadius: '5px',
        }}
        type="submit"
      >
        Add Item
      </button>
    </form>
  );
}
