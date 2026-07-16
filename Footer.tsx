import { Coffee, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 font-serif text-2xl font-bold text-white mb-6">
            <Coffee className="w-8 h-8 text-coffee-500" />
            <span>Town Coffee</span>
          </a>
          <p className="mb-6 max-w-sm text-sm">
            Brewing Coffee Stories in Jaipur Since 2019. Good Mood, Good Food, Good People & Adorable Furry Friends.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/towncoffeejaipur" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-coffee-600 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-coffee-600 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://in.linkedin.com/company/town-coffee" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-coffee-600 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold tracking-wider uppercase text-sm mb-6">Information</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
            <li><a href="#amenities" className="hover:text-white transition-colors">Facilities</a></li>
            <li><a href="#locations" className="hover:text-white transition-colors">Locations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold tracking-wider uppercase text-sm mb-6">Reservations</h4>
          <ul className="space-y-3 text-sm">
            <li>Walk-in Seating Available</li>
            <li>Phone Reservation</li>
            <li>Instagram Direct Message</li>
            <li className="text-coffee-400 mt-4 font-medium">Walk-ins highly encouraged.</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Town Coffee Jaipur. All rights reserved.</p>
        <p>Verified Business Dataset: July 2026</p>
      </div>
    </footer>
  );
}
