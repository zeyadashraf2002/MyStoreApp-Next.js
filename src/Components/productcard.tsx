"use client";
import Image from "next/image";

export default function ProductCard({ product }: any) {
  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="border-2 border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white w-72 h-[28rem] flex flex-col justify-between">
      <div className="flex-shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={250}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-xl text-gray-800 mb-2 line-clamp-1">{product.title}</h2>
          <p className="text-gray-500 text-base line-clamp-3">{product.description}</p>
        </div>
        <div className="mt-4">
          <p className="font-black text-2xl text-green-600 mb-4">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 cursor-pointer font-semibold transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}