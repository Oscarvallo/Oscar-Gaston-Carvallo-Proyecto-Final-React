import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../db/db';
import ItemList from '../../components/ItemList/ItemList';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const productsRef = collection(db, 'products');
        const queryRef = query(productsRef, where('category', '==', categoryId));
        const querySnapshot = await getDocs(queryRef);
        const productsData = [];

        querySnapshot.forEach((doc) => {
          const product = doc.data();
          productsData.push({ id: doc.id, ...product });
        });

        setProducts(productsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]);

  return (
    <div>
        <Layout>
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <div>
          <h2>Productos de la categoría: {categoryId}</h2>
          <ItemList items={products} />
        </div>
      )}
       <Link to="/" className="back-button">Volver al menú principal</Link>
       </Layout>
    </div>
    
  );
};

export default CategoryPage;

