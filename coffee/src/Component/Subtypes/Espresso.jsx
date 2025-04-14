import React from 'react';
import ristretto from '../../assets/images/Espresso/ristretto.jpg';
import lungo from '../../assets/images/Espresso/lungo.jpg';
import doppio from '../../assets/images/Espresso/doppio.jpeg';
import affogato from '../../assets/images/Espresso/affogato.jpeg';
import espressoconpanna from '../../assets/images/Espresso/espresso-con-panna.jpg';
import typebg from '../../assets/images/typebg.jpg'
import points from '../../assets/images/points.png'

const espresso = {
    name: 'Espresso ☕',
    description: 'Strong and bold, served in small concentrated shots.',
    subtypes: [
      {
        name: 'Ristretto',
        image: ristretto,
        description:
          'A more concentrated shot of espresso using less water. It’s bolder and richer than a regular espresso.',
        steps: [
          'Grind coffee finer than espresso.',
          'Use the same amount of coffee, but half the water.',
          'Brew for 15–20 seconds for a bold shot.'
        ],
      },
      {
        name: 'Lungo',
        image: lungo,
        description:
          'A “long” espresso made with more water, resulting in a lighter flavor with more caffeine.',
        steps: [
          'Use a standard espresso grind.',
          'Double the water (around 60ml).',
          'Brew longer, about 40–50 seconds.'
        ],
      },
      {
        name: 'Doppio',
        image: doppio,
        description:
          'A double shot of espresso for a stronger kick. Twice the volume, twice the strength.',
        steps: [
          'Use double the coffee (about 18–20g).',
          'Tamp evenly and place in a double-shot portafilter.',
          'Extract 2 shots into a single cup (around 60ml).'
        ],
      },
      {
        name: 'Affogato',
        image: affogato,
        description:
          'A scoop of vanilla ice cream "drowned" with a shot of hot espresso. Dessert meets coffee.',
        steps: [
          'Place a scoop of vanilla ice cream in a cup.',
          'Brew a fresh shot of espresso.',
          'Pour the espresso directly over the ice cream.'
        ],
      },
      {
        name: 'Espresso con Panna',
        image: espressoconpanna,
        description:
          'A shot of espresso topped with whipped cream, offering a creamy finish.',
        steps: [
          'Brew a single shot of espresso.',
          'Top with a dollop of whipped cream.',
          'Serve immediately while hot.'
        ],
      },
    ],
  };
  

export default function Espresso() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 pb-5">
              {espresso.name}
            </h1>
            <p className="text-gray-700 text-base">{espresso.description}</p>
          </div>
  
          <div className="space-y-10">
            {espresso.subtypes.map((coffee, index) => (
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
  