import Image from "next/image";
interface Props {
  params: Promise<{name: string }>;
}

async function getProductsByCategory(name: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${name}`
  );
  if (res.ok)
    {
      return res.json();
    }
    else
      {
        throw new Error("Failed to fetch products");
      }
}

export default async function CategoryDetail({ params }: Props) {
  const {name} = await params;
  const products: any[] = await getProductsByCategory(name);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center capitalize text-gray-800">
        {name} Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={250}
              height={250}
              className="w-full h-48 object-cover rounded-xl mx-auto mb-6"
            />
            <h3 className="font-bold text-xl mb-2">{product.title}</h3>
            <p className="text-base text-gray-600 line-clamp-2 mb-4">
              {product.description}
            </p>
            <p className="font-bold text-2xl text-green-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}