"use client";
import { useCart } from "@/app/context/CartContext";

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <>
    <style>
        {`
        @keyframes fade {
            0% { opacity: 0; transform: translateY(10px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; }
            100% { opacity: 0; transform: translateY(10px); }
          }
          
          .animate-fade {
            animation: fade 2s ease-in-out;
          }
        `}
    </style>
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="bg-black text-white px-4 py-2 rounded-md shadow-lg animate-fade">
        {toast}
      </div>
    </div>
    </>
  );
}