import FilterComponent from "@/Components/filter";
import ProductList from "@/Components/productlist";
import { Suspense } from "react";

interface Props {
    searchParams: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: Props) {
    const { category } = await searchParams;
    const filterValue = category ? category : '';

    return (
        <div className="p-8 bg-white min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 text-gray-800">Our Products</h1>
                <p className="text-gray-600">Browse our amazing collection</p>
            </div>
            <FilterComponent></FilterComponent>
            <Suspense fallback={<div className="text-center py-12">Fetching products...</div>}>
                <ProductList filterValue={filterValue} />
            </Suspense>
        </div>
    );
}