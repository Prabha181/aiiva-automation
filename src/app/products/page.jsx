import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Smart Touch Switches", desc: "Premium modular and app-controlled switches for modern spaces.", image: "https://pmt-fl.com/wp-content/uploads/2025/01/woman-controlling-digital-thermostat.jpg" },
  { id: 2, name: "Smart Locks & Access Systems", desc: "Digital locks with fingerprint, PIN, card, and mobile access.", image: "https://megacctv.co.uk/wp-content/uploads/2026/01/Smart-Door-Locks.jpeg" },
  { id: 3, name: "Smart Lighting Solutions", desc: "RGB lights, dimmers, mood lighting, and automated lighting controls.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuZYdEe2pe4Fk291SQxIQY0h5Gjkod7WpbQ&s" },
  { id: 4, name: "Smart Plugs & Power Devices", desc: "Remote-controlled plugs, power modules, and energy-saving devices.", image: "https://png.pngtree.com/png-clipart/20231218/original/pngtree-green-energy-need-concept-wall-socket-conceptual-photo-png-image_13873540.png" },
  { id: 5, name: "Sensors & Safety Devices", desc: "Motion, smoke, gas, temperature, and security sensors with instant alerts.", image: "https://static.vecteezy.com/system/resources/thumbnails/077/850/957/small/hand-holding-portable-air-quality-monitor-showing-high-pm2-5-levels-on-city-street-background-traffic-and-heavy-smog-representing-environmental-health-risks-and-urban-air-pollution-issues-photo.jpg" },
  { id: 6, name: "Motorized Automation Products", desc: "Curtain motors, gate motors, door operators, and water valve automation", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudtno1max7cipxL-pImJxOkm8Hp0T5uCDVQ&s" },
  { id: 7, name: "Smart Fans & Appliances", desc: "BLDC fans and automation-ready smart appliances", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCirY5ldCPsALaKcmMV5xzUFzCY8OJsKeEw&s" },
  { id: 8, name: "Mobile App & Voice Control", desc: "Centralized control through mobile app, Alexa, and Google Assistant integration.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBWj05fxjwReuIs6aVXu0i_DzWJ-iKJsZL7g&s" },
  { id: 9, name: "Commercial Automation Solutions", desc: "Smart systems for offices, hotels, retail outlets, and commercial buildings.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2Px3AFVkL8UiQUW-Z3VLHBXfKf_hB0kKzw&s" },
  { id: 10, name: "Installation & Support Services", desc: "Site survey, setup, training, maintenance, and after-sales support.", image: "https://www.rmsinstalls.com/front/images/home-automation-banner.jpg" },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-4 items-center justify-center py-10 pt-30">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold font-arimo leading-tight">OUR OFFERINGS</h2>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
    </div>
  );
}