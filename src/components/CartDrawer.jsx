"use client";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, open, setOpen, removeFromCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-[320px] h-full bg-white z-50 shadow-xl transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b font-semibold">
          <span>Cart</span>

          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-md border hover:bg-black/10 transition"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Cart items */}
        <div className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto">
          {cart.length === 0 && (
            <p className="text-sm text-gray-500 text-center mt-10">
              Your cart is empty
            </p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center"
            >
              <p className="text-sm font-medium">{item.name}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xs text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Checkout */}
        {cart.length > 0 && (
          <div className="p-4">
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-black text-white py-2 rounded-md"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}