import { createContext, useContext } from 'react';
import { useReducer } from 'react';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const initialItems = [{ id: 0, text: 'hello' }];
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

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
      case 'edit': {
        return items.map((item) => {
          if (item.id === action.task.id) {
            return action.task;
          }
          return item;
        });
      }
      case 'deleted': {
        return items.filter((item) => item.id !== action.id);
      }
      default: {
        throw Error(`Unknown action: ${action.type}`);
      }
    }
  }

  const add = (text) => {
    dispatch({
      type: 'added',
      id: items.length + 0,
      text,
    });
  };

  const edit = (task) => {
    dispatch({
      type: 'edit',
      task,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <ListContext.Provider value={{ items, add, edit, handleDelete }}>
      {children}
    </ListContext.Provider>

    // <ListContext.Provider value={{ items: [{ id: 0, text: 'hello', done: false }] }}>
    //   {children}
    // </ListContext.Provider>
  );
};

export default ListProvider;

export const useList = () => {
  const context = useContext(ListContext);

  if (!context)
    throw new Error('You must wrap your component with a ListProvider in order to call useList');

  return context;
};
