import logo from './logo.svg';
import './App.css';
//import UsersList from './components/UsersList';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';


function App() {
  //return <UsersList />;
  return (
    <>
      <AddProduct />
      <ProductList />
    </>);
}


export default App;
