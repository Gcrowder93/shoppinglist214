import React from 'react';
import ItemDetail from '../Detail/ItemDetail';

export default function ItemList({ newItem, onEditItem, onDeleteItem }) {
  return (
    <div>
      {/* <ul>
        {newItem.map((item) => (
          <li key={item.id}>
            <ItemDetail item={item} onEditItem={onEditItem} onDeleteItem={onDeleteItem} />
          </li>
        ))}
      </ul> */}
      These are your items that you can edit or delete
      {/* <EditItem /> */}
    </div>
  );
}
