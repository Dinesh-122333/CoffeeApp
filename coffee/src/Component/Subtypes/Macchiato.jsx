import React from 'react';
import classic from '../../assets/images/Macchiato/classic.jpg';
import iced from '../../assets/images/Macchiato/ice.jpeg';
import caramel from '../../assets/images/Macchiato/caramel.webp';
import espressoMac from '../../assets/images/Macchiato/espresso-macchiato.jpg';
import latteMac from '../../assets/images/Macchiato/latte-macchiato.webp';
import typebg from '../../assets/images/typebg.jpg';
import points from '../../assets/images/points.png'; // bullet icon

const macchiato = {
  name: 'Macchiato ☕',
  description: 'Espresso "marked" with a dash of milk or milk foam.',
  subtypes: [
    {
      name: 'Classic Macchiato',
      image: classic,
      description: 'A simple espresso shot lightly "stained" with a dash of steamed milk.',
      steps: [
        'Pull a single shot of espresso.',
        'Steam a small amount of milk.',
        'Add a dollop of milk to the espresso.',
      ],
    },
    {
      name: 'Iced Macchiato',
      image: iced,
      description: 'A cold variation with layers of espresso and milk over ice.',
      steps: [
        'Fill glass with ice and milk.',
        'Pull 1–2 shots of espresso.',
        'Pour espresso over the milk to create layers.',
      ],
    },
    {
      name: 'Caramel Macchiato',
      image: caramel,
      description: 'Layered espresso and milk topped with vanilla syrup and caramel drizzle.',
      steps: [
        'Add vanilla syrup and cold milk to a cup of ice.',
        'Pour espresso over the top.',
        'Drizzle caramel sauce for finish.',
      ],
    },
    {
      name: 'Espresso Macchiato',
      image: espressoMac,
      description: 'A bold espresso shot topped with a tiny bit of milk foam.',
      steps: [
        'Pull a shot of espresso.',
        'Froth a small quantity of milk.',
        'Spoon a bit of foam on top of the espresso.',
      ],
    },
    {
      name: 'Latte Macchiato',
      image: latteMac,
      description: 'Steamed milk with a shot of espresso poured over for a layered effect.',
      steps: [
        'Steam and pour milk into a tall glass.',
        'Froth a thin layer of foam.',
        'Gently pour espresso through the foam.',
      ],
    },
  ],
};

export default function Macchiato() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800 pb-5">
            {macchiato.name}
          </h1>
          <p className="text-gray-700 text-base">{macchiato.description}</p>
        </div>

        <div className="space-y-10">
          {macchiato.subtypes.map((coffee, index) => (
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
