import { Link, useLocation } from "react-router-dom"
import TopGraph from "./TopGraph"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { User } from "lucide-react"

const TopBar = () => {
    const { pathname } = useLocation()
    return (
        <div className="bg-black/90 pb-24 -mb-10">
            <header className=" py-3 shadow-sm flex items-center justify-between px-5 text-white">
                <h2 className="font-semibold text-lg">Welcome</h2>
                <div className="flex gap-3 items-center">
                    <p className="text-sm font-bold">
                        Hi, Vijay
                    </p>
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" aria-label="Open menu" size="icon-sm">
                                {/* <MoreHorizontalIcon /> */}
                                <User color="black" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40" align="end">
                            <DropdownMenuItem>
                                <Link to={""}>Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to={""}>Setting</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to={""}>Change Password</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link to={""}>Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>

            {
                pathname === "/" && <TopGraph />
            }
        </div>
    )
}

export default TopBar
