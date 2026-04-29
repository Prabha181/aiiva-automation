"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="w-[250px] border rounded-md p-4 flex flex-col h-full">
      <div className="flex flex-col gap-3 flex-1">
      <img
  src={product.image}
  alt={product.name}
  className="rounded-md h-[180px]"
/>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500 flex-1 pb-2">
          {product.desc}
        </p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white py-2 rounded-md mt-auto hover:bg-black/80 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}