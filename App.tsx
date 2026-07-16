/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Amenities from './components/Amenities';
import Locations from './components/Locations';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-stone-50 selection:bg-coffee-200 selection:text-coffee-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Amenities />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}
