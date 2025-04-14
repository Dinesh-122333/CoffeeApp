import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 md:py-36 bg-white">
      <h1 className="text-amber-700 font-bold text-4xl md:text-5xl mb-6 drop-shadow-lg text-center">
        About Coffee
      </h1>
      <p className="max-w-4xl text-center text-base sm:text-lg md:text-xl text-gray-700 font-mono leading-relaxed">
        Coffee is more than just a beverage—it's a daily ritual, a source of comfort, and a spark of energy 
        that kickstarts millions of mornings around the world. Made from roasted coffee beans, this rich and 
        aromatic drink comes in countless variations, from the bold espresso to the creamy latte. Coffee is 
        loved for its deep flavor, caffeine boost, and the way it brings people together—whether it's over a 
        casual chat, a focused work session, or a peaceful moment of solitude. Every cup tells a story, and 
        every brew is a little moment of joy.
      </p>
    </div>
  );
}
