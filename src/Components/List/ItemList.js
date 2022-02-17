import React from 'react';
import EditItem from '../Edit/EditItems';

export default function ItemList({ newItems, onEditItem, onDeleteItem }) {
  return (
    <div>
      <ul>
        These are your items that you can edit or delete
        {newItems.map((item) => {
          return (
            <li key={item.id}>
              <hr
                style={{
                  width: 75,
                }}
              ></hr>

              {item.text}
              <br></br>
              <EditItem item={item} onChange={onEditItem} onDeleteItem={onDeleteItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
