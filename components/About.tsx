'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const headingControls = useAnimation();
  const paragraphControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      headingControls.start({ opacity: 1, y: 0 });
      paragraphControls.start({ opacity: 1, y: 0 });
    } else {
      headingControls.start({ opacity: 0, y: 30 });
      paragraphControls.start({ opacity: 0, y: 30 });
    }
  }, [isInView, headingControls, paragraphControls]);

  return (
    <div
      ref={ref}
      className="my-5 py-10 relative min-h-screen bg-aboutBg bg-cover bg-center bg-no-repeat px-4 flex items-center text-white md:py-0 md:px-20"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Content */}
      <div className="flex flex-col gap-5 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={headingControls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-[24px] sm:text-[38px] font-semibold"
        >
          Who are we?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={paragraphControls}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-[650px] text-sm sm:text-[17px]"
        >
          At Hayat Tours, we take pride in being a leading provider of limousine and logistical services for delegations in Saudi Arabia. We offer the best transportation solutions, including pickups, immediate and written translation services, all tailored to meet your needs. <br /> <br />
          What sets us apart from other providers is the high quality of service we deliver. Our limousine company has become a trusted name in luxury transportation, striving to make each journey a unique experience for our clients. <br />
          Our fleet is diverse, featuring the latest luxury vehicles maintained with great care and driven by professional chauffeurs. <br /> <br /> We also offer cost-effective transportation solutions through our efficient car management system, ensuring top-quality service at all times. <br />
          Every service is designed to leave a lasting impression, and we are always here to provide you with the best options for your transportation needs.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
