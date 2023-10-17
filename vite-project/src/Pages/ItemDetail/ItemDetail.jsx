import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { collection, doc, getDoc } from 'firebase/firestore'; // Importa las funciones necesarias para Firebase
import './itemDetail.css';
import { useCart } from '../../components/CartContext/CartContext';
import { db } from '../../db/db'; // Asegúrate de importar tu configuración de Firebase

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Obtiene una referencia al documento de producto en tu base de datos
        const productRef = doc(db, 'products', id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          // Si el documento existe en la base de datos, obtén los datos
          setProduct(productSnap.data());
        } else {
          console.log('El producto no existe');
        }
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Llama a la función addToCart para agregar el producto al carrito
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className='itemDetailContainer'>
      <Layout> 
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
      </Layout>
    </div>
  );
};

export default ItemDetail;
