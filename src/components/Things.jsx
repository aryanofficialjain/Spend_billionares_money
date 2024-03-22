import React from 'react';
import { useDispatch } from 'react-redux';
import { additem } from "../redux/Slice/Slice";

const Things = ({ asset, total }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (name, price) => {
    dispatch(additem({ name, price }));
  };

  return (
    <>
        <div className=' p-2 mt-8 flex flex-col md:flex-row items-center justify-evenly flex-wrap text-center'>
          {asset.map((item, index) => (
            <div key={index} className='bg-black text-white p-4 m-4 rounded'>
              <img src={item.img} width="300px" height="300px" alt="" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button className='bg-white text-black py-2 px-3 rounded mt-3' onClick={() => handleAddToCart(item.name, item.price)}>Buy This</button>
            </div>

))}


      </div>

    </>
  );
};

export default Things;
