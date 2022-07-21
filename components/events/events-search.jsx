import Button from "../ui/button"

function EventsSearch(props){
    return (
        <form action="" className="bg-white shadow rounded px-5 py-2">
            <div className="flex justify-around items-center">
                <div>
                    <label htmlFor="year">Year</label>
                    <select className="ml-3 p-2 rounded-lg" name="year" id="year">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="month">Month</label>
                    <select className="ml-3 p-2 rounded-lg" name="month" id="month">
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <Button>Find Events</Button>
            </div>
        </form>
    )
}
export default EventsSearch