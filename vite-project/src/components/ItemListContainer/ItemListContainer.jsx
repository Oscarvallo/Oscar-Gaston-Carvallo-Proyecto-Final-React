import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../db/db';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { idCategory } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(idCategory || '');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, 'products');
        let queryRef = productsRef;

        if (selectedCategory) {
          queryRef = query(productsRef, where('category', '==', selectedCategory));
        }

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

    const fetchCategories = async () => {
      try {
        const productsRef = collection(db, 'products');
        const querySnapshot = await getDocs(productsRef);
        const uniqueCategories = new Set();

        querySnapshot.forEach((doc) => {
          const product = doc.data();
          uniqueCategories.add(product.category);
        });

        const categoriesArray = Array.from(uniqueCategories);
        setCategories(categoriesArray);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, [selectedCategory]);

  return (
    <div>
      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <div  className=''>
          <select
            value={selectedCategory}
            onChange={(e) => {
              const selectedCategory = e.target.value;
              setSelectedCategory(selectedCategory);
            }}
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ItemList items={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
