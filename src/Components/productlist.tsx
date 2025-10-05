import { getProducts } from "@/app/lib/products";
import ProductCard from "./productcard";

interface Props {
    filterValue: string;
}

export default async function ProductList({ filterValue }: Props) {
    const products: any[] = await getProducts();

    const filteredProducts = filterValue
        ? products.filter(product => product.category === filterValue)
        : products;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8 p-2">
            {filteredProducts.map(product => (
                <ProductCard product={product} key={product.id}></ProductCard>
            ))}
        </div>
    );
}