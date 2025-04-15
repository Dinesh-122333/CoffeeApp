import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import qbanner from '../../assets/images/footer.png';

export default function Last() {
        useEffect(() => {
          Aos.init({
            duration: 1600,
          });
        }, []);
  return (
    <div
      className="h-screen bg-cover bg-center flex pt-30 justify-center"
      style={{ backgroundImage: `url(${qbanner})` }}
    >
      <h1
        className="text-center text-[#f3e5ab] text-3xl md:text-5xl font-semibold px-6 py-10 max-w-3xl leading-relaxed"
        style={{
          fontFamily: "'Dancing Script', cursive",
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}
         data-aos="fade-up"
      >
        Coffee is a hug in a mug — strong, warm, and always there when you need it.
      </h1>
    </div>
  );
}
