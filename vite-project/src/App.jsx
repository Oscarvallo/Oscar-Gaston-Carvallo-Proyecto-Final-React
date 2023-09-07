import { Navbar } from "react-bootstrap";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavSearch from "./components/Navbar/Navbar";
import Cart from './components/CartWidget/CartWidget'



function App() {

  return (
    <div>
      <div className="navbar">
        <ItemListContainer />
        <Cart/>
        <NavSearch />
      
      </div>

    </div>
  )
}

export default App;
