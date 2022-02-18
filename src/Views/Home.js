// import { useReducer } from 'react';
import { useList } from '../ Context/ListContext';
import AddItem from '../Components/Add/AddItem';
import ItemList from '../Components/List/ItemList';

export default function Home() {
  const { items, add, edit, handleDelete, clear } = useList();

  return (
    <>
      <h1>Shopping List</h1>
      <AddItem addItem={add} newItems={items} />
      <ItemList newItems={items} onEditItem={edit} onDeleteItem={handleDelete} clear={clear} />
    </>
  );
}
