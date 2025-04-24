'use client'; 

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Counts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const controls = useAnimation();

  const t = useTranslations("Count");

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
    { count: t("count1"), label: t("guests") },
    { count: t("count2"), label: t("trips") },
    { count: t("count3"), label: t("events") },
    { count: t("count4"), label: t("exhibitions") },
  ];

  return (
    <div
      ref={ref}
      className="min-h-[300px] flex items-center justify-center bg-black text-[#d4c492] py-5 md:py-0"
    >
      <div className="w-full flex flex-col justify-between items-center px-6 md:flex-row lg:px-20 xl:px-40">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            className="flex flex-col justify-center items-center gap-2"
          >
            <p className="text-[70px] font-semibold">{item.count}</p>
            <p className="text-[17px] text-[#968152]">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Counts;
