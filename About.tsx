import { motion } from 'motion/react';
import { Heart, Users, Coffee, Bone } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Coffee, title: "Specialty Coffee", desc: "Expertly brewed stories." },
    { icon: Users, title: "Community Vibe", desc: "A place for good people." },
    { icon: Bone, title: "Pet Friendly", desc: "Adorable furry friends welcome." },
    { icon: Heart, title: "Great Food", desc: "Premium cafe dining." },
  ];

  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
              Good Mood, Good Food, <br className="hidden md:block"/>
              <span className="text-coffee-700 italic">Good People.</span>
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed font-sans text-lg">
              <p>
                Established in 2019, Town Coffee has grown to become Jaipur's premier destination for specialty coffee and casual dining. We believe a coffee house is more than just a place to grab a drink—it's a community hub for students, young professionals, content creators, and coffee enthusiasts.
              </p>
              <p>
                Whether you're looking for a quiet corner to work remotely, a vibrant space for social meetups, or a pet-friendly environment to relax with your furry companions, Town Coffee is designed with you in mind.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-200">
              {highlights.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-coffee-100 flex items-center justify-center text-coffee-700">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-stone-900">{item.title}</h3>
                  <p className="text-sm text-stone-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-t-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80" 
                alt="Friends enjoying coffee" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-8 w-32 h-32 bg-coffee-200 rounded-full blur-2xl opacity-60 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-stone-300 rounded-full blur-3xl opacity-50 -z-10" />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs"
            >
              <div className="flex gap-1 text-amber-400 mb-2">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="font-serif italic text-stone-700 text-sm">"Strong ambience, excellent Vietnamese Coffee, and the perfect popular meeting destination."</p>
              <p className="text-xs text-stone-500 mt-2 font-semibold uppercase tracking-wider">— Community Review</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
