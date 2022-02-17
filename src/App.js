import { ListProvider } from './ Context/ListContext';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Views/Home';
import Footer from './Components/Footer/Footer';

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
