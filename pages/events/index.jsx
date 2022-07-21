import React from 'react'
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import Layout from '../../components/layout/layout'
import { getAllEvents } from '../../dummy-data'

function AllEventsPage() {
    const AllEvents = getAllEvents();
  return (
   <Layout>
     <div className='container mx-auto' >
        <h1 className='text-2xl pt-5 text-center font-bold'>All Events</h1>
        <EventsSearch/>
        <EventList items={AllEvents}/>
    </div>
   </Layout>
  )
}

export default AllEventsPage