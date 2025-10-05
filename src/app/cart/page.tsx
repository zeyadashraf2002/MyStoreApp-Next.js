"use client";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-xl">Your cart is empty. Start shopping!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cart.map((item, idx) => (
            <div key={idx} className="bg-white border p-6 rounded-xl shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover rounded-lg mx-auto mb-4"
              />
              <h2 className="mt-2 font-bold text-lg">{item.title}</h2>
              <p className="text-gray-600 text-xl font-semibold">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}