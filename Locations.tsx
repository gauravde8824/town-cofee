import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';

export default function Locations() {
  const locations = [
    {
      name: "Main Outlet (C-Scheme)",
      address: "Plot No. 4, Durgadas Colony, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001, India",
      phone: "+91 77118 99994",
      highlight: true
    },
    {
      name: "Malviya Nagar Branch",
      address: "E-95, Lal Bahadur Nagar, JLN Marg, Jaipur, Rajasthan 302018",
      phone: "+91 77118 99993 / 0141-4086189",
      highlight: false
    },
    {
      name: "Vaishali Nagar Branch",
      address: "A19, Sarthi Marg, Vidyut Nagar, Jaipur, Rajasthan",
      phone: "+91 91459 62212",
      highlight: false
    }
  ];

  return (
    <section id="locations" className="py-24 bg-stone-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4"
          >
            Find Your Town
          </motion.h2>
          <p className="text-stone-600 font-sans max-w-2xl mx-auto">
            Operating Hours: 09:00 AM – 10:45 PM (All seven days)
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`p-8 rounded-3xl border transition-all hover:shadow-xl ${
                loc.highlight 
                  ? 'bg-stone-900 text-stone-50 border-stone-800' 
                  : 'bg-white text-stone-900 border-stone-200 hover:border-coffee-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-full ${loc.highlight ? 'bg-stone-800' : 'bg-coffee-100'}`}>
                  <MapPin className={`w-6 h-6 ${loc.highlight ? 'text-coffee-400' : 'text-coffee-700'}`} />
                </div>
                <h3 className="text-xl font-serif font-semibold">{loc.name}</h3>
              </div>
              
              <div className="space-y-4">
                <p className={`text-sm leading-relaxed ${loc.highlight ? 'text-stone-300' : 'text-stone-600'}`}>
                  {loc.address}
                </p>
                <div className="flex items-center gap-2 pt-4 border-t border-dashed border-stone-300/50">
                  <Phone className={`w-4 h-4 ${loc.highlight ? 'text-coffee-400' : 'text-coffee-600'}`} />
                  <a href={`tel:${loc.phone.split('/')[0].replace(/[^0-9+]/g, '')}`} className={`font-mono text-sm font-medium hover:underline ${loc.highlight ? 'text-stone-200' : 'text-stone-700'}`}>
                    {loc.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
