import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import './itemDetail.css';
import { useCart } from '../../components/CartContext/CartContext';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Realiza una solicitud GET a la API de fakestoreapi para obtener detalles del producto por ID
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        // Cuando se complete la solicitud, actualiza el estado con los detalles del producto
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener detalles del producto:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    // Llama a la función addToCart para agregar el producto al carrito
    addToCart(product);
  };

  return (
    <div className='itemDetailContainer'>
      <Layout />
      <div className='cardItemDetail'>
        {product ? (
          <div className='cardContainer'>
            <img className='imgCardItemDetail' src={product.image} alt={product.title} />
            <h2 className='titleCardItemDetail'>{product.title}</h2>
            <h4 className='descriptionCardItemDetail'>{product.description}</h4>
            <h3 className='priceCardItemDetail'>${product.price}</h3>
            <button className="agregarButton" onClick={handleAddToCart}>
              Agregar producto
            </button>
          </div>
        ) : (
          <p>Cargando detalles del producto...</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
