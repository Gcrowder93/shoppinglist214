import './App.css';
import Home from './Views/Home';
// import AddItem from './Components/Add/AddItem';
// import ItemList from './Components/List/ItemList';
// import EditItem from './Components/Edit/EditItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">app header</header>
      <h1>Shopping List</h1>
      <Home />
      {/* <AddItem />
      dont need add item, just want to see it on page atm
      <ItemList />
      <EditItem /> */}
      <footer className="App-footer">app footer</footer>
    </div>
  );
}

export default App;
