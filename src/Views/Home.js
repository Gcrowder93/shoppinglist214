import { useReducer } from 'react';
import AddItem from '../Components/Add/AddItem';
import ItemList from '../Components/List/ItemList';

const initialItems = [{ id: 0, text: 'hello' }];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: items.length + 1,
          text: action.text,
        },
      ];
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Home() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const add = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 0,
      text,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <>
      <h1>Shopping List</h1>
      <AddItem addItem={add} newItems={items} />
      <ItemList newItems={items} onDeleteItem={handleDelete} />
    </>
  );
}
