'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';


const Experties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const controls = useAnimation();
  const t = useTranslations("Experties");

  const cardData = [
    {
      number: t("number1"),
      title: t("title1"),
      content: t("content1"),
      highlighted: true,
    },
    {
      number: t("number2"),
      title: t("title2"),
      content: t("content2"),
    },
    {
      number: t("number3"),
      title: t("title3"),
      content: t("content3"),
      highlighted: true,
    },
    {
      number: t("number4"),
      title: t("title4"),
      content: t("content4"),
    },
    {
      number: t("number5"),
      title: t("title5"),
      content: t("content5"),
      highlighted: true,
    },
    {
      number: t("number6"),
      title: t("title6"),
      content: t("content6"),
    },
  ];

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
      <h2 className="text-[32px] sm:text-[56px] font-semibold">{t("ourExperties")}</h2>
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
            <p className="text-[#af8d25] text-[38px]">{item.number}</p>
            <p className="font-semibold text-[17px] text-[#121217]">{item.title}</p>
            <p className="text-sm text-[#3f3f50]">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experties;
