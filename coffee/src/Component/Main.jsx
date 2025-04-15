import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import coffeebg from '../assets/images/coffeebg.jpg';

export default function Main() {
  useEffect(() => {
    Aos.init({
      duration: 1600,
    });
  }, []);

  return (
    <div
      className="h-screen bg-cover bg-center shadow-amber-500"
      style={{ backgroundImage: `url(${coffeebg})` }}
    >
      <div className="flex flex-col items-center justify-center h-full  text-center px-4" >
        <h1 className="text-amber-200 font-bold text-5xl md:text-6xl mb-4 drop-shadow-lg/50" data-aos="fade-up">
          Coffee Time ☕
        </h1>
        <p className="text-white text-xl md:text-2xl drop-shadow-md/50" data-aos="fade-up">
          Let's explore the world of coffee together.
        </p>
      </div>
    </div>
  );
}
