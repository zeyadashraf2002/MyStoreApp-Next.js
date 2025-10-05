import { Suspense } from "react";
import { getProducts } from "../lib/products";
import SearchComponent from "@/Components/serach";
import ProductList from "@/Components/productlist";

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export const revalidate = 60;

export default async function SearchPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const filterValue = category || "";

  let products: any[] = await getProducts();

  if (filterValue) {
    const lower = filterValue.toLowerCase();
    products = products.filter(
      (p: any) =>
        p.category.toLowerCase().includes(lower) ||
        p.title.toLowerCase().includes(lower)
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Search Results</h1>

      <SearchComponent />

      <Suspense fallback={<div className="text-center py-8">Loading products...</div>}>
        <ProductList filterValue={filterValue} />
      </Suspense>
    </div>
  );
}