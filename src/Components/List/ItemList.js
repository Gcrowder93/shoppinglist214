import React from 'react';
import EditItem from '../Edit/EditItems';
import './ItemList.css';
export default function ItemList({ newItems, onEditItem, onDeleteItem }) {
  return (
    <div>
      <ol type="checkbox">
        You can <b>edit</b> <i>or</i> <b>delete</b> your items in this list.
        {newItems.map((item) => {
          return (
            <li
              style={{
                listStyleType: 'upper-roman',
                margin: '0 45%',
              }}
              key={item.id}
            >
              <hr
                style={{
                  marginLeft: '-23px',
                  width: '100px',
                }}
              ></hr>
              <div
                className="itemlist"
                style={{
                  alignContent: 'center',
                  textAlign: 'center',
                  width: '200px',
                }}
              >
                <mark>{item.text}</mark>
              </div>
              <br></br>
              <EditItem item={item} onChange={onEditItem} onDeleteItem={onDeleteItem} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
