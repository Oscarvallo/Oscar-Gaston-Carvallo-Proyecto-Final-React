import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API de fakestoreapi
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Cuando se complete la solicitud, actualiza el estado con los datos de la API
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList items={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
