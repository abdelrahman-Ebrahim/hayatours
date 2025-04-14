import Image from 'next/image'
import React from 'react'

const Fleet = () => {
    return (
        <div className='py-4 flex flex-col justify-center items-center gap-4 bg-gridBg px-4 lg:gap-6 xl:px-16 lg:py-16'>
            <h2 className='text-[32px] sm:text-[56px] font-semibold'>Our Fleet</h2>
            <p className='text-[18px] sm:text-[24px] text-center max-w-[600px] lg:w-full'>Choose from our diverse fleet of high-quality vehicles tailored to your needs.</p>
            <div className='flex flex-col justify-center items-center lg:flex-row lg:gap-4 xl:gap-6'>
                <p className='font-semibold text-xs sm:text-base'>• Luxury Cars (Mercedes S-Class – BMW – Lexus)</p>
                <p className='font-semibold text-xs sm:text-base'>• Family Cars (GMC Yukon – Chevrolet Tahoe)</p>
                <p className='font-semibold text-xs sm:text-base'>• Mid-size Cars (Ford Taurus – Impala)</p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='lg:w-[320px] xl:w-[364px] h-auto'>
                <Image src={"/Fleet1.png"} alt='fleet1' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='lg:w-[320px] xl:w-[364px] h-auto'>
                <Image src={"/Fleet2.png"} alt='fleet2' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='lg:w-[320px] xl:w-[364px] h-auto'>
                <Image src={"/Fleet3.png"} alt='fleet3' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='lg:w-[320px] xl:w-[364px] h-auto'>
                <Image src={"/Fleet4.png"} alt='fleet4' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='lg:w-[320px] xl:w-[364px] h-auto'>
                <Image src={"/Fleet5.png"} alt='fleet5' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='lg:w-[320px] xl:w-[364px] h-auto'>
                <Image src={"/Fleet6.png"} alt='fleet6' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='lg:w-[320px] xl:w-[364px] h-auto'>
                <Image src={"/Fleet7.png"} alt='fleet7' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='lg:w-[320px] xl:w-[364px] h-auto'>
                <Image src={"/Fleet8.png"} alt='fleet8' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='lg:w-[320px] xl:w-[364px] h-auto col-span-1 md:col-span-2 lg:col-span-1'>
                <Image src={"/Fleet9.png"} alt='fleet9' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            </div>
        </div>
    )
}

export default Fleet