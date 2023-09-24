import "./App.css";
import React, { useState, useEffect } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavSearch from "./components/Navbar/Navbar";
import Cart from './components/CartWidget/CartWidget';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <div>
      <div className="navbar">
        <NavSearch cartItemCount={cartItemCount} />
        <Cart itemCount={cartItemCount} />
      </div>
      <div>
        <ItemListContainer setCartItemCount={setCartItemCount} />
      </div>
    </div>
  );
}

export default App;
