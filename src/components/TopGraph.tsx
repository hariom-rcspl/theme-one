import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const TopGraph = () => {

    const activeUsersData = [
        { month: "JAN", value: 60 },
        { month: "FEB", value: 120 },
        { month: "MAR", value: 100 },
        { month: "APR", value: 110 },
        { month: "MAY", value: 140 },
        { month: "JUN", value: 130 },
        { month: "JUL", value: 135 },
        { month: "AUG", value: 150 },
        { month: "SEPT", value: 120 },
        { month: "OCT", value: 140 },
        { month: "NOV", value: 160 },
        { month: "DEC", value: 145 },
    ]
    return (
        <div>
            <ResponsiveContainer width="100%" height={300} className={"px-3"}>
                <AreaChart data={activeUsersData}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#fff" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="" />
                    <Tooltip />
                    <XAxis dataKey="month" opacity={1} fontSize={10} />
                    <YAxis width="auto" opacity={1} fontSize={10}  />
                    <Area type="monotone" dataKey="value" stroke="#fff" fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TopGraph
