import React from 'react'
import Layout from '../../components/Layout/Layout'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

const Products = () => {
  return (
    <div>  <Layout>
    <h1>Todos los Productos</h1>  
    <ItemListContainer/>
    </Layout>
    </div>
  )
}

export default Products