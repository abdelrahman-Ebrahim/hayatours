import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <div className='bg-[#E8E8E8] w-full flex flex-col items-center justify-center gap-6 px-4 pb-4 text-white py-4 md:py-0 md:flex-row lg:px-12'>
            <div className='w-[280px] sm:w-[364px] h-[430px] flex justify-center items-center relative'>
                <div className='absolute inset-0'>
                    <Image src={"/gallery1.jpg"} alt='gallery-1' fill />
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>
                <p className='lg:text-[26px] text-center z-10 px-2 lg:px-4'>We look forward to serving you and
                    meeting your needs.</p>
            </div>
            <div className='w-[280px] sm:w-[364px] h-[430px] flex justify-center items-center relative'>
                <div className='absolute inset-0'>
                    <Image src={"/gallery2.jpg"} alt='gallery-2' fill />
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>
                <p className='lg:text-[26px] text-center z-10 px-2 lg:px-4'>We work diligently to achieve customer satisfaction and provide an exceptional travel experience.</p>
            </div>
            <div className='w-[280px] sm:w-[364px] h-[430px] flex justify-center items-center relative'>
                <div className='absolute inset-0'>
                    <Image src={"/gallery3.jpg"} alt='gallery-3' fill />
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>
                <p className='lg:text-[26px] text-center z-10 px-2 lg:px-4'>We are proud to own a fleet of the finest vehicles with professional drivers.</p>
            </div>
        </div>
    )
}

export default Gallery
