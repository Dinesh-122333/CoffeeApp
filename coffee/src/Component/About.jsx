import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import coffee1 from '../assets/images/coffee1.png';
import coffee2 from '../assets/images/coffee2.png';

export default function About() {
    useEffect(() => {
      Aos.init({
        duration: 1600,
      });
    }, []);
  
  return (
    <div className="bg-white">
      {/* Main About Section */}
      <div className="flex flex-col items-center justify-center px-6 py-24 md:py-36">
        <h1 className="text-amber-700 font-bold text-4xl md:text-5xl mb-6 drop-shadow-lg text-center" data-aos="fade-up">
          About Coffee
        </h1>
        <p data-aos="fade-up" className="max-w-4xl text-center text-base sm:text-lg md:text-xl text-gray-700 font-mono leading-relaxed mb-10">
          Coffee is more than just a beverage—it's a daily ritual, a source of comfort, and a spark of energy 
          that kickstarts millions of mornings around the world. Made from roasted coffee beans, this rich and 
          aromatic drink comes in countless variations, from the bold espresso to the creamy latte. Coffee is 
          loved for its deep flavor, caffeine boost, and the way it brings people together—whether it's over a 
          casual chat, a focused work session, or a peaceful moment of solitude. Every cup tells a story, and 
          every brew is a little moment of joy.
        </p>
      </div>

      {/* Interesting Fact 1 - Text Left, Image Right */}
      <div className="flex flex-col md:flex-row justify-center px-6 py-16 md:py-20">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
          <h2 className="text-amber-700 font-serif font-bold text-3xl md:text-4xl mb-4 drop-shadow" data-aos="fade-right">
            Did You Know?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl font-light leading-relaxed font-mono" data-aos="fade-right">
            ☕ Coffee is the second most traded commodity in the world—only behind crude oil! From small cafés 
            to global franchises, its demand spans continents and cultures.
          </p>
        </div>
        <div className="md:w-1/3">
          <img src={coffee1} alt="Coffee beans" className="w-full rounded-full shadow-lg" data-aos="fade-left"/>
        </div>
      </div>

      {/* Interesting Fact 2 - Image Left, Text Right */}
      <div className="flex flex-col md:flex-row-reverse justify-center px-6 py-16 md:py-20">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-10">
          <h2 className="text-amber-700 font-serif font-bold text-3xl md:text-4xl mb-4 drop-shadow"  data-aos="fade-left">
            Legend Behind Coffee
          </h2>
          <p className="text-gray-800 text-lg md:text-xl font-light leading-relaxed font-mono" data-aos="fade-left">
            🌍 According to legend, Ethiopian shepherds discovered coffee when they noticed their goats 
            dancing energetically after eating coffee berries. The world has been buzzing ever since!
          </p>
        </div>
        <div className="md:w-1/3">
          <img src={coffee2} alt="Ethiopian coffee origin" className="w-full rounded-full shadow-lg" data-aos="fade-right"/>
        </div>
      </div>

    </div>
  );
}
