/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Amenities from "./Amenities";
import Menu from "./Menu";
import Locations from "./Locations";
import Footer from "./Footer";

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
