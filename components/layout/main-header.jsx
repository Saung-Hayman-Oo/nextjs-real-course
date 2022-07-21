import Link from "next/link"
function MainHeader(){
    return <header className="flex justify-between px-10 bg-gray-700 text-amber-200 py-7 items-center">
        <div>
            <Link href="/">NextEvents</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/events'>Browse All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainHeader