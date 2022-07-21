import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getElementById } from '../../dummy-data';

function EventDetailPage() {
   const router= useRouter();
   const eventId= router.query.eventid;
   const event = getElementById(eventId);
   console.log(event)
   if(!event){
    return <p>No Element Found!</p>
   }
  return (
    <Fragment>
       
        <EventSummary title={event.title}/>
        <EventLogistics date={event.date} image={event.image} location={event.location} imageAlt={event.title} />
        <EventContent>
            <p>
                {event.description}
            </p>
        </EventContent>
    </Fragment>
  )
}

export default EventDetailPage