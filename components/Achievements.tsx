'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Achievements = () => {
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
            <div
                ref={titleRef}
                className='flex flex-col justify-center items-center gap-4 w-full'
            >
                <motion.h2
                    className='text-[32px] sm:text-[56px] font-semibold'
                >
                    Achievements
                </motion.h2>
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center'
                >
                    Celebrating our success and milestones
                </motion.p>
            </div>

            {/* Achievements Grid */}
            <div
                ref={achievementsRef}
                className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            >
                {[...Array(18)].map((_, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1 ${index % 2 === 0
                                ? 'bg-gradient-to-r from-[#d4c492] to-[#ffffff]'
                                : 'bg-gradient-to-r from-[#F5913C] to-[#2B8D6E]'
                            }`}
                    >
                        {/* Your existing achievement cards content */}
                        {/* Achievement 1 */}
                        {index === 0 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2015: The World Civil Aviation Conference</p>
                                <p className='text-sm text-black opacity-80'>A significant global event in aviation hosted in 2015.</p>
                            </>
                        )}
                        {index === 1 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2015: King Abdulaziz International Quran Competition in Mecca</p>
                                <p className='text-sm text-black opacity-80'>A prestigious event honoring the best reciters of the Quran.</p>

                            </>
                        )}
                        {index === 2 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2016: Gulf Forum for Ministers of Labor</p>
                                <p className='text-sm text-black opacity-80'>A conference aimed at improving labor relations in the Gulf region.</p>

                            </>
                        )}
                        {index === 3 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2016: Future Investment Initiative</p>
                                <p className='text-sm text-black opacity-80'>A groundbreaking initiative shaping the future of investment in the region.</p>

                            </>
                        )}
                        {index === 4 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2016: Saudi Forum for Exhibition and Conference Industry</p>
                                <p className='text-sm text-black opacity-80'>A platform for industry leaders to discuss the exhibition and conference sector.</p>

                            </>
                        )}
                        {index === 5 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2016: The Islamic-Gulf-American Summit attended by President Donald Trump</p>
                                <p className='text-sm text-black opacity-80'>A significant diplomatic summit with international implications.</p>

                            </>
                        )}
                        {index === 6 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2017: Misk Global Forum</p>
                                <p className='text-sm text-black opacity-80'>A global platform for inspiring young minds and leadership.</p>

                            </>
                        )}
                        {index === 7 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2017: Poet of the Million in Riyadh</p>
                                <p className='text-sm text-black opacity-80'>A prestigious cultural event in Riyadh celebrating poetry.</p>

                            </>
                        )}
                        {index === 8 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2018: Harvard University Delegation in Riyadh</p>
                                <p className='text-sm text-black opacity-80'>A significant academic visit by Harvard University to Riyadh.</p>

                            </>
                        )}
                        {index === 9 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2018: Misk Global Forum</p>
                                <p className='text-sm text-black opacity-80'>An inspiring gathering of global leaders and thinkers at Misk Global Forum.</p>

                            </>
                        )}
                        {index === 10 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2019: Misk Global Forum</p>
                                <p className='text-sm text-black opacity-80'>Another year of excellence at the Misk Global Forum, furthering its impact.</p>

                            </>
                        )}
                        {index === 11 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2019: Winter at Tantora in Al-Ula</p>
                                <p className='text-sm text-black opacity-80'>A magical winter festival showcasing the culture of Al-Ula.</p>

                            </>
                        )}
                        {index === 12 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2019: MdlBeast Concert</p>
                                <p className='text-sm text-black opacity-80'>A memorable concert bringing together stars from across the Middle East.</p>

                            </>
                        )}
                        {index === 13 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2022: Joway Award Ceremony in Riyadh</p>
                                <p className='text-sm text-black opacity-80'>A prestigious award ceremony recognizing achievements in various fields.</p>

                            </>
                        )}
                        {index === 14 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2023: Saudi-Omani Industries Exhibition</p>
                                <p className='text-sm text-black opacity-80'>A significant exhibition showcasing industries from both Saudi Arabia and Oman.</p>

                            </>
                        )}
                        {index === 15 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2023: Arab Youth and Sports Ministers Summit in Jeddah</p>
                                <p className='text-sm text-black opacity-80'>A summit focused on youth empowerment and sports development in the Arab world.</p>

                            </>
                        )}
                        {index === 16 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2023: Islamic Affairs Ministers Conference (Integration and Understanding) in Mecca</p>
                                <p className='text-sm text-black opacity-80'>A conference aimed at fostering integration and understanding within Islamic communities.</p>

                            </>
                        )}
                        {index === 17 && (
                            <>
                                <p className='font-semibold text-[18px] text-black'>2024: G20 Summit in Riyadh</p>
                                <p className='text-sm text-black opacity-80'>A major global summit focusing on international cooperation and economic development.</p>

                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Conference 1 Section */}
            <div
                ref={conf1Ref}
                

                className='w-full flex flex-col gap-4'
            >
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center font-semibold'
                >
                    Meetings of the 46th session of the Council of Arab Ministers of Youth and Sports
                </motion.p>
                <div
                    className='w-full h-auto'
                >
                    <Image src={"/conference1.png"} alt='conference1' width={1000} height={350} className='w-full h-full' />
                </div>
            </div>

            {/* Conference 2 Section */}
            <div
                ref={conf2Ref}
                
               
                className='w-full flex flex-col gap-4'
            >
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center font-semibold'
                >
                    Global Summit of the General Aviation 2016
                </motion.p>
                <div
                    className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    
                >
                    <div
                        className='w-full h-auto'
                       
                    >
                        <Image src={"/conference2.png"} alt='conference2' width={360} height={280} className='w-full h-full' />
                    </div>
                    <div
                        className='w-full h-auto'
                        
                    >
                        <Image src={"/conference3.png"} alt='conference3' width={360} height={280} className='w-full h-full' />
                    </div>
                    <div
                        className='w-full h-auto col-span-1 md:col-span-2 lg:col-span-1'
                        
                    >
                        <Image src={"/conference4.png"} alt='conference4' width={360} height={280} className='w-full h-full' />
                    </div>
                </div>
            </div>

            {/* Conference 3 Section */}
            <div
                ref={conf3Ref}
                
                
                className='w-full flex flex-col gap-4'
            >
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center font-semibold'
                >
                    FII 2017 Future Investment Initiative Ritz Carlton Riyadh
                </motion.p>
                <div
                    className='w-full h-auto'
                >
                    <Image src={"/conference5.png"} alt='conference5' width={1000} height={350} className='w-full h-full' />
                </div>
            </div>

            {/* Conference 4 Section */}
            <div
                ref={conf4Ref}
                
                
                className='w-full flex flex-col gap-4'
            >
                <motion.p
                    className='text-[18px] sm:text-[24px] text-center font-semibold'
                >
                    Joy Awards 2022 ,Riyadh KSA
                </motion.p>
                <div
                    className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    
                >
                    <div
                        className='w-full h-auto'
                       
                    >
                        <Image src={"/conference6.png"} alt='conference6' width={360} height={280} className='w-full h-[270px]' />
                    </div>
                    <div
                        className='w-full h-auto'
                       
                    >
                        <Image src={"/conference7.png"} alt='conference7' width={360} height={280} className='w-full h-[270px]' />
                    </div>
                    <div
                        className='w-full h-auto col-span-1 md:col-span-2 lg:col-span-1'
                       
                    >
                        <Image src={"/conference8.png"} alt='conference8' width={360} height={280} className='w-full h-[270px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;