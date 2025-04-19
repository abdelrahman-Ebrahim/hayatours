'use client';

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
      }));
    } else {
      controls.start(i => ({
        opacity: 0,
        y: 30,
        transition: { delay: i * 0.2, duration: 0.6 },
      }));
    }
  }, [isInView, controls]);

  return (
    <div 
      ref={ref}
      className='w-full flex flex-col items-center justify-center gap-6 px-4 pb-4 text-white py-4 md:pt-0 md:pb-4 md:flex-row lg:px-12'
    >
      {/* First Gallery Item */}
      <div 
        className='w-[280px] sm:w-[364px] h-[430px] flex justify-center items-center relative'
      >
        <div className='absolute inset-0'>
          <Image src={"/gallery1.jpg"} alt='gallery-1' fill />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <p className='lg:text-[26px] text-center z-10 px-2 lg:px-4'>We look forward to serving you and
          meeting your needs.</p>
      </div>

      {/* Second Gallery Item */}
      <div 
        className='w-[280px] sm:w-[364px] h-[430px] flex justify-center items-center relative'
      >
        <div className='absolute inset-0'>
          <Image src={"/gallery2.jpg"} alt='gallery-2' fill />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <p className='lg:text-[26px] text-center z-10 px-2 lg:px-4'>We work diligently to achieve customer satisfaction and provide an exceptional travel experience.</p>
      </div>

      {/* Third Gallery Item */}
      <div 
        className='w-[280px] sm:w-[364px] h-[430px] flex justify-center items-center relative'
      >
        <div className='absolute inset-0'>
          <Image src={"/gallery3.jpg"} alt='gallery-3' fill />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <p className='lg:text-[26px] text-center z-10 px-2 lg:px-4'>We are proud to own a fleet of the finest vehicles with professional drivers.</p>
      </div>
    </div>
  );
};

export default Gallery;