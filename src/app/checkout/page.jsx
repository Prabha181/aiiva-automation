"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const items = cart.map((item) => `• ${item.name}`).join("\n");

    const message = `
🛒 New Order

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}

Items:
${items}
    `;

    const url = `https://wa.me/18001230789?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">

      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10">

        {/* LEFT - CART */}
        <div className="bg-white border border-slate-200 rounded-md p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-slate-900">
            Your Order
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Review your items before checkout
          </p>

          <div className="mt-6 space-y-3">
            {cart.length === 0 ? (
              <p className="text-slate-400 text-sm">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-3 px-4 rounded-md bg-orange-100 border border-slate-100"
                >
                  <span className="text-slate-800 font-medium">
                    {item.name}
                  </span>
                </div>
              ))
            )}
          </div>

        </div>

        {/* RIGHT - FORM */}
        <div className="bg-white border border-slate-200 rounded-md p-8 shadow-md">

          <h2 className="text-xl font-semibold text-slate-900">
            Checkout Details
          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">
            Fill in your details to place the order via WhatsApp
          </p>

          <div className="space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition resize-none"
            />

<button onClick={sendToWhatsApp} className="group relative inline-flex items-center justify-center gap-3 px-3.5 py-2.5 text-sm sm:text-base font-normal font-arimo text-white rounded-md overflow-hidden bg-gradient-to-r from-[#53015b] via-[#7b0f86] to-[#a21caf] shadow-lg shadow-purple-900/30 transition-all duration-300 ease-out hover:shadow-[0_10px_30px_rgba(162,28,175,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black">
              {/* Shine */}
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-700 ease-in-out" />
              </span>

              {/* Border */}
              <span className="absolute inset-0 rounded-md border border-white/10 group-hover:border-white/30 transition" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 tracking-wide">
                Send Inquiry

                {/* Fixed circle */}
                <span className="relative w-8 h-8 flex items-center justify-center rounded-md bg-white/20 backdrop-blur-sm overflow-hidden">

                  {/* Icon wrapper */}
                  <span className="relative w-4 h-4">

                    {/* Icon */}
                    <span className="absolute inset-0 flex items-center -rotate-45 justify-center transition-all duration-300 group-hover:-translate-y-0.25 group-hover:translate-x-0.25  ">
                    <svg
  className="w-4 h-4 rotate-45"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M22 2L11 13"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M22 2l-7 20-4-9-9-4 20-7z"
  />
</svg>
                    </span>
                  </span>
                </span>
              </span>
            </button>

            <p className="text-xs text-slate-400">
              You will be redirected to WhatsApp to confirm order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}