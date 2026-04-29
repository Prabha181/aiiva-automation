"use client";

import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const isActive = (href) => pathname === href;

  const socialIcons = [
    { Icon: FaInstagram, label: "Instagram" },
    { Icon: CiFacebook, label: "Facebook" },
    { Icon: FaXTwitter, label: "Twitter/X" },
    { Icon: FaLinkedinIn, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-100 pt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-0 rounded-3xl pt-8 ">

        {/* Top Section */}
        <div className="w-full flex flex-wrap justify-between gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                <div className="w-5 h-5 border-2 border-orange-500 rounded-full" />
                <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2" />
              </div>
              <span className="text-xl font-semibold">
                AIIVA<span className="text-orange-500"> Automation</span>
              </span>
            </div>

            <p className="text-gray-600 mb-6 max-w-md">
              Redefining modern living through intelligent smart home and commercial automation solutions.
              We deliver smart switches, locks, lighting, sensors, and energy systems designed for convenience,
              safety, and efficiency.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center bg-orange-100 rounded-lg text-orange-500 hover:bg-gray-300 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 md:gap-20">

            {/* Company */}
            <div>
              <h3 className="text-orange-500 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`transition ${
                        isActive(href)
                          ? "text-black"
                          : "text-black/60 hover:text-black"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-orange-500 font-semibold mb-4">Get In Touch</h3>
              <ul className="space-y-2 text-black/65">
                <li><a href="tel:+919000006000" className="hover:text-black">+919000006000</a></li>
                  <li><a href="mailto:aiivaautomation@gmail.com" className="hover:text-black">aiivaautomation@gmail.com</a></li>
                <li>
                <a href="https://www.google.com/maps/search/?api=1&query=5-9-30/1/24-25,+F-504,+The+Legend+Palace+Colony,+Himayathnagar,+Hyderabad,+Telangana+500063" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <p className="max-w-sm">5-9-30/1/24-25, F-504, The Legend Palace Colony, New Mla Quarters, Hyderabad, Himayathnagar, Telangana, India, 500063</p>
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-8" />

        {/* Bottom */}
        <div className="flex items-center py-4 justify-center text-[black]/65 text-[15px]">
          <p>© 2026 AIIVA Automation. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}







// "use client";
// import { FaInstagram } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export default function Footer() {

//   const pathname = usePathname();
//   const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "Products", href: "/products" },
//     { label: "Contact", href: "/contact" },
//     { label: "Privacy Policy", href: "/privacy-policy" },
//     { label: "Terms & Conditions", href: "/terms-and-conditions" },
//   ];

//   const isActive = (href) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href);

//     return (
//       <footer className="bg-gray-100 py-10">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-0 rounded-3xl p-8 md:p-12">
          
//           {/* Top Section */}
//           <div className="w-[100%] flex flex-wrap justify-between gap-10">
            
//             {/* Logo + Description */}
//             <div className="">
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="flex">
//                   <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
//                   <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
//                 </div>
//                 <span className="text-xl font-semibold">
//                   auto<span className="text-orange-500">mate</span>
//                 </span>
//               </div>
  
//               <p className="text-gray-600 mb-6">
//               redefining modern living through intelligent
// smart home and commercial automation
// solutions. Our brand delivers advanced products
// such as smart switches, locks, lighting, sensors,
// energy management systems, and appcontrolled devices designed for convenience,
// safety, and efficiency. With innovation-driven
// technology, seamless mobile integration, and
// reliable quality, AIIVA empowers homes, offices,
// hotels, and businesses to experience the future
// of connected living.

//               </p>
  
//               {/* Social Icons */}
//               <div className="flex gap-3">
//                 {[FaInstagram,CiFacebook,FaXTwitter,FaLinkedinIn].map((Icon, i) => (
//                   <div key={i} className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300 cursor-pointer transition">
//                     <Icon size={18} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-10 md:gap-30">
//               {/* Company */}
//             <div className="flex flex-col">
//               <h3 className="text-orange-500 font-semibold mb-4">Company</h3>
//               <ul className="space-y-2 text-gray-600">
//                 {navLinks.map(({ label, href }) => (
//                   <Link
//                     key={label}
//                     href={href}
//                     className={`transition-colors duration-200 flex flex-wrap
//                       ${isActive(href) ? "text-black/95" : "text-black/65 hover:text-black/95"}`}
//                   >
//                     {label}
//                   </Link>
//                 ))}
//               </ul>
//             </div>
  
//             {/* Products */}
//             <div>
//               <h3 className="text-orange-500 font-semibold mb-4">Get In Touch</h3>
//               <ul className="space-y-2 text-gray-600">
//                 <li>9000006000</li>
//                 <li>aiivaautomation@gmail.com</li>
//                 <li>Testimonials</li>
//                 <li>Case Study</li>
//                 <li>System Status</li>
//               </ul>
//             </div>
//             </div>
//           </div>
  
//           {/* Divider */}
//           <div className="border-t my-8"></div>
  
//           {/* Bottom Section */}
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
//             <p>
//               © 2026 Automate Elementor Template Kit by Underline Webb
//             </p>
  
//             <div className="flex gap-5">
//               <span className="cursor-pointer hover:text-black">Legal</span>
//               <span className="cursor-pointer hover:text-black">
//                 Privacy Policy
//               </span>
//               <span className="cursor-pointer hover:text-black">
//                 Site Terms
//               </span>
//               <span className="cursor-pointer hover:text-black">
//                 Cookie Policy
//               </span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   }