const DUMMY_EVENTS = [
    {
        id:'e1',
        title: 'Programming for everyone',
        description:'Everyone can learn to code!Yes, everyone! In this live event,we are going to ',
        location:'Somestreet 25,12345 San Somehwere',
        date:'2021-05-12',
        image:'images/windows.jpg',
        isFeatured:false,
    },
    {
        id:'e2',
        title: 'Networking for introverts',
        description:'We know: Networking is no fun if u are in introvert person.That is why we came ',
        location:'New Wall Street 5, 9876 New Work',
        date:'2021-05-30',
        image:'images/download.png',
        isFeatured:true,
    },
    {
        id:'e3',
        title: 'Networking for extroverts',
        description:'You probably need no help with networking in general.But focusing your energy',
        location:'My Street 12, 10115 Broke City',
        date:'2021-05-30',
        image:'images/qr.png',
        isFeatured:true,
    }
]
export function getFeaturedEvents(){
    return DUMMY_EVENTS.filter(event => event.isFeatured);
}
export function getAllEvents(){
    return DUMMY_EVENTS;
}
export function getFilteredEvents(dateFilter){
    const { year,month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter(event =>{
        const eventDate=new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month -1;
    })
    return filteredEvents;
}
export function getElementById(id){
    return DUMMY_EVENTS.filter(event => event.id === id)[0];
}