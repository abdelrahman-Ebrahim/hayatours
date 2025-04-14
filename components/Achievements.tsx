import Image from 'next/image'
import React from 'react'

const Achievements = () => {
    return (
        <div className='px-16 py-16 flex flex-col justify-center items-center gap-6 bg-gridBg'>
            <h2 className='text-[56px] font-semibold'>Achievements</h2>
            <p className='text-[24px] text-center mb-12'>Celebrating our success and milestones</p>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Achievement 1 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2015: The World Civil Aviation Conference</p>
                    <p className='text-sm text-black opacity-80'>A significant global event in aviation hosted in 2015.</p>
                </div>

                {/* Achievement 2 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2015: King Abdulaziz International Quran Competition in Mecca</p>
                    <p className='text-sm text-black opacity-80'>A prestigious event honoring the best reciters of the Quran.</p>
                </div>

                {/* Achievement 3 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2016: Gulf Forum for Ministers of Labor</p>
                    <p className='text-sm text-black opacity-80'>A conference aimed at improving labor relations in the Gulf region.</p>
                </div>

                {/* Achievement 4 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2016: Future Investment Initiative</p>
                    <p className='text-sm text-black opacity-80'>A groundbreaking initiative shaping the future of investment in the region.</p>
                </div>

                {/* Achievement 5 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2016: Saudi Forum for Exhibition and Conference Industry</p>
                    <p className='text-sm text-black opacity-80'>A platform for industry leaders to discuss the exhibition and conference sector.</p>
                </div>

                {/* Achievement 6 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2016: The Islamic-Gulf-American Summit attended by President Donald Trump</p>
                    <p className='text-sm text-black opacity-80'>A significant diplomatic summit with international implications.</p>
                </div>

                {/* Achievement 7 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2017: Misk Global Forum</p>
                    <p className='text-sm text-black opacity-80'>A global platform for inspiring young minds and leadership.</p>
                </div>

                {/* Achievement 8 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2017: Poet of the Million in Riyadh</p>
                    <p className='text-sm text-black opacity-80'>A prestigious cultural event in Riyadh celebrating poetry.</p>
                </div>

                {/* Achievement 9 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2018: Harvard University Delegation in Riyadh</p>
                    <p className='text-sm text-black opacity-80'>A significant academic visit by Harvard University to Riyadh.</p>
                </div>

                {/* Achievement 10 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2018: Misk Global Forum</p>
                    <p className='text-sm text-black opacity-80'>An inspiring gathering of global leaders and thinkers at Misk Global Forum.</p>
                </div>

                {/* Achievement 11 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2019: Misk Global Forum</p>
                    <p className='text-sm text-black opacity-80'>Another year of excellence at the Misk Global Forum, furthering its impact.</p>
                </div>

                {/* Achievement 12 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2019: Winter at Tantora in Al-Ula</p>
                    <p className='text-sm text-black opacity-80'>A magical winter festival showcasing the culture of Al-Ula.</p>
                </div>

                {/* Achievement 13 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2019: Middle East Concert</p>
                    <p className='text-sm text-black opacity-80'>A memorable concert bringing together stars from across the Middle East.</p>
                </div>

                {/* Achievement 14 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2022: Joway Award Ceremony in Riyadh</p>
                    <p className='text-sm text-black opacity-80'>A prestigious award ceremony recognizing achievements in various fields.</p>
                </div>

                {/* Achievement 15 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2023: Saudi-Omani Industries Exhibition</p>
                    <p className='text-sm text-black opacity-80'>A significant exhibition showcasing industries from both Saudi Arabia and Oman.</p>
                </div>

                {/* Achievement 16 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2023: Arab Youth and Sports Ministers Summit in Jeddah</p>
                    <p className='text-sm text-black opacity-80'>A summit focused on youth empowerment and sports development in the Arab world.</p>
                </div>

                {/* Achievement 17 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2023: Islamic Affairs Ministers Conference (Integration and Understanding) in Mecca</p>
                    <p className='text-sm text-black opacity-80'>A conference aimed at fostering integration and understanding within Islamic communities.</p>
                </div>

                {/* Achievement 18 */}
                <div className='bg-gradient-to-r from-[#d4c492] to-[#ffffff] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl hover:rotate-1'>
                    <p className='font-semibold text-[18px] text-black'>2024: G20 Summit in Riyadh</p>
                    <p className='text-sm text-black opacity-80'>A major global summit focusing on international cooperation and economic development.</p>
                </div>
            </div>
            <p className='text-[24px]'>Meetings of the 46th session of the Council of Arab Ministers of Youth and Sports</p>
            <div className='w-full h-auto'>
                <Image src={"/conference1.png"} alt='conference1' width={1000} height={350} className='w-full h-full' />
            </div>
            <p className='text-[24px]'>Global Summit of the General Aviation 2016</p>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='w-full h-auto'>
                    <Image src={"/conference2.png"} alt='conference2' width={360} height={280} className='w-full h-full' />
                </div>
                <div className='w-full h-auto'>
                    <Image src={"/conference3.png"} alt='conference3' width={360} height={280} className='w-full h-full' />
                </div>
                <div className='w-full h-auto'>
                    <Image src={"/conference4.png"} alt='conference4' width={360} height={280} className='w-full h-full' />
                </div>
            </div>
            <p className='text-[24px]'>FII 2017 Future Investment Initiative Ritz Carlton Riyadh</p>
            <div className='w-full h-auto'>
                <Image src={"/conference5.png"} alt='conference5' width={1000} height={350} className='w-full h-full' />
            </div>
            <p className='text-[24px]'>Joy Awards 2022 ,Riyadh KSA</p>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='w-full h-auto'>
                    <Image src={"/conference6.png"} alt='conference6' width={360} height={280} className='w-full h-[270px]' />
                </div>
                <div className='w-full h-auto'>
                    <Image src={"/conference7.png"} alt='conference7' width={360} height={280} className='w-full h-[270px]' />
                </div>
                <div className='w-full h-auto'>
                    <Image src={"/conference8.png"} alt='conference8' width={360} height={280} className='w-full h-[270px]' />
                </div>
            </div>
        </div>
    )
}

export default Achievements
