import Link from "next/link";
import { AddressIcon } from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import { DateIcon } from "../icons/date-icon";
import Button from "../ui/button";
function EventItem(props){
    const { title,image,date,location,id }=props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year: "numeric"
    })
    const formattedAddress = location.replace(',','/n');
    const exploreLink = `/events/${id}`;
    return <li className="grid grid-cols-2 gap-10 p-10 my-10 shadow rounded overflow-hidden bg-white ">
        <img className="w-full object-cover h-60 " src={'/'+image} alt="" />
        <div className="flex flex-col justify-around"> 
            <div><h2 className="text-xl font-bold my-5">{title}</h2></div>
            <div className="flex">
                <DateIcon />
                <time className="ml-3">{humanReadableDate}</time>
            </div>
            <div className="flex">
                <AddressIcon />
                <address className="ml-3">{formattedAddress}</address>
            </div>
            <div className="flex justify-end">
                <Button link={exploreLink}>
                    <span className="mr-2">Explore Event</span>
                    <span className="">
                        <ArrowRightIcon />
                    </span>
                </Button>
            </div>
        </div>
    </li>
}
export default EventItem;