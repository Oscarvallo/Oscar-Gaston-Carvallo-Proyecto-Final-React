import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout'
import ItemList from '../../components/ItemList/ItemList';
import Item from '../../components/Item/Item';
import axios from 'axios';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // Agrega esta línea
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API de fakestoreapi
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Cuando se complete la solicitud, actualiza el estado con los datos de la API
        setProductos(response.data);
        setIsLoading(false); // Marca isLoading como falso cuando la carga ha terminado
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  return (
    <Layout>
      <ItemList items={productos}>
       
          
      </ItemList>
    </Layout>
  );
};

export default Home;
