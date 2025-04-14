import Image from 'next/image'
import React from 'react'

const Gallery = () => {
    return (
        <div className='bg-[#E8E8E8] flex items-center justify-center gap-6 px-12 pb-4 text-white'>
            <div className='w-[364px] h-[430px] flex justify-center items-center relative'>
                <div className='absolute inset-0'>
                    <Image src={"/gallery1.jpg"} alt='gallery-1' fill />
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>
                <p className='text-[26px] text-center z-10 max-w-[300px]'>We look forward to serving you and
                    meeting your needs.</p>
            </div>
            <div className='w-[364px] h-[430px] flex justify-center items-center relative'>
                <div className='absolute inset-0'>
                    <Image src={"/gallery2.jpg"} alt='gallery-2' fill />
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>
                <p className='text-[26px] text-center z-10 max-w-[340px]'>We work diligently to achieve customer satisfaction and provide an exceptional travel experience.</p>
            </div>
            <div className='w-[364px] h-[430px] flex justify-center items-center relative'>
                <div className='absolute inset-0'>
                    <Image src={"/gallery3.jpg"} alt='gallery-3' fill />
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>
                <p className='text-[26px] text-center z-10 max-w-[300px]'>We are proud to own a fleet of the finest vehicles with professional drivers.</p>
            </div>
        </div>
    )
}

export default Gallery
