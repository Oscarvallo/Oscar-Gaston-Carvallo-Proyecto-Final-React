import React, { useEffect, useState } from "react";
import { db } from "../../db/db";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, where, query, getDocs} from "firebase/firestore"

const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
 const {idCategory} = useParams();

  useEffect(() => {
    const productsRef = collection(db,"products");
    const categoryQuery = idCategory && query(productsRef,where ("category", "==",idCategory))
    const queryRef= idCategory? categoryQuery : productsRef
    getDocs(queryRef).then ((response)=> {
      const productsData = response.docs.map((productDoc)=>({
        id: productDoc.id,
        ...productDoc.data()
      }))
      setProducts([...productsData])
      setIsLoading(false)

    })

  }, [idCategory]);



  return (
    <div>


      {isLoading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList items ={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
