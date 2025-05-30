import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';

import classic from '../../assets/images/Latte/classic.jpeg';
import iced from '../../assets/images/Latte/ice.jpg';
import flavored from '../../assets/images/Latte/flavoured.jpg';
import matcha from '../../assets/images/Latte/matcha.jpg';
import chai from '../../assets/images/Latte/chai.jpeg';
import typebg from '../../assets/images/typebg.jpg';
import points from '../../assets/images/points.png'; // your bullet icon image

const latte = {
  name: 'Latte ☕',
  description: 'Smooth espresso mixed with steamed milk and topped with a bit of foam.',
  subtypes: [
    {
      name: 'Classic Latte',
      image: classic,
      description: 'A traditional espresso drink with steamed milk and light foam.',
      videoUrl: "https://www.youtube.com/embed/0PN0MwTcbxI",
      steps: [
        'Pull 1 shot of espresso.',
        'Steam milk until smooth and velvety.',
        'Pour milk over espresso and top with a thin layer of foam.',
      ],
    },
    {
      name: 'Iced Latte',
      image: iced,
      description: 'A chilled latte served over ice for a refreshing twist.',
      videoUrl: "https://www.youtube.com/embed/DCG6SngV9yI",
      steps: [
        'Pull 1–2 shots of espresso.',
        'Add cold milk to a glass of ice.',
        'Pour espresso over milk and stir.',
      ],
    },
    {
      name: 'Flavored Latte',
      image: flavored,
      description: 'Infused with syrups like vanilla, caramel, or hazelnut.',
      videoUrl: "https://www.youtube.com/embed/PziRf6lLZLU",
      steps: [
        'Add flavored syrup to the cup.',
        'Pull a shot of espresso over it.',
        'Steam milk and pour gently over espresso.',
      ],
    },
    {
      name: 'Matcha Latte',
      image: matcha,
      description: 'Made with matcha green tea powder and steamed milk.',
      videoUrl: "https://www.youtube.com/embed/eOnwuHhLNSo",
      steps: [
        'Whisk matcha powder with hot water.',
        'Steam milk until creamy.',
        'Combine matcha and milk in a cup.',
      ],
    },
    {
      name: 'Chai Latte',
      image: chai,
      description: 'Spiced black tea concentrate with steamed milk.',
      videoUrl: "https://www.youtube.com/embed/akQDMTmuWww",
      steps: [
        'Heat chai tea concentrate.',
        'Steam milk until frothy.',
        'Mix tea and milk together.',
      ],
    },
  ],
};

export default function Latte() {
    const navigate = useNavigate();
    
    const [showModal, setShowModal] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");
  
    const openModal = (url) => {
      setVideoUrl(url);
      setShowModal(true);
    };
  
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
        <div className="flex items-center gap-2 pb-5">
          <button
            onClick={() => navigate('/')}
            className="text-3xl text-amber-800 hover:text-amber-700 transition cursor-pointer"
          >
            ←
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800">
            {latte.name}
          </h1>
        </div>
          <p className="text-gray-700 text-base">{latte.description}</p>
        </div>

        <div className="space-y-10">
          {latte.subtypes.map((coffee, index) => (
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

                <ul className="list-disc list-inside text-sm text-gray-600 mt-3 space-y-1">
                  {coffee.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <img src={points} alt="point" className="w-3 h-3 mt-1" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                {/* Open Video Modal */}
                <button className="mt-3 p-1 text-amber-500 bg-amber-200 rounded-full cursor-pointer hover:bg-stone-50 border border-amber-500" onClick={() => openModal(coffee.videoUrl)}>
                  Open Video
                </button>
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
      {showModal && <Modal videoUrl={videoUrl} onClose={() => setShowModal(false)} />}
    </div>
  );
}
