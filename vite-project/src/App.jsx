
import "./App.css";

import NavSearch from "./components/Navbar/Navbar";
import Cart from './components/CartWidget/CartWidget'
import React, { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";





function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {

    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockData);
        }, 2000);
      });
    };

    fetchData().then((data) => {
      setItems(data);
    });
  }, []); 
  return (
    <div>
      <div className="navbar">
      <NavSearch />
        <Cart/>
        
      </div>
      <div>
        <ItemListContainer />
       

      </div>

    </div>
  )
}

export default App;
