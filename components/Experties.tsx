'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const cardData = [
  {
    number: '01',
    title: 'Distinctive and available 24/7 service',
    content:
      'We provide a 24/7 service to ensure that we meet your transportation needs at any time you require. We also strive to provide vehicles as quickly as possible to ensure your comfort and ease of travel.',
    highlighted: true,
  },
  {
    number: '02',
    title: 'Competitive prices',
    content:
      'We offer high-quality service at affordable and competitive prices. We are committed to providing excellent value for our customers and ensuring their complete satisfaction',
  },
  {
    number: '03',
    title: 'Travel outside the Kingdom',
    content:
      'If you are planning to travel to Bahrain, the United Arab Emirates, or any destination outside the Kingdom, we provide intercountry transportation services...',
    highlighted: true,
  },
  {
    number: '04',
    title: 'Airport reception and departure Service',
    content:
      'We provide airport pickup service to greet you upon your arrival and transport you to your intended destination...',
  },
  {
    number: '05',
    title: 'Delivery service with driver',
    content:
      'We offer a car rental service with professional and trained drivers to ensure your comfort and safety during your travels...',
    highlighted: true,
  },
  {
    number: '06',
    title: 'VIP guests and special occasions',
    content:
      'We specialize in receiving diplomatic delegations, organizing royal ceremonies, and welcoming distinguished guests...',
  },
];

const Experties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6 },
      }));
    } else {
      controls.start(i => ({
        opacity: 0,
        y: 30,
        transition: { delay: i * 0.15, duration: 0.6 },
      }));
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="py-4 flex flex-col justify-center items-center gap-4 md:gap-12 bg-gridBg px-6 lg:px-20 lg:py-16 xl:px-40"
    >
      <h2 className="text-[32px] sm:text-[56px] font-semibold">Our Experties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            className={`p-6 flex flex-col gap-4 rounded-lg ${
              item.highlighted ? 'bg-[#f7f7f8]' : ''
            }`}
          >
            <p className="text-[#d4c492] text-[38px]">{item.number}</p>
            <p className="font-semibold text-[17px] text-[#121217]">{item.title}</p>
            <p className="text-sm text-[#3f3f50]">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experties;
