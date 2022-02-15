import AddItem from '../Components/Add/AddItem';
import ItemList from '../Components/List/ItemList';
// import EditItem from '../Components/Edit/EditItems';

const Home = () => {
  return (
    <div className="homediv">
      <AddItem />
      <ItemList />
      {/* <EditItem /> */}
    </div>
  );
};

export default Home;
