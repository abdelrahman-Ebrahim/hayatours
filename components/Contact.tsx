import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-[450px] bg-black flex items-center justify-center text-white'>
      <div className='flex flex-col gap-10 w-full'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <p className='text-[56px] font-semibold'>Contact us</p>
          <p className='text-sm'>Trust in our expertise to achieve the best outcome of your journey.</p>
        </div>
        <div className='flex items-center justify-center gap-[120px] px-10 flex-wrap'>
          {/* Contact Card */}
          <div className='flex flex-col justify-center items-start gap-4'>
            <p className='text-[#d4c492] uppercase'>Sameh Sewilam</p>
            <div className='flex flex-col'>
              <a href="tel:+966592316160" className="hover:underline">T: +966592316160</a>
              <a href="mailto:Samehswilim@hayattours.com.sa" className="hover:underline">E: Samehswilim@hayattours.com.sa</a>
            </div>
          </div>

          {/* Contact Card */}
          <div className='flex flex-col justify-center items-start gap-4'>
            <p className='text-[#d4c492] uppercase'>Alaa Ramadan</p>
            <div className='flex flex-col'>
              <a href="tel:+966599960211" className="hover:underline">T: +966599960211</a>
              <a href="mailto:Alaa@hayattours.com.sa" className="hover:underline">E: Alaa@hayattours.com.sa</a>
            </div>
          </div>

          {/* Contact Card */}
          <div className='flex flex-col justify-center items-start gap-4'>
            <p className='text-[#d4c492] uppercase'>Mohamed Ashique (Inquiries)</p>
            <div className='flex flex-col'>
              <a href="tel:+966570411780" className="hover:underline">T: +966570411780</a>
              <a href="mailto:M.ashique@hayattours.com.sa" className="hover:underline">E: M.ashique@hayattours.com.sa</a>
            </div>
          </div>

          {/* Contact Card */}
          <div className='flex flex-col justify-center items-start gap-4'>
            <p className='text-[#d4c492] uppercase'>Ahmed Bedair (Cairo Office)</p>
            <div className='flex flex-col'>
              <a href="tel:+201067297224" className="hover:underline">T: +201067297224</a>
              <a href="mailto:Ahmed@hayattours.com.sa" className="hover:underline">E: Ahmed@hayattours.com.sa</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
