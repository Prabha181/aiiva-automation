import Link from "next/link";

export default function CtaSection() {
    return (
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
  
            {/* Left Image */}
            {/* h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] */}
            <div className="relative h-[300px] md:h-[400px] lg:h-auto p-2 border overflow-hidden">
            <div className="w-full h-full overflow-hidden">
              <img
                src="/ctaimg.jpeg" 
                alt="Smart home interior"
                className="w-full h-full object-cover border scale-100 hover:scale-102 hover:brightness-80 transition-all duration-800 ease-in-out"
              />
            </div>
            </div>
  
            {/* Right Content */}
            <div className="bg-[#12141a] text-white flex items-center">
              <div className="p-10 lg:p-14 space-y-6">
  
                <h2 className="text-3xl lg:text-4xl font-semibold font-arimo leading-snug">
                  Experience Premium Smart Home Integration
                </h2>
  
                <p className="text-gray-300 text-sm lg:text-base font-arimo leading-relaxed">
                  We provide seamless automation systems with reliable connectivity
                  and expert installation. Control every device effortlessly and
                  enjoy peace of mind with enhanced home security. We provide
                  seamless automation systems with reliable connectivity and expert
                  installation.
                </p>
  
                <Link href="/contact">
            <button className="group relative inline-flex items-center justify-center gap-3 px-3.5 py-2.5 text-sm sm:text-base font-normal font-arimo text-white rounded-md overflow-hidden bg-gradient-to-r from-[#53015b] via-[#7b0f86] to-[#a21caf] shadow-lg shadow-purple-900/30 transition-all duration-300 ease-out hover:shadow-[0_10px_30px_rgba(162,28,175,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black">
              {/* Shine */}
              <span className="absolute inset-0 overflow-hidden rounded-md">
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
        </div>
      </section>
    );
  }