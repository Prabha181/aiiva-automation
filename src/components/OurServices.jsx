"use client";
import Link from "next/link";

const items = [
  {
    title: "Smart Home Automation",
    description: "Control and monitor your home devices seamlessly.",
    points: [
      "Mobile app control",
      "Voice assistant integration",
      "Remote access",
    ],
  },
  {
    title: "Security & Access Control",
    description: "Advanced protection systems for your property.",
    points: ["Biometric locks", "CCTV integration", "Real-time alerts"],
  },
  {
    title: "Lighting Automation",
    description: "Enhance ambiance with intelligent lighting.",
    points: ["Scene-based lighting", "Energy saving modes", "Remote dimming"],
  },
  {
    title: "Energy Management Solutions",
    description: "Optimize power usage and reduce bills.",
    points: ["Real-time monitoring", "Usage analytics", "Smart scheduling"],
  },
];

export default function OurServices() {
  const loopItems = [...items, ...items];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-[clamp(1rem,5vw,5rem)] py-[clamp(3rem,8vw,6rem)]">

      <div className="max-w-7xl overflow-hidden mx-auto grid md:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-center">

        {/* LEFT */}
        <div className="space-y-5 max-w-xl">
          <p className="text-xs tracking-[3px] text-orange-500 font-semibold uppercase">
            Our Services
          </p>

          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-gray-900 leading-tight">
            Smart Living,
            <br />
            Simplified
          </h2>

          <p className="text-gray-600 text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed">
            Upgrade your lifestyle with intelligent automation systems designed
            for comfort, security, and energy efficiency.
          </p>

          <Link href="/products">
            <button className="group relative inline-flex items-center justify-center gap-3 px-3.5 py-2.5 text-sm sm:text-base font-normal font-arimo text-white rounded-md overflow-hidden bg-gradient-to-r from-[#53015b] via-[#7b0f86] to-[#a21caf] shadow-lg shadow-purple-900/30 transition-all duration-300 ease-out hover:shadow-[0_10px_30px_rgba(162,28,175,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black">
              {/* Shine */}
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-700 ease-in-out" />
              </span>

              {/* Border */}
              <span className="absolute inset-0 rounded-md border border-white/10 group-hover:border-white/30 transition" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 tracking-wide">
                Browse Services

                {/* Fixed circle */}
                <span className="relative w-8 h-8 flex items-center justify-center rounded-md bg-white/20 backdrop-blur-sm overflow-hidden">

                  {/* Icon wrapper */}
                  <span className="relative w-4 h-4">

                    {/* Icon */}
                    <span className="absolute inset-0 flex items-center -rotate-45 justify-center transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5  ">
                      <svg 
                        className="w-4 h-4 rotate-45"
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
            </button>
                </Link>
        </div>

        {/* RIGHT */}
        <div className="relative">

          {/* LARGE DESKTOP: infinite scroll */}
          <div className="block overflow-hidden">
            <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]">
              {loopItems.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </div>
          </div>

          {/* gradient fade (desktop only) */}
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-white to-transparent hidden lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-5 bg-gradient-to-l from-white to-transparent hidden lg:block" /> */}
        </div>
      </div>

      {/* animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }

        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

/* CARD */
function Card({ item }) {
  return (
    <Link href="/products">
      <div className="
      snap-start 
      w-[280px]
      h-[300px]
      flex-shrink-0 
      bg-white 
      border border-gray-200 
      rounded-md 
      p-[clamp(1rem,2vw,1.5rem)]
      shadow-sm 
      hover:shadow-xl 
      transition-all duration-300 
      hover:-translate-y-1.5
      group
    ">

      <div className="w-10 h-10 rounded-md bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition">
        <span className="text-orange-500 group-hover:text-white font-bold">
          ↗
        </span>
      </div>

      <h3 className="text-gray-900 font-semibold text-[clamp(1rem,1.2vw,1.1rem)] mb-2">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {item.description}
      </p>

      <ul className="text-sm text-gray-700 space-y-2">
        {item.points.map((point, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-orange-500 mt-[2px]">✓</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
    </Link>
  );
}