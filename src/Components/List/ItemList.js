import React from 'react';
import EditItem from '../Edit/EditItems';

export default function ItemList({ newItems, onEditItem, onDeleteItem }) {
  return (
    <div>
      <ol type="checkbox">
        You can <b>edit</b> <i>or</i> <b>delete</b> your items
        {newItems.map((item) => {
          return (
            <li
              style={{
                listStyleType: 'upper-roman',
                margin: '0 40%',
              }}
              key={item.id}
            >
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
      </ol>
    </div>
  );
}
