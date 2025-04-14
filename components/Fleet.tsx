import Image from 'next/image'
import React from 'react'

const Fleet = () => {
    return (
        <div className='px-16 py-16 flex flex-col justify-center items-center gap-6 bg-gridBg'>
            <h2 className='text-[56px] font-semibold'>Our Fleet</h2>
            <p className='text-[24px]'>Choose from our diverse fleet of high-quality vehicles tailored to your needs.</p>
            <div className='flex justify-center items-center gap-6'>
                <p className='font-semibold'>• Luxury Cars (Mercedes S-Class – BMW – Lexus)</p>
                <p className='font-semibold'>• Family Cars (GMC Yukon – Chevrolet Tahoe)</p>
                <p className='font-semibold'>• Mid-size Cars (Ford Taurus – Impala)</p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='w-[364px] h-auto'>
                <Image src={"/Fleet1.png"} alt='fleet1' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='w-[364px] h-auto'>
                <Image src={"/Fleet2.png"} alt='fleet2' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='w-[364px] h-auto'>
                <Image src={"/Fleet3.png"} alt='fleet3' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='w-[364px] h-auto'>
                <Image src={"/Fleet4.png"} alt='fleet4' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='w-[364px] h-auto'>
                <Image src={"/Fleet5.png"} alt='fleet5' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='w-[364px] h-auto'>
                <Image src={"/Fleet6.png"} alt='fleet6' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='w-[364px] h-auto'>
                <Image src={"/Fleet7.png"} alt='fleet7' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='w-[364px] h-auto'>
                <Image src={"/Fleet8.png"} alt='fleet8' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            <div className='w-[364px] h-auto'>
                <Image src={"/Fleet9.png"} alt='fleet9' width={364} height={430} className='w-full h-[364px]'/>
            </div>
            </div>
        </div>
    )
}

export default Fleet