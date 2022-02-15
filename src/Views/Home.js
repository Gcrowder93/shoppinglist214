import AddItem from '../Components/Add/AddItem';
import EditItem from '../Components/Edit/EditItems';
import ItemList from '../Components/List/ItemList';

const Home = () => {
  return (
    <div className="homediv">
      <AddItem />
      <ItemList />
      <EditItem />
    </div>
  );
};

export default Home;
