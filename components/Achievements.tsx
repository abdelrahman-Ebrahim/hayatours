'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Achievements = () => {
    const t = useTranslations("Achievements");

    // Refs for each conference section
    const titleRef = useRef(null);
    const achievementsRef = useRef(null);
    const conf1Ref = useRef(null);
    const conf2Ref = useRef(null);
    const conf3Ref = useRef(null);
    const conf4Ref = useRef(null);

    // Visibility hooks for each section
    const isTitleInView = useInView(titleRef, { amount: 0.1, once: false });
    const isAchievementsInView = useInView(achievementsRef, { amount: 0, once: false });
    const isConf1InView = useInView(conf1Ref, { amount: 0.1, once: false });
    const isConf2InView = useInView(conf2Ref, { amount: 0.1, once: false });
    const isConf3InView = useInView(conf3Ref, { amount: 0.1, once: false });
    const isConf4InView = useInView(conf4Ref, { amount: 0.1, once: false });

    // Animation variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };

    const staggerItem = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className='px-4 py-4 flex flex-col justify-center items-center gap-4 md:gap-6 bg-gridBg md:px-16 md:py-16'>
            {/* Title Section */}
            <motion.div
                ref={titleRef}
                initial="hidden"
                animate={isTitleInView ? "visible" : "hidden"}
                className='flex flex-col justify-center items-center gap-4 w-full'
            >
                <motion.h2
                    className='text-[32px] sm:text-[56px] font-semibold'
                    variants={fadeUp}
                >
                    {t("achievements")}
                </motion.h2>
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center'
                    variants={fadeUp}
                >
                    {t("subTitle")}
                </motion.p>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
                ref={achievementsRef}
                className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                initial="hidden"
                animate={isAchievementsInView ? "visible" : "hidden"}
                variants={staggerContainer}
            >
                {[...Array(18)].map((_, index) => (
                    <motion.div
                        key={index}
                        className={`p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1 ${index % 2 === 0
                                ? 'bg-gradient-to-r from-[#d4c492] to-[#ffffff]'
                                : 'bg-gradient-to-r from-[#F5913C] to-[#2B8D6E]'
                            }`}
                        variants={staggerItem}
                    >
                        {/* Your existing achievement cards content */}
                        {/* Achievement 1 */}
                        {index === 0 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach1")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det1")}</p>
                            </>
                        )}
                        {index === 1 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach2")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det2")}</p>

                            </>
                        )}
                        {index === 2 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach3")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det3")}</p>

                            </>
                        )}
                        {index === 3 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach4")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det4")}</p>

                            </>
                        )}
                        {index === 4 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach5")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det5")}</p>

                            </>
                        )}
                        {index === 5 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach6")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det6")}</p>

                            </>
                        )}
                        {index === 6 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach7")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det7")}</p>

                            </>
                        )}
                        {index === 7 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach8")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det8")}</p>

                            </>
                        )}
                        {index === 8 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach9")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det9")}</p>

                            </>
                        )}
                        {index === 9 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach10")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det10")}</p>

                            </>
                        )}
                        {index === 10 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach11")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det11")}</p>

                            </>
                        )}
                        {index === 11 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach12")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det12")}</p>

                            </>
                        )}
                        {index === 12 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach13")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det13")}</p>

                            </>
                        )}
                        {index === 13 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach14")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det14")}</p>

                            </>
                        )}
                        {index === 14 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach15")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det15")}</p>

                            </>
                        )}
                        {index === 15 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach16")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det16")}</p>

                            </>
                        )}
                        {index === 16 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach17")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det17")}</p>

                            </>
                        )}
                        {index === 17 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>{t("ach18")}</p>
                                <p className='text-sm text-black opacity-80'>{t("det18")}</p>

                            </>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Conference 1 Section */}
            <motion.div
                ref={conf1Ref}
                initial="hidden"
                animate={isConf1InView ? "visible" : "hidden"}
                className='w-full flex flex-col gap-4'
            >
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center font-semibold'
                    variants={fadeUp}
                >
                    {t("con1")}
                </motion.p>
                <motion.div
                    className='w-full h-auto'
                    variants={fadeUp}
                >
                    <Image src={"/conference1.png"} alt='conference1' width={1000} height={350} className='w-full h-full' />
                </motion.div>
            </motion.div>

            {/* Conference 2 Section */}
            <motion.div
                ref={conf2Ref}
                initial="hidden"
                animate={isConf2InView ? "visible" : "hidden"}
                className='w-full flex flex-col gap-4'
            >
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center font-semibold'
                    variants={fadeUp}
                >
                    {t("con2")}
                </motion.p>
                <motion.div
                    className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    variants={staggerContainer}
                >
                    <motion.div
                        className='w-full h-auto'
                        variants={staggerItem}
                    >
                        <Image src={"/conference2.png"} alt='conference2' width={360} height={280} className='w-full h-full' />
                    </motion.div>
                    <motion.div
                        className='w-full h-auto'
                        variants={staggerItem}
                    >
                        <Image src={"/conference3.png"} alt='conference3' width={360} height={280} className='w-full h-full' />
                    </motion.div>
                    <motion.div
                        className='w-full h-auto col-span-1 md:col-span-2 lg:col-span-1'
                        variants={staggerItem}
                    >
                        <Image src={"/conference4.png"} alt='conference4' width={360} height={280} className='w-full h-full' />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Conference 3 Section */}
            <motion.div
                ref={conf3Ref}
                initial="hidden"
                animate={isConf3InView ? "visible" : "hidden"}
                className='w-full flex flex-col gap-4'
            >
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center font-semibold'
                    variants={fadeUp}
                >
                    {t("con3")}
                </motion.p>
                <motion.div
                    className='w-full h-auto'
                    variants={fadeUp}
                >
                    <Image src={"/conference5.png"} alt='conference5' width={1000} height={350} className='w-full h-full' />
                </motion.div>
            </motion.div>

            {/* Conference 4 Section */}
            <motion.div
                ref={conf4Ref}
                initial="hidden"
                animate={isConf4InView ? "visible" : "hidden"}
                className='w-full flex flex-col gap-4'
            >
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center font-semibold'
                    variants={fadeUp}
                >
                    {t("con4")}
                </motion.p>
                <motion.div
                    className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    variants={staggerContainer}
                >
                    <motion.div
                        className='w-full h-auto'
                        variants={staggerItem}
                    >
                        <Image src={"/conference6.png"} alt='conference6' width={360} height={280} className='w-full h-[270px]' />
                    </motion.div>
                    <motion.div
                        className='w-full h-auto'
                        variants={staggerItem}
                    >
                        <Image src={"/conference7.png"} alt='conference7' width={360} height={280} className='w-full h-[270px]' />
                    </motion.div>
                    <motion.div
                        className='w-full h-auto col-span-1 md:col-span-2 lg:col-span-1'
                        variants={staggerItem}
                    >
                        <Image src={"/conference8.png"} alt='conference8' width={360} height={280} className='w-full h-[270px]' />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Achievements;