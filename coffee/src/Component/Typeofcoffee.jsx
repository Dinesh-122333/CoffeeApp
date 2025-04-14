import React from 'react';
import { useNavigate } from 'react-router-dom';

import espresso from '../assets/images/Types/espresso.jpg';
import latte from '../assets/images/Types/latte.jpg';
import cappuccino from '../assets/images/Types/cappuccino.jpeg';
import americano from '../assets/images/Types/americano.jpg';
import mocha from '../assets/images/Types/mocha.jpg';
import macchiato from '../assets/images/Types/macchiato.jpg';
import types from '../assets/images/types.webp';

const coffeeTypes = [
  {
    name: 'Espresso',
    image: espresso,
    description: 'Strong and bold, served in small concentrated shots.',
    route: '/espresso',
  },
  {
    name: 'Latte',
    image: latte,
    description: 'Smooth espresso with steamed milk and a thin layer of foam.',
    route: '/latte',
  },
  {
    name: 'Cappuccino',
    image: cappuccino,
    description: 'Equal parts espresso, steamed milk, and foam.',
    route: '/cappuccino',
  },
  {
    name: 'Americano',
    image: americano,
    description: 'Espresso with added hot water for a milder flavor.',
    route: '/americano',
  },
  {
    name: 'Mocha',
    image: mocha,
    description: 'A chocolate-flavored coffee made with espresso, steamed milk, and cocoa or chocolate syrup.',
    route: '/mocha',
  },
  {
    name: 'Macchiato',
    image: macchiato,
    description: 'An espresso “stained” with a small amount of milk or foam.',
    route: '/macchiato',
  },
];

export default function Typeofcoffee() {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-amber-800 mb-12">
        Types of Coffee
      </h2>
      <div className="flex flex-col items-center justify-center h-full py-10">
        <img
          src={types}
          className="w-80 h-80 object-contain md:w-[500px] md:h-[500px]"
          alt="coffee types"
        />
      </div>
      <div className="grid gap-16 px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto py-10">
        {coffeeTypes.map((coffee, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            onClick={() => navigate(coffee.route)}
          >
            <img
              src={coffee.image}
              alt={coffee.name}
              className="rounded-t-2xl h-72 w-full object-center"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-amber-700 mb-2">{coffee.name}</h3>
              <p className="text-gray-600 text-sm">{coffee.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
