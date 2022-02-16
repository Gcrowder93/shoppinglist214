import { ListProvider } from './ Context/ListContext';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Views/Home';
import Footer from './Components/Footer/Footer';
// import AddItem from './Components/Add/AddItem';
// import ItemList from './Components/List/ItemList';
// import EditItem from './Components/Edit/EditItems';

function App() {
  return (
    <ListProvider>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </ListProvider>
  );
}

export default App;
