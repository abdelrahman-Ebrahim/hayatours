'use client'; 

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Counts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

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

  const stats = [
    { count: '400+', label: 'Guests satisfied' },
    { count: '1300+', label: 'Trips completed' },
    { count: '50+', label: 'Events covered' },
    { count: '50+', label: 'Exhibitions attended' },
  ];

  return (
    <div
      ref={ref}
      className="min-h-[300px] flex items-center justify-center bg-black text-[#d4c492] py-5 md:py-0"
    >
      <div className="w-full flex flex-col justify-between items-center px-6 md:flex-row lg:px-20 xl:px-40">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2"
          >
            <p className="text-[70px] font-semibold">{item.count}</p>
            <p className="text-[17px] text-[#968152]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counts;
