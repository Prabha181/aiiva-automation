// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { Phone } from "lucide-react";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "Services", href: "/service" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const isActive = (href) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href);

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`fixed inset-0 z-[40] bg-black/30 transition-opacity duration-300
//         ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//       />

//       {/* Navbar Wrapper */}
//       <div className="w-full flex justify-center fixed top-4 z-50 px-4">
//         <header className="w-full max-w-7xl">
//           <div className="bg-white px-5 py-4 flex items-center justify-between rounded-2xl shadow-md">
//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <div className="flex">
//                 <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
//                 <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
//               </div>

//               <div className="flex flex-col leading-tight">
//                 <span className="text-[16px] font-semibold text-black">
//                   AIIVA
//                 </span>
//                 <span className="text-[11px] font-bold text-orange-500">
//                   Automation
//                 </span>
//               </div>
//             </div>

//             {/* Desktop Nav */}
//             <nav className="hidden lg:flex items-center gap-6">
//               {navLinks.map(({ label, href }) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   className={`text-[13px] font-semibold tracking-wide transition
//                   ${
//                     isActive(href)
//                       ? "text-black"
//                       : "text-black/60 hover:text-black"
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </nav>

//             {/* Right Side */}
//             <div className="flex items-center gap-3">
//               {/* Desktop CTA */}
//               <a
//                 href="tel:+18001230789"
//                 className="hidden lg:flex bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-full transition"
//               >
//                 Call Now
//               </a>

//               {/* Mobile Call */}
//               <a
//                 href="tel:+18001230789"
//                 className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-black/20"
//               >
//                 <Phone className="h-6 w-6 text-black/40" />
//               </a>

//               {/* Hamburger */}
//               <button
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1"
//               >
//                 <span
//                   className={`w-5 h-[2px] bg-black transition ${
//                     menuOpen ? "rotate-45 translate-y-[5px]" : ""
//                   }`}
//                 />
//                 <span
//                   className={`w-5 h-[2px] bg-black transition ${
//                     menuOpen ? "opacity-0" : ""
//                   }`}
//                 />
//                 <span
//                   className={`w-5 h-[2px] bg-black transition ${
//                     menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
//                   }`}
//                 />
//               </button>
//             </div>
//           </div>

//           {/* Mobile Drawer */}
//           <div
//             className={`fixed top-0 left-0 w-full h-screen bg-black text-white z-50 transform transition-transform duration-300
//             ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
//           >
//             <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
//               <span className="font-semibold">Menu</span>

//               <button onClick={() => setMenuOpen(false)}>✕</button>
//             </div>

//             <nav className="flex flex-col gap-4 p-6">
//               {navLinks.map(({ label, href }) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-lg"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </header>
//       </div>
//     </>
//   );
// }






"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/context/CartContext";


export default function Navbar() {
  const { cart, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
<>
    <style>{`
        .nav-link { position: relative; }
        .nav-link::after {
          content: '';
          color:.nav-link { position: relative; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 12px;
          width: 0; height: 2px;
          background: black;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover::after { width: calc(100% - 24px); };
          position: absolute;
          bottom: 0; left: 12px;
          width: 0; height: 2px;
          background: black;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover::after { width: calc(100% - 24px); }

        .drawer {
          transform: translateY(-120%);
          transition: transform 0.32s cubic-bezier(0.16,1,0.3,1);
        }
        .drawer.open { transform: translateX(0); }
      `}</style>

    <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[50] transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <div className="w-full flex justify-center fixed top-4 z-50 px-4">
      <header className="w-full max-w-7xl">
      <div className="w-[100%] bg-[white] mx-auto px-4 py-3 flex items-center justify-between rounded-2xl shadow-sm">
        
        {/* Logo */}
        <div className="w-[33%] flex items-center gap-4">
          <div className="flex">
            <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
            <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
          </div>
          <div className="flex flex-col leading-0.4 sm:leading-0.45 md:leading-0.55">
            <span className="text-[15px] md:text-[17px] font-semibold sm:text-sm tracking-tight text-black">
              AIIVA
            </span>
            <span className="text-[12px] sm:text-[14px] font-bold tracking-tight text-orange-500">
              Automation
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="w-[33%] lg:items-center lg:justify-center hidden lg:flex gap-2 flex-shrink-0">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`nav-link text-[13px] font-bold tracking-[2px] no-underline px-3 py-1.5 rounded transition-colors duration-200 whitespace-nowrap
                  ${isActive(href) ? "text-black/95 font-bold" : "text-black/65 hover:text-black/95"}`}
              >
                {label}
              </Link>
            ))}
        </nav>

          {/* RIGHT — desktop phone + mobile burger */}
          <div className="lg:w-[33%] flex items-center justify-end gap-1 md:gap-3 lg:gap-4">
            {/* Cart Icon */}
            <button
              onClick={() => setOpen(true)}
              className="relative flex items-center justify-center w-9 h-9 rounded-full border border-black/10 bg-white hover:border-black/30 hover:shadow-sm transition-all"
            >
              {/* Modern Cart Icon */}
              <svg
                className="w-5 h-5 text-gray-800"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10
                  0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.17
                  14h9.66c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21.3
                  5H5.21L4.27 3H1v2h2l3.6 7.59-1.35 2.44C4.52 16.37 5.48 18
                  7 18h12v-2H7l1.1-2z"/>
              </svg>

              {/* Badge */}
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] min-w-4 h-4 px-[5px] flex items-center justify-center rounded-full font-medium shadow-sm">
                  {cart.reduce((total, item) => total + item.qty, 0)}
                </span>
              )}
            </button>

            {/* Phone icon only */}
            <a
              href="tel:+18001230789"
              className=" flex items-center justify-center w-9 h-9 rounded-full border border-black/25 hover:border-black/60 transition-colors duration-200"
              aria-label="Call us"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="black">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border border-black/15 hover:bg-black/[0.07] hover:border-black/25 transition-all duration-200"
            >
              <div className="flex flex-col gap-[5px] w-[18px]">
                <span
                  className={`block h-[1.5px] bg-black rounded-full transition-all duration-300 origin-center
                  ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
                />
                <span
                  className={`block h-[1.5px] bg-black rounded-full transition-all duration-300
                  ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                  className={`block h-[1.5px] bg-black rounded-full transition-all duration-300 origin-center
                  ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      
        {/* ── Mobile drawer ── */}
        <div
          className={`drawer fixed top-0 left-0 w-[100%] border-b bg-white border-[black]/[0.4] z-[999] flex flex-col overflow-y-auto shadow-[4px_0_40px_rgba(0,0,0,0.6)] lg:hidden ${menuOpen ? "open" : ""}`}
        >
          {/* Drawer head */}
          <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-[black]/[0.07]">
            <Link
              href="/"
              className="flex items-center gap-2 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
                  <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
                </div>
                <div className="flex flex-col leading-0.6">
                  <span className="text-[15px] font-semibold sm:text-sm tracking-[2px] text-[black]">
                    AIIVA
                  </span>
                  <span className="text-[10px] sm:text-[12px] font-semibold tracking-[1.7px] text-orange-500">
                    Automation
                  </span>
                </div>
              </div>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-[black]/[0.06] border border-[black]/10 hover:bg-[black]/[0.12] transition-colors duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="rgba(0,0,0,0.65)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col gap-1 px-3 pt-4 pb-4">
            {navLinks.map(({ label, href }, i) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`flex group items-center justify-between px-4 py-3 rounded-xl text-[13px] font-medium tracking-[0.3px] no-underline border transition-all duration-200 font-arimo
                  ${
                    isActive(href)
                      ? "bg-[black]/[0.08] text-[black] font-semibold border-[black]/25 hover:border-black"
                      : "text-[black]/65 border-[black]/[0.6] hover:bg-[black]/[0.25] hover:text-[black] hover:border-[black]/[0.07]"
                  }`}
              >
                <span>{label}</span>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4 2l4 4-4 4"
                    stroke={
                      isActive(href) ? "rgba(0,0,0)" : "rgba(0,0,0,0.6)"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </nav>
        
        </div>
        </header>
      </div>


</>
  );
}











// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "Services", href: "/service" },
//   { label: "Contact", href: "/contact" },
// ];


// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const isActive = (href) =>
//     href === "/" ? pathname === "/" : pathname.startsWith(href);

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);




//   return (
// <>
//     <style>{`
//         .nav-link { position: relative; }
//         .nav-link::after {
//           content: '';
//           color:.nav-link { position: relative; }
//         .nav-link::after {
//           content: '';
//           position: absolute;
//           bottom: 0; left: 12px;
//           width: 0; height: 2px;
//           background: black;
//           border-radius: 2px;
//           transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
//         }
//         .nav-link:hover::after { width: calc(100% - 24px); };
//           position: absolute;
//           bottom: 0; left: 12px;
//           width: 0; height: 2px;
//           background: rgb(249,115,22);
//           border-radius: 2px;
//           transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
//         }
//         .nav-link:hover::after { width: calc(100% - 24px); }

//         .drawer {
//           transform: translateY(-120%);
//           transition: transform 0.32s cubic-bezier(0.16,1,0.3,1);
//         }
//         .drawer.open { transform: translateX(0); }
//       `}</style>

//     <div
//         onClick={() => setMenuOpen(false)}
//         className={`fixed inset-0 z-[998] transition-opacity duration-300
//           ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
//       />
//       <div className="w-[100%] h-[10vh] flex items-end justify-center">
//       <header className="w-[90%] flex items-center justify-center">
//       <div className="w-[100%] bg-[white] mx-auto px-4 py-3 flex items-center justify-between rounded-2xl shadow-sm">
        
//         {/* Logo */}
//         <div className="w-[33%] flex items-center gap-4">
//           <div className="flex">
//             <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
//             <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
//           </div>
//           <div className="flex flex-col leading-0.55 md:leading-0.5">
//             <span className="text-[15px] md:text-[17px] font-semibold sm:text-sm tracking-tight text-black">
//               AIIVA
//             </span>
//             <span className="text-[10px] sm:text-[12px] font-bold tracking-tight text-orange-500">
//               Automation
//             </span>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="w-[33%] lg:items-center lg:justify-center hidden lg:flex gap-2 flex-shrink-0">
//             {navLinks.map(({ label, href }) => (
//               <Link
//                 key={label}
//                 href={href}
//                 className={`nav-link text-[13px] font-bold tracking-[2px] no-underline px-3 py-1.5 rounded transition-colors duration-200 whitespace-nowrap
//                   ${isActive(href) ? "text-black/95 font-bold" : "text-black/65 hover:text-black/95"}`}
//               >
//                 {label}
//               </Link>
//             ))}
//         </nav>

//           {/* RIGHT — desktop phone + mobile burger */}
//           <div className="lg:w-[33%] flex items-center justify-end gap-4">
//             {/* Desktop phone */}
//             <a href="tel:+18001230789">
//             <div className="hidden lg:flex items-center gap-2 group backdrop-blur-[40px] bg-orange-500 px-[12px] py-[12px] rounded-[100px] transition-colors duration-200">
              
//               <div className="flex flex-col leading-tight">
//                 <span className="text-[13px] font-semibold text-white/70 no-underline group-hover:text-white transition-colors duration-200">
//                   Call Now
//                 </span>
//               </div>
//             </div>
//             </a>

//             {/* Mobile: phone icon only */}
//             <a
//               href="tel:+18001230789"
//               className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border border-black/25 hover:border-black/60 transition-colors duration-200"
//               aria-label="Call us"
//             >
//               <svg width="15" height="15" viewBox="0 0 24 24" fill="black">
//                 <path
//                   d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
//                   stroke="rgba(255,255,255,0.75)"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </a>

//             {/* Hamburger */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//               className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full border border-black/15 hover:bg-black/[0.07] hover:border-black/25 transition-all duration-200"
//             >
//               <div className="flex flex-col gap-[5px] w-[18px]">
//                 <span
//                   className={`block h-[1.5px] bg-black rounded-full transition-all duration-300 origin-center
//                   ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
//                 />
//                 <span
//                   className={`block h-[1.5px] bg-black rounded-full transition-all duration-300
//                   ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
//                 />
//                 <span
//                   className={`block h-[1.5px] bg-black rounded-full transition-all duration-300 origin-center
//                   ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
//                 />
//               </div>
//             </button>
//           </div>
//         </div>


      

      
//         {/* ── Mobile drawer ── */}
//         <div
//           className={`drawer fixed top-0 left-0 w-[100%] border-b bg-[black] border-white/[0.4] z-[999] flex flex-col overflow-y-auto shadow-[4px_0_40px_rgba(0,0,0,0.6)] lg:hidden ${menuOpen ? "open" : ""}`}
//         >
        
//           {/* Drawer head */}
//           <div className="flex items-center justify-between px-5 py-4 bg-black border-b border-white/[0.07]">
//             <Link
//               href="/"
//               className="flex items-center gap-2 no-underline"
//               onClick={() => setMenuOpen(false)}
//             >
//               {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="flex">
//             <div className="w-5 h-5 border-2 border-orange-500 rounded-full"></div>
//             <div className="w-5 h-5 border-2 border-orange-300 rounded-full -ml-2"></div>
//           </div>
//           <div className="flex flex-col leading-0.6">
//             <span className="text-[15px] font-semibold sm:text-sm tracking-[2px] text-white">
//               AIIVA
//             </span>
//             <span className="text-[10px] sm:text-[12px] font-semibold tracking-[1.7px] text-orange-500">
//               Automation
//             </span>
//           </div>
//         </div>
//             </Link>
//             <button
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close menu"
//               className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] transition-colors duration-200"
//             >
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M18 6L6 18M6 6l12 12"
//                   stroke="rgba(255,255,255,0.65)"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Drawer links */}
//           <nav className="flex flex-col gap-1 px-3 pt-4 pb-4">
//             {navLinks.map(({ label, href }, i) => (
//               <Link
//                 key={label}
//                 href={href}
//                 onClick={() => setMenuOpen(false)}
//                 style={{ animationDelay: `${i * 60}ms` }}
//                 className={`flex group items-center justify-between px-4 py-3 rounded-xl text-[13px] font-medium tracking-[0.3px] no-underline border transition-all duration-200 font-mont
//                   ${
//                     isActive(href)
//                       ? "bg-white/25 text-white font-semibold border-white/25 hover:border-white/65"
//                       : "text-white/65 border-transparent hover:bg-white/[0.25] hover:text-white hover:border-white/[0.07]"
//                   }`}
//               >
//                 <span>{label}</span>
//                 <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
//                   <path
//                     d="M4 2l4 4-4 4"
//                     stroke={
//                       isActive(href) ? "white" : "rgba(255,255,255,0.25)"
//                     }
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </Link>
//             ))}
//           </nav>
        
//         </div>
//         </header>
//       </div>


// </>
//   );
// }
