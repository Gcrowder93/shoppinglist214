import React, { useState } from 'react';

export default function EditItem({ item, onDeleteItem, onChange }) {
  const [newEditItem, setEditItem] = useState(false);

  return (
    <form>
      <div>
        {newEditItem && (
          <>
            <input
              value={item.text}
              onChange={(e) => {
                onChange({ ...item, text: e.target.value });
              }}
            />

            <button
              style={{
                borderRadius: '5px',
              }}
              onClick={() => setEditItem(false)}
            >
              Save
            </button>
          </>
        )}
        {!newEditItem && (
          <>
            {/* {item.text} */}
            <button
              style={{
                borderRadius: '5px',
              }}
              onClick={() => setEditItem(true)}
            >
              Edit
            </button>
          </>
        )}
        <button
          type="delete"
          style={{
            borderRadius: '5px',
          }}
          onClick={() => onDeleteItem(item.id)}
        >
          Delete
        </button>
      </div>
    </form>
  );
}
