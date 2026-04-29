"use client";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const whatsappNumber = "919000060000";

    const text = `Hi, I am ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  // ICONS
  const PhoneIcon = () => (
    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth="2" d="M3 5a2 2 0 012-2h2.3a2 2 0 011.8 1.1l1 2.4a2 2 0 01-.4 2.3L8.9 10a16 16 0 006 6l1.2-1.8a2 2 0 012.3-.5l2.4 1.1A2 2 0 0121 18v2a2 2 0 01-2 2C9 22 2 15 2 6V5z" />
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth="2" d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
      <path strokeWidth="2" d="M22 6l-10 7L2 6" />
    </svg>
  );

  const MapIcon = () => (
    <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth="2" d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z" />
      <circle cx="12" cy="10" r="2" strokeWidth="2" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center px-4 py-24 pt-32">

      {/* MAIN CONTENT */}
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm font-medium tracking-[2px] text-orange-500 mb-3">
            CONTACT US
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mt-3 leading-tight">
            Let’s build something great together
          </h1>

          <p className="mt-5 text-slate-600 text-lg max-w-md">
            Share your idea and we’ll get back within a few hours with next steps.
          </p>

          <div className="mt-10 space-y-4">

            {/* PHONE */}
            <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-md p-5 shadow-sm hover:shadow-md transition">
              <PhoneIcon />
              <div>
                <p className="text-xs text-slate-400 uppercase">Phone</p>
                <p className="text-slate-900 font-medium">+91 90000 60000</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-md p-5 shadow-sm hover:shadow-md transition">
              <MailIcon />
              <div>
                <p className="text-xs text-slate-400 uppercase">Email</p>
                <p className="text-slate-900 font-medium">
                  aiivaautomation@gmail.com
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex flex-wrap items-center gap-4 bg-white border border-slate-200 rounded-md p-5 shadow-sm hover:shadow-md transition">
              <MapIcon />
              <div>
                <p className="text-xs text-slate-400 uppercase">Office</p>
                <p className="text-slate-900 font-medium leading-relaxed">
                  F-504, The Legend Palace Colony, New Mla Quarters,<br />
                  Hyderabad, Himayathnagar, Telangana, India, 500063
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border border-slate-200 rounded-md p-8 shadow-lg">

          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Send a message
          </h2>

          <form onSubmit={handleWhatsApp} className="space-y-5">

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition"
              required
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone number"
              className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition"
              required
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition resize-none"
              required
            />

            <button type="submit" className="group relative inline-flex items-center justify-center gap-3 px-3.5 py-2.5 text-sm sm:text-base font-normal font-arimo text-white rounded-md overflow-hidden bg-gradient-to-r from-[#53015b] via-[#7b0f86] to-[#a21caf] shadow-lg shadow-purple-900/30 transition-all duration-300 ease-out hover:shadow-[0_10px_30px_rgba(162,28,175,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black">
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
              We usually reply within a few hours
            </p>

          </form>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="w-full max-w-7xl mt-16">
        <h3 className="text-center text-xl font-semibold text-slate-900 mb-6">
          Find us here
        </h3>

        <div className="w-full max-h-[400px] overflow-hidden rounded-md border border-slate-200 shadow-lg aspect-[16/9]">
          <iframe
            title="Office Location"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=F-504,%20The%20Legend%20Palace%20Colony,%20New%20MLA%20Quarters,%20Hyderabad,%20Himayathnagar,%20Telangana,%20India%20500063&output=embed"
          />
        </div>
      </div>

    </div>
  );
}