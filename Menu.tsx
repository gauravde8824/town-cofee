import { motion } from 'motion/react';
import { Coffee, Utensils } from 'lucide-react';

export default function Menu() {
  const coffeeMenu = [
    { name: "Vietnamese Coffee", desc: "A crowd favorite with condensed milk." },
    { name: "Cold Brew", desc: "Steeped slowly for a smooth finish." },
    { name: "Biscoff Latte", desc: "Rich latte infused with Biscoff goodness." },
    { name: "Chilli Cinnamon Mocha", desc: "A spicy, warming chocolate twist." },
    { name: "Cortado", desc: "Equal parts espresso and steamed milk." },
    { name: "Pour Over", desc: "Precision brewed single-origin beans." },
  ];

  const foodMenu = [
    { name: "English Breakfast", desc: "The classic morning starter." },
    { name: "Artisan Pizza", desc: "Hand-tossed and baked to perfection." },
    { name: "Gourmet Burgers", desc: "Juicy patties with fresh fixings." },
    { name: "Signature Cheesecake", desc: "Creamy, rich, and decadent." },
    { name: "Fresh Salads", desc: "Crisp greens and seasonal ingredients." },
    { name: "Pasta Delizia", desc: "Authentic continental flavors." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="menu" className="py-24 bg-stone-900 text-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Curated Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-400 font-sans max-w-2xl mx-auto"
          >
            From our signature specialty coffees to continental delights. ₹400 – ₹1,000 approximate cost for two.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Coffee Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-700">
              <Coffee className="w-8 h-8 text-coffee-500" />
              <h3 className="text-3xl font-serif font-semibold text-coffee-100">Specialty Coffee</h3>
            </div>
            <div className="space-y-6">
              {coffeeMenu.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="group">
                  <div className="flex items-end justify-between gap-4 mb-1">
                    <h4 className="text-lg font-medium text-stone-200 group-hover:text-coffee-500 transition-colors">{item.name}</h4>
                    <div className="flex-1 border-b border-stone-700 border-dashed mb-1.5 opacity-50"></div>
                  </div>
                  <p className="text-sm text-stone-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Food Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-stone-700">
              <Utensils className="w-8 h-8 text-coffee-500" />
              <h3 className="text-3xl font-serif font-semibold text-coffee-100">Cafe Dining</h3>
            </div>
            <div className="space-y-6">
              {foodMenu.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="group">
                  <div className="flex items-end justify-between gap-4 mb-1">
                    <h4 className="text-lg font-medium text-stone-200 group-hover:text-coffee-500 transition-colors">{item.name}</h4>
                    <div className="flex-1 border-b border-stone-700 border-dashed mb-1.5 opacity-50"></div>
                  </div>
                  <p className="text-sm text-stone-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1600&q=80" 
          alt="Coffee beans texture" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
