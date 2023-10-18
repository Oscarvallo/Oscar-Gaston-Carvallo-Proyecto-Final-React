import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import './home.css'

const Home = () => {


  return (
    <div className='containerHome'>
    <Layout>
      <div className='homeProducts'>
      <ItemListContainer/>
      </div>
      </Layout>
    </div>
  );
};

export default Home;
