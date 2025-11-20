import { useLocation } from "react-router-dom"
import TopGraph from "./TopGraph"


const TopBar = () => {
    const { pathname } = useLocation()
    return (
        <div className="bg-black pb-24 -mb-10">
            <header className="h-14 shadow-sm flex items-center px-5 text-white">
                <h2 className="font-semibold text-lg">Welcome</h2>
            </header>

            {
                pathname === "/" &&  <TopGraph />
            }
        </div>
    )
}

export default TopBar
