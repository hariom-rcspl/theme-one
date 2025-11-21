import { Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const TopGraph = () => {

    const activeUsersData = [
        { month: "JAN", value: 10 },
        { month: "FEB", value: 120 },
        { month: "MAR", value: 10 },
        { month: "APR", value: 120 },
        { month: "MAY", value: 10 },
        { month: "JUN", value: 130 },
        { month: "JUL", value: 10 },
        { month: "AUG", value: 150 },
        { month: "SEPT", value: 10 },
        { month: "OCT", value: 140 },
        { month: "NOV", value: 10 },
        { month: "DEC", value: 150 },
    ]
    return (
        <div>
            <ResponsiveContainer width="100%" height={300} className="px-3">
                <AreaChart data={activeUsersData}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#fff" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid
                        vertical={false}
                        horizontal={true}
                        stroke="#ffffff"
                        strokeOpacity={0.1}
                    />
                    <ReferenceLine
                        y={0}
                        stroke="#fff"
                        strokeOpacity={0.5}
                    />
                    <Tooltip />
                    <XAxis dataKey="month" fontSize={10} />
                    <YAxis fontSize={10} />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#fff"
                        fillOpacity={1}
                        fill="url(#colorValue)"
                    />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    )
}

export default TopGraph
