import React from 'react'

const Counts = () => {
    return (
        <div className='min-h-[300px] flex items-center justify-center bg-black text-[#d4c492]'>
            <div className='w-full flex justify-between items-center px-40'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-[70px] font-semibold'>400+</p>
                    <p className='text-[17px] text-[#968152]'>Guests satisfied</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-[70px] font-semibold'>1300+</p>
                    <p className='text-[17px] text-[#968152]'>Trips completed</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-[70px] font-semibold'>50+</p>
                    <p className='text-[17px] text-[#968152]'>Events covered</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='text-[70px] font-semibold'>50+
                    </p>
                    <p className='text-[17px] text-[#968152]'>Exhibitions attended
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Counts