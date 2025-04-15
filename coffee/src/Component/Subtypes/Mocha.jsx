import React from 'react';
import { useNavigate } from 'react-router-dom';

import classic from '../../assets/images/Mocha/classic.webp';
import whiteChoco from '../../assets/images/Mocha/white-chocolate.jpg';
import icedMocha from '../../assets/images/Mocha/ice.jpeg';
import peppermint from '../../assets/images/Mocha/pepermint.jpeg';
import frappuccino from '../../assets/images/Mocha/frappuccino.jpg';
import typebg from '../../assets/images/typebg.jpg';
import points from '../../assets/images/points.png'; // Bullet point icon

const mocha = {
  name: 'Mocha ☕🍫',
  description: 'A rich blend of espresso, steamed milk, and chocolate, often topped with whipped cream.',
  subtypes: [
    {
      name: 'Classic Mocha',
      image: classic,
      description: 'A comforting combination of espresso, chocolate syrup, and steamed milk.',
      steps: [
        'Pull a shot of espresso.',
        'Add chocolate syrup to the espresso.',
        'Top with steamed milk and whipped cream.',
      ],
    },
    {
      name: 'White Chocolate Mocha',
      image: whiteChoco,
      description: 'A sweeter twist using white chocolate instead of dark chocolate.',
      steps: [
        'Pull espresso shot into the cup.',
        'Stir in white chocolate sauce.',
        'Add steamed milk and finish with whipped cream.',
      ],
    },
    {
      name: 'Iced Mocha',
      image: icedMocha,
      description: 'A chilled mocha with espresso, milk, and chocolate over ice.',
      steps: [
        'Mix chocolate and espresso together.',
        'Pour over ice and add cold milk.',
        'Top with whipped cream and drizzle chocolate.',
      ],
    },
    {
      name: 'Peppermint Mocha',
      image: peppermint,
      description: 'A seasonal favorite with peppermint syrup added to the classic mocha.',
      steps: [
        'Add chocolate and peppermint syrup to espresso.',
        'Stir well and pour in steamed milk.',
        'Top with whipped cream and peppermint shavings.',
      ],
    },
    {
      name: 'Mocha Frappuccino',
      image: frappuccino,
      description: 'A blended iced coffee drink with mocha flavor, perfect for hot days.',
      steps: [
        'Blend ice, milk, espresso, and mocha syrup.',
        'Pour into a glass.',
        'Top with whipped cream and chocolate drizzle.',
      ],
    },
  ],
};

export default function Mocha() {
  const navigate = useNavigate(); 
  
  return (
    <div className="relative py-16 px-4 md:px-16">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${typebg})` }}
      ></div>

      {/* Foreground */}
      <div className="relative z-10">
        <div className="mb-12">
        <div className="flex items-center gap-2 pb-5">
          <button
            onClick={() => navigate('/')}
            className="text-3xl text-amber-800 hover:text-amber-700 transition cursor-pointer"
          >
            ←
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800">
            {Mocha.name}
          </h1>
        </div>
          <p className="text-gray-700 text-base">{mocha.description}</p>
        </div>

        <div className="space-y-10">
          {mocha.subtypes.map((coffee, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Text Content */}
              <div className="w-full md:w-2/3 p-6 text-left">
                <h3 className="text-2xl font-semibold text-amber-700 mb-3">
                  {coffee.name}
                </h3>
                <p className="text-gray-700 text-base">{coffee.description}</p>

                <ul className="list-inside text-sm text-gray-600 mt-3 space-y-1">
                  {coffee.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <img src={points} alt="point" className="w-3 h-3 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-64 object-cover md:rounded-l-none rounded-b-2xl md:rounded-r-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
