import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../ItemList/ItemList";
import './itemlistcontainer.css'

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // Estado para la categoría seleccionada

  useEffect(() => {
    // Realiza una solicitud GET a la API de fakestoreapi para obtener productos y categorías
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Cuando se complete la solicitud, actualiza el estado con los datos de la API
        setProducts(response.data);
        setIsLoading(false);

        // Obtiene las categorías únicas de los productos
        const uniqueCategories = [...new Set(response.data.map((product) => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
      });
  }, []);

  // Función para filtrar los productos por categoría seleccionada
  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Agrega un menú desplegable para seleccionar una categoría */}
      <select className= "categorySelect"onChange={(e) => filterProductsByCategory(e.target.value)}>
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList items={selectedCategory ? products.filter((product) => product.category === selectedCategory) : products} />
      )}
    </div>
  );
};

export default ItemListContainer;
 