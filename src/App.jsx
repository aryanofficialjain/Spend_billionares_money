import React, { useState } from 'react';
import Man from './components/Man';
import Things from './components/Things';
import data from "./asset.json";
import Data from './man.json';
import { useSelector } from 'react-redux';
import Total from './components/Total';

function App() {
  const [asset, setAsset] = useState(data);
  const [manData, setManData] = useState(Data);
  const items = useSelector(state => state.cart);
  
  // Compute total price by summing up prices of all items in the cart
  const total = items.reduce((total, item) => total + Number(item.price), 0);


  return (
    <>
      <Man Mandata={manData} total={total}/>
      <Total items={items} total={total}/>
      <Things asset={asset} total={total}/>
    </>
  );
}

export default App;
