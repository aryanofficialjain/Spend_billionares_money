import React from 'react'

const Total = ({items, total}) => {
  return (
    <>
    <div className='text-center mt-6'>
        {/* <h1>Total Amount: ${total.toFixed(2)}</h1> */}
        <p>Total items: {items.length}</p>
      </div>
    </>
  )
}

export default Total