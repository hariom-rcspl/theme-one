"use client"

import { Settings } from "lucide-react"

const products = [
    {
        id: 1,
        name: "Suede Biker Jacket",
        brand: "Saint Laurent",
        color: "Black",
        size: "M",
        price: "€ 3,390",
        qty: 1,
        amount: "€ 549",
        image: "/black-biker-jacket.jpg",
    },
    {
        id: 2,
        name: "Jersey T-Shirt",
        brand: "Balmain",
        color: "Black",
        size: "M",
        price: "€ 499",
        qty: 2,
        amount: "€ 998",
        image: "/black-tshirt.png",
    },
    {
        id: 3,
        name: "Slim-Fit Swim Short",
        brand: "Prada",
        color: "Red",
        size: "M",
        price: "€ 200",
        qty: 3,
        amount: "€ 799",
        image: "/red-swim-shorts.jpg",
    },
]

export function ProductsTable() {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Best Selling Products</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Product</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Color</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Size</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Qty</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                                            <p className="text-xs text-gray-500">by {product.brand}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-700">{product.color}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{product.size}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{product.price}</td>
                                <td className="px-6 py-4 text-sm text-gray-700 text-center">{product.qty}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                                    <div className="flex items-center justify-between">
                                        <span>{product.amount}</span>
                                        <button className="p-1 hover:bg-gray-200 rounded transition">
                                            <Settings className="w-4 h-4 text-gray-400" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Footer with Total */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
                <p className="text-gray-600 text-sm">Total amount shown</p>
                <p className="text-xl font-bold text-gray-900">€2,346</p>
            </div>
        </div>
    )
}
