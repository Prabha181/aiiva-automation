import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
      <section className="relative w-full h-[100vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg" // replace with your image
            alt="Smart Home"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 xl:px-0 py-16">
          <div className="max-w-3xl text-white">
            <h1 className="font-bold font-arimo leading-tight mb-5 
              text-4xl md:text-5xl lg:text-6xl">
              Transform Your <br className="" />
              Space with <span className="text-orange-500">Smart Automation</span>
            </h1>
  
            <p className="text-gray-300 mb-8 
               text-base md:text-lg max-w-xl">
              Control lights, locks, appliances, and security—anytime, anywhere with AIIVA’s intelligent automation solutions.
            </p>
            {/* from-orange-600 via-orange-500 to-amber-600 */}
            {/* Button */}
            <div className="flex">
            <Link href="/contact">
            <button className="group relative inline-flex items-center justify-center gap-3 px-3.5 py-2.5 text-sm sm:text-base font-normal font-arimo text-white rounded-md overflow-hidden bg-gradient-to-r from-[#53015b] via-[#7b0f86] to-[#a21caf] shadow-lg shadow-purple-900/30 transition-all duration-300 ease-out hover:shadow-[0_10px_30px_rgba(162,28,175,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black">
              {/* Shine */}
              <span className="absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:left-[150%] transition-all duration-700 ease-in-out" />
              </span>

              {/* Border */}
              <span className="absolute inset-0 rounded-md border border-white/10 group-hover:border-white/30 transition" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-3 tracking-wide">
                Contact Us

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
          </div>
        </div>
  
        {/* Bottom Glass Bar */}
        <div className="absolute bottom-0 w-full">
          <div className=" border-t border-white/20">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 xl:px-0 py-4">
              <p className="text-gray-200 text-sm md:text-base">
              AIIVA brings intelligent, reliable, and affordable automation to homes and businesses—making every space smarter, safer, and more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hero





// import Image from "next/image";

// function Hero() {
//     return (
//       <section className="relative w-full h-[100vh] flex items-center">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <Image
//             src="/hero-bg.jpg" // replace with your image
//             alt="Smart Home"
//             fill
//             priority
//             className="object-cover"
//           />
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20"></div>
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>
//         </div>
  
//         {/* Content */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 xl:px-0 py-16">
//           <div className="max-w-3xl text-white">
//             <h1 className="font-bold font-arimo leading-tight mb-5 
//               text-4xl md:text-5xl lg:text-6xl">
//               Transform Your <br className="" />
//               Space with <span className="text-orange-500">Smart Automation</span>
//             </h1>
  
//             <p className="text-gray-300 mb-8 
//                text-base md:text-lg max-w-xl">
//               Control lights, locks, appliances, and security—anytime, anywhere with AIIVA’s intelligent automation solutions.
//             </p>
  
//             {/* Buttons */}
//             <div className="flex">
//               <button className="bg-[#53015b] text-white px-6 py-3 rounded-2xl font-medium text-sm sm:text-base hover:bg-[white] hover:text-[black] transition">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
  
//         {/* Bottom Glass Bar */}
//         <div className="absolute bottom-0 w-full">
//           <div className=" border-t border-white/20">
//             <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 xl:px-0 py-4">
//               <p className="text-gray-200 text-sm md:text-base">
//                 Lorem ipsum dolor sit amet consectetur adipiscing elit, est 
//                 sollicitudin sapien condimentum fringilla, turpis tempus 
//                 posuere libero purus.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
// }

// export default Hero