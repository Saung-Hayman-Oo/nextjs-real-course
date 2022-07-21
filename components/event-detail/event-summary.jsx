import React from 'react'

function EventSummary({title}) {
  console.log(title); 
  return (
    <section>
        <h1 className='text-3xl text-green-600 font-bold text-center my-10'>{title}</h1>
    </section>
  )
}

export default EventSummary