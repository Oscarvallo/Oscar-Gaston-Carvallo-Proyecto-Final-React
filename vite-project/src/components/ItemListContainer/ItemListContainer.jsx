/* eslint-disable react/prop-types */
import "./styles.css";
import { Button } from '@mui/material';



const ItemListContainer = ({router, handleConsole}) => {

  return (
    <div className="container">
      {router.map((ruta) => (
        <p key={ruta}>{ruta}</p>
      ))}

      <Button variant="outlined" onClick={()=> handleConsole()}> Consologiame </Button>
    </div>
  );
};

export default ItemListContainer;