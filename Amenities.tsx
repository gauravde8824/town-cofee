import { motion } from 'motion/react';
import { Wifi, Car, Baby, Leaf, Briefcase, Dog, ShoppingBag, Truck, Sofa } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { icon: Car, name: "Valet & Free Parking" },
    { icon: Wifi, name: "Free High-Speed WiFi" },
    { icon: Briefcase, name: "Work Friendly" },
    { icon: Baby, name: "Family & Kid Friendly" },
    { icon: Dog, name: "Pet Friendly" },
    { icon: Leaf, name: "Vegan & Gluten Free" },
    { icon: Sofa, name: "Lounge Seating" },
    { icon: ShoppingBag, name: "Takeaway Available" },
    { icon: Truck, name: "Home Delivery" },
  ];

  return (
    <section id="amenities" className="py-24 bg-coffee-100 text-stone-900 border-y border-coffee-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Verified Facilities
          </motion.h2>
          <p className="text-stone-600 font-sans max-w-2xl mx-auto">
            Everything you need for a comfortable and seamless experience at Town Coffee.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl hover:bg-white transition-colors shadow-sm"
            >
              <item.icon className="w-8 h-8 text-coffee-700" strokeWidth={1.5} />
              <span className="font-medium text-sm text-stone-800">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
