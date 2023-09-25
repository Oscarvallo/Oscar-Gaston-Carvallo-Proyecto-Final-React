import React from 'react';
import Item from '../Item/Item'; // Asegúrate de que la ruta sea correcta

const ItemList = ({ items }) => {
  console.log(items)
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ItemList;
