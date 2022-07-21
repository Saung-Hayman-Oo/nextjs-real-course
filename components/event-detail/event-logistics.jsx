import React from 'react'
import { AddressIcon } from '../icons/address-icon'
import { DateIcon } from '../icons/date-icon'
import LogisticsItem from './logistics-item'

function EventLogistics(props) {
    const { image,date,location,imageAlt}=props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year: "numeric"
    })
    const formattedAddress = location;
  return (
    <section className='container mx-auto px-10 py-10 flex items-center bg-stone-700 rounded-md w-1/3'>
        <div>
            <img className='rounded-full w-52 h-52 border-2 border-white' src={`/${image}`} alt={imageAlt} />
        </div>
        <ul className='text-left ml-20 text-green-600'>
            <LogisticsItem icon={DateIcon}>
             <time>{humanReadableDate}</time>
            </LogisticsItem>
            <LogisticsItem icon={AddressIcon}>
             <address>{formattedAddress}</address>
            </LogisticsItem>
        </ul>
    </section>
  )
}

export default EventLogistics