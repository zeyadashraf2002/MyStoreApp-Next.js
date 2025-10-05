import { getProductById } from "@/app/lib/products";
import TextExpander from '../../../Components/textexpander';
import { auth } from "@/services/auth";

interface Props {
  params: Promise<{ productid: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { productid } = await params;
  const product = await getProductById(parseInt(productid));
  return {
    title: product.title,
    description: product.description,
  };
}

export const revalidate = 15;

export default async function ProductPage({ params }: Props) {
  const { productid } = await params;
  const product = await getProductById(parseInt(productid));

  const session = await auth();


  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full border-2 border-gray-200 rounded-2xl p-8 shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto my-6 h-72 object-cover rounded-xl w-full"
        />
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          <TextExpander children={product.description}></TextExpander>
        </p>
        <p className="mt-6 font-bold text-3xl text-center text-green-600">${product.price}</p>
      </div>
      <div className="mt-6">
        {session?.user && (
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 cursor-pointer font-semibold text-lg transition-colors">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}