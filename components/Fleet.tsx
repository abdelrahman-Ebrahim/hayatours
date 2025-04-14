import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Fleet = () => {
  return (
    <div className='py-4 flex flex-col justify-center items-center gap-4 bg-gridBg px-4 lg:gap-6 xl:px-16 lg:py-16'>
      {/* Title Animation */}
      <motion.h2
        className='text-[32px] sm:text-[56px] font-semibold'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      >
        Our Fleet
      </motion.h2>

      {/* Description Animation */}
      <motion.p
        className='text-[18px] sm:text-[24px] text-center max-w-[600px] lg:w-full'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        Choose from our diverse fleet of high-quality vehicles tailored to your needs.
      </motion.p>

      {/* Vehicle List Animation */}
      <motion.div
        className='flex flex-col justify-center items-center lg:flex-row lg:gap-4 xl:gap-6'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <p className='font-semibold text-xs sm:text-base'>• Luxury Cars (Mercedes S-Class – BMW – Lexus)</p>
        <p className='font-semibold text-xs sm:text-base'>• Family Cars (GMC Yukon – Chevrolet Tahoe)</p>
        <p className='font-semibold text-xs sm:text-base'>• Mid-size Cars (Ford Taurus – Impala)</p>
      </motion.div>

      {/* Image Grid Animation */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[...Array(9)].map((_, index) => (
          <motion.div
            key={index}
            className='lg:w-[320px] xl:w-[364px] h-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <Image
              src={`/Fleet${index + 1}.png`}
              alt={`fleet${index + 1}`}
              width={364}
              height={430}
              className='w-full h-[364px]'
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Fleet
