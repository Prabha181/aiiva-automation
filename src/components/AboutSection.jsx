"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function AboutSection() {

  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 1,
  });

  const stats = [
    { value: 2845, label: "Homes Automated" },
    { value: 9327, label: "Devices Installed" },
    { value: 1562, label: "Happy Clients" },
  ];

  return (
    <section className="bg-gray-100 font-arimo py-16 px-6 md:px-12">

      {/* Content + Image */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <p className="text-sm font-medium tracking-[2px] text-orange-500 mb-3">
            ABOUT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Smart Innovation for Modern Homes Today Advanced
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
          AIIVA AUTOMATION PRIVATE LIMITED is redefining modern living with advanced smart automation solutions for homes, offices, hotels, and commercial spaces.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
          We offer a complete ecosystem of smart devices—including switches, locks, lighting, sensors, and energy management systems—all designed to work seamlessly together through mobile apps and voice assistants.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our focus is simple: deliver reliable, affordable, and future-ready automation that enhances everyday life.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[450px]">
          <Image
            src="/aboutimg.jpeg" 
            alt="Smart Home"
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
      <div
      ref={ref}
      className="max-w-6xl mx-auto grid grid-cols-3 text-center border-y py-5 md:py-10 mt-10"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${index !== stats.length - 1 ? "border-r" : ""}`}
        >
          <h2 className="text-2xl md:text-4xl font-semibold">
            {inView && <CountUp end={stat.value} duration={2} />}
          </h2>
          <p className="text-gray-600 mt-2 text-[12px] md:text-[16px]">{stat.label}</p>
        </div>
      ))}
    </div>
    </section>
  );
}




// function AboutSection() {
//     return (
//       <section className="w-full bg-gray-100 py-16">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
  
//           {/* Top Text */}
//           <div className="grid lg:grid-cols-2 gap-10 mb-12 items-center">
//             <div>
//               <p className="text-sm font-semibold tracking-wide text-gray-500 mb-3">
//                 ABOUT US
//               </p>
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-arimo leading-tight text-gray-900">
//                 Smart Innovation for Modern Homes Today Advanced
//               </h2>
//             </div>
  
//             <p className="text-gray-600 text-sm sm:text-base max-w-lg">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit sociosqu
//               pulvinar, cubilia quis ornare aliquam odio habitasse commodo sem.
//             </p>
//           </div>
  
//           {/* Grid Content */}
//           <div className="grid gap-6 lg:grid-cols-3">
  
//             {/* Left Big Image */}
//             <div className="lg:col-span-1 rounded-2xl overflow-hidden">
//               <img
//                 src="/about1.jpg"
//                 alt="Smart Home"
//                 className="w-full h-full object-cover"
//               />
//             </div>
  
//             {/* Middle Column */}
//             <div className="flex flex-col gap-6">
//               {/* Top Image */}
//               <div className="rounded-2xl overflow-hidden">
//                 <img
//                   src="/about2.jpg"
//                   alt="Control Panel"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
  
//               {/* Stats Card */}
//               <div className="bg-gray-200 rounded-2xl p-8 flex items-center justify-center">
//                 <h3 className="text-4xl font-bold text-gray-900">
//                   10+
//                 </h3>
//               </div>
//             </div>
  
//             {/* Right Highlight Card */}
//             <div className="bg-lime-400 rounded-2xl p-8 flex flex-col justify-between">
//               <div>
//                 <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
//                   Control Your Home From Your Phone
//                 </h3>
  
//                 <p className="text-gray-800 text-sm sm:text-base mb-6">
//                   Lorem ipsum dolor sit amet consectetur, adipiscing elit rhoncus ridiculus.
//                 </p>
//               </div>
  
//               {/* Phone Image */}
//               <div className="flex justify-center">
//                 <img
//                   src="/phone.png"
//                   alt="Mobile App"
//                   className="w-48 sm:w-56 md:w-64 object-contain"
//                 />
//               </div>
//             </div>
  
//           </div>
//         </div>
//       </section>
//     );
//   }

//   export default AboutSection