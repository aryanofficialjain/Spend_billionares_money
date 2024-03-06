import React, { useState, useEffect } from 'react';

const Man = ({ Mandata, total }) => {
  const [worth, setWorth] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    console.log(worth)
    console.log(total)
    setLeft(Number(worth) - Number(total));
  }, [worth, total]);

  return (
    <>
      <div className='text-center gap-4 flex items-center justify-center'>
        <button className='flex p-2 items-center text-center justify-center gap-4'>
          {Mandata.map((person, index) => (
            <div key={index} onClick={() => setWorth(person.net_worth)} className='bg-black text-white p-3 rounded'>
              <h1>{person.name}</h1>
            </div>
          ))}
        </button>
      </div>

      <div className='text-center text-3xl mt-8'>
        <h1>NET WORTH: ${worth}</h1><br/>
        {worth && total ? (
          <h3>LEFT ${left}</h3>
        ) : (
          <p>Spend Money</p>
        )}
      </div>
    </>
  );
}

export default Man;
