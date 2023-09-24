import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import FilterProducts from "../FilterProducts/FilterProducts";

function ItemListContainer({ setCartItemCount }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("Todos");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const requestFakeStoreAPI = () =>
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .catch((err) => console.log(err));

    requestFakeStoreAPI()
      .then((res) => {
        setProducts(res);
        setIsLoading(false);

        const uniqueCategories = Array.from(new Set(res.map((product) => product.category)));
        setCategories(uniqueCategories);
        setFilteredProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);

    if (newFilter === "Todos") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === newFilter);
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = () => {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    // Por ejemplo, puedes mantener un estado de carrito y agregar el producto a ese estado.
    // Luego, actualiza la cantidad de elementos en el carrito.
    console.log(`Agregando producto al carrito`);
    setCartItemCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div>
        <FilterProducts
          categories={categories}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
      </div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ItemList products={filteredProducts} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
}

export default ItemListContainer;
