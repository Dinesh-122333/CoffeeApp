import React from 'react';
import traditional from '../../assets/images/Cappuccino/traditional.jpg';
import iced from '../../assets/images/Cappuccino/iced.webp';
import dry from '../../assets/images/Cappuccino/dry.jpeg';
import wet from '../../assets/images/Cappuccino/wet.jpeg';
import flavored from '../../assets/images/Cappuccino/flavoured.webp';
import typebg from '../../assets/images/typebg.jpg';
import points from '../../assets/images/points.png'; // your bullet icon image

const cappuccino = {
  name: 'Cappuccino ☕',
  description: 'A coffee drink with equal parts espresso, steamed milk, and foam.',
  subtypes: [
    {
      name: 'Traditional Cappuccino',
      image: traditional,
      description: 'Balanced layers of espresso, steamed milk, and milk foam.',
      steps: [
        'Pull 1 shot of espresso into a cup.',
        'Steam milk until foamy.',
        'Layer steamed milk and foam over the espresso.',
      ],
    },
    {
      name: 'Iced Cappuccino',
      image: iced,
      description: 'A chilled version with cold milk and foam served over ice.',
      steps: [
        'Pull a double shot of espresso.',
        'Add cold milk and stir.',
        'Top with milk foam and ice cubes.',
      ],
    },
    {
      name: 'Dry Cappuccino',
      image: dry,
      description: 'Foam-heavy with less milk, for a stronger espresso flavor.',
      steps: [
        'Brew 1–2 shots of espresso.',
        'Froth milk heavily (minimal liquid).',
        'Spoon foam on top of espresso.',
      ],
    },
    {
      name: 'Wet Cappuccino',
      image: wet,
      description: 'More steamed milk than foam, creamier and smoother.',
      steps: [
        'Prepare a shot of espresso.',
        'Steam milk with little foam.',
        'Pour steamed milk gently over espresso.',
      ],
    },
    {
      name: 'Flavored Cappuccino',
      image: flavored,
      description: 'Infused with flavors like vanilla, caramel, or hazelnut.',
      steps: [
        'Pull a shot of espresso.',
        'Add flavored syrup of choice.',
        'Top with steamed milk and foam.',
      ],
    },
  ],
};

export default function Cappuccino() {
  return (
    <div className="relative py-16 px-4 md:px-16">

      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${typebg})` }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800 pb-5">
            {cappuccino.name}
          </h1>
          <p className="text-gray-700 text-base">{cappuccino.description}</p>
        </div>

        <div className="space-y-10">
          {cappuccino.subtypes.map((coffee, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Left Text */}
              <div className="w-full md:w-2/3 p-6 text-left">
                <h3 className="text-2xl font-semibold text-amber-700 mb-3">
                  {coffee.name}
                </h3>
                <p className="text-gray-700 text-base">{coffee.description}</p>

                {/* Steps */}
                <ul className="list-disc list-inside text-sm text-gray-600 mt-3 space-y-1">
                  {coffee.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <img src={points} alt="point" className="w-3 h-3 mt-1" />
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
