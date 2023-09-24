import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const requestFakeStoreAPI = () =>
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .catch((err) => console.log(err));

    requestFakeStoreAPI()
      .then((res) => {
        setProducts(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;
