"use client"

import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import AreaChartFillByValue from "./AreaChartFillByValue"

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

const emailCampaignData = [
  { month: "JAN", value: 4000 },
  { month: "FEB", value: 8000 },
  { month: "MAR", value: 12000 },
  { month: "APR", value: 16000 },
  { month: "MAY", value: 20000 },
  { month: "JUN", value: 28000 },
  { month: "JUL", value: 35000 },
  { month: "AUG", value: 42000 },
  { month: "SEPT", value: 50000 },
  { month: "OCT", value: 55300 },
]

const countriesData = [
  { name: "USA", value: 2920, percentage: "53.23%" },
  { name: "Germany", value: 1300, percentage: "20.43%" },
  { name: "Australia", value: 760, percentage: "10.35%" },
  { name: "United Kingdom", value: 690, percentage: "7.87%" },
  { name: "Romania", value: 600, percentage: "5.94%" },
  { name: "Brasil", value: 550, percentage: "4.34%" },
]

export function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Active Users Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">Active Users</h3>
        <p className="text-2xl font-bold text-gray-900 mb-4">34,252</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={activeUsersData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fb7185" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#fb7185" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#fb7185" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>

        {/* Countries List */}
        <div className="mt-6 space-y-3">
          {countriesData.map((country, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded flex items-center justify-center text-xs bg-gray-200">🚩</div>
                <span className="text-gray-700">{country.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">{country.value}</span>
                <span className="text-gray-400 text-xs">{country.percentage}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">Just Updated</p>
      </div>

      {/* Email Campaign Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">Summer Email Campaign</h3>
        <p className="text-2xl font-bold text-gray-900 mb-4">55,300</p>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={emailCampaignData}>
            <defs>
              <linearGradient id="colorEmail" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#22c55e" fillOpacity={1} fill="url(#colorEmail)" />
          </AreaChart>
        </ResponsiveContainer>

        {/* Metrics */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">DELIVERY RATE</span>
            <span className="text-gray-900 font-semibold">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: "90%" }}></div>
          </div>

          <div className="flex items-center justify-between text-sm mt-3">
            <span className="text-green-600 text-xs">OPEN RATE</span>
            <span className="text-gray-900 font-semibold">60%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "60%" }}></div>
          </div>

          <div className="flex items-center justify-between text-sm mt-3">
            <span className="text-blue-600 text-xs">CLICK RATE</span>
            <span className="text-gray-900 font-semibold">12%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "12%" }}></div>
          </div>

          <div className="flex items-center justify-between text-sm mt-3">
            <span className="text-orange-600 text-xs">HARD BOUNCE</span>
            <span className="text-gray-900 font-semibold">3%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: "3%" }}></div>
          </div>

          <div className="flex items-center justify-between text-sm mt-3">
            <span className="text-red-600 text-xs">SPAM REPORT</span>
            <span className="text-gray-900 font-semibold">0.1%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-red-500 h-1.5 rounded-full" style={{ width: "0.1%" }}></div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4">Just Updated</p>
      </div>

      {/* Countries Map & Stats */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">Active Countries</h3>
        <p className="text-2xl font-bold text-gray-900 mb-4">105</p>

        {/* World Map Placeholder */}
        <AreaChartFillByValue />

        <p className="text-xs text-gray-400">Last 7 days</p>
      </div>
    </div>
  )
}
