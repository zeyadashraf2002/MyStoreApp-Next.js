"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function FilterComponent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    function handleFilter(filter: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (filter === "all") {
            params.delete("category");
        } else {
            params.set("category", filter);
        }
        router.replace(`${pathName}?${params.toString()}`);
    }

    return (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <label className="block mr-2 font-bold text-gray-700 mb-2">Filter by category:</label>
            <select
                onChange={(e) => handleFilter(e.target.value)}
                defaultValue={searchParams.get("category") || "all"}
                className="border-2 border-gray-300 px-4 py-2 rounded-lg w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500"
            >
                <option value="all">All Products</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
        </div>
    );
}