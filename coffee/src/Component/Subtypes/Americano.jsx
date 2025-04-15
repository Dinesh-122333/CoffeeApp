import React from 'react';
import { useNavigate } from 'react-router-dom';

import hot from '../../assets/images/Americano/hot.jpeg'
import iced from '../../assets/images/Americano/ice.webp'
import sparkling from '../../assets/images/Americano/sparkling.jpeg'
import citrus from '../../assets/images/Americano/citrus.jpeg'
import honey from '../../assets/images/Americano/honey.jpg'
import typebg from '../../assets/images/typebg.jpg';
import points from '../../assets/images/points.png'; // your custom bullet point image

const americano = {
  name: 'Americano ☕',
  description: 'A smooth, diluted espresso drink, served hot or cold with various twists.',
  subtypes: [
    {
      name: 'Hot Americano',
      image: hot,
      description: 'A classic, warm espresso-based drink diluted with hot water.',
      steps: [
        'Pull 1–2 shots of espresso.',
        'Heat water to ~85°C–90°C.',
        'Add hot water over espresso (1:2 or 1:3 ratio).',
      ],
    },
    {
      name: 'Iced Americano',
      image: iced,
      description: 'A cold and refreshing Americano served over ice.',
      steps: [
        'Pull 1–2 shots of espresso.',
        'Fill a glass with ice cubes.',
        'Pour cold water and espresso over ice.',
      ],
    },
    {
      name: 'Sparkling Americano',
      image: sparkling,
      description: 'Fizzy and refreshing — espresso with sparkling water and ice.',
      steps: [
        'Prepare 1 shot of espresso.',
        'Add sparkling water to a glass with ice.',
        'Pour espresso over the top.',
      ],
    },
    {
      name: 'Citrus Americano',
      image: citrus,
      description: 'Iced Americano infused with orange or lemon slices for a tangy twist.',
      steps: [
        'Make an iced Americano.',
        'Add orange/lemon slices.',
        'Stir and garnish with citrus peel.',
      ],
    },
    {
      name: 'Honey Americano',
      image: honey,
      description: 'A smooth and slightly sweet Americano, infused with natural honey.',
      steps: [
        'Mix 1 tsp honey into espresso.',
        'Stir until fully dissolved.',
        'Add hot or cold water as preferred.',
      ],
    },
  ],
};

export default function Americano() {
  const navigate = useNavigate(); 

  return (
    <div className="relative py-16 px-4 md:px-16">
      
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${typebg})` }}
      ></div>

      {/* Content Over Background */}
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
            {americano.name}
          </h1>
        </div>
          <p className="text-gray-700 text-base">{americano.description}</p>
        </div>

        <div className="space-y-10">
          {americano.subtypes.map((coffee, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Left Text Content */}
              <div className="w-full md:w-2/3 p-6 text-left">
                <h3 className="text-2xl font-semibold text-amber-700 mb-3">
                  {coffee.name}
                </h3>
                <p className="text-gray-700 text-base">{coffee.description}</p>
                
                <ul className="text-sm text-gray-600 mt-3 space-y-2">
                  {coffee.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <img src={points} alt="bullet" className="w-3 h-3 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Image */}
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
