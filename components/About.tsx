'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const headingControls = useAnimation();
  const paragraphControls = useAnimation();

  const t = useTranslations("About");

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
          {t("whoAreWe")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={paragraphControls}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-[650px] text-sm sm:text-[17px]"
        >
          {t("aboutLine1")} <br /> <br />
          {t("aboutLine2")}<br />
          {t("aboutLine3")} <br /> <br /> {t("aboutLine4")} <br />
          {t("aboutLine5")}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
