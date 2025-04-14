'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='min-h-[450px] bg-black flex items-center justify-center text-white py-6'>
      <div className='flex flex-col gap-10 w-full'>
        {/* Title Section */}
        <motion.div 
          className='flex flex-col justify-center items-center gap-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className='text-[32px] sm:text-[56px] font-semibold'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us
          </motion.p>
          <motion.p 
            className='text-sm text-center'
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trust in our expertise to achieve the best outcome of your journey.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className='flex flex-col items-center justify-center flex-wrap gap-4 lg:flex-row lg:px-4 lg:gap-4 xl:gap-[120px] xl:px-10'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Contact Card 1 */}
          <motion.div 
            className='flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <p className='text-[#d4c492] uppercase'>Sameh Sewilam</p>
            <div className='flex flex-col items-center lg:items-start'>
              <a href="tel:+966592316160" className="hover:underline">T: +966592316160</a>
              <a href="mailto:Samehswilim@hayattours.com.sa" className="hover:underline">E: Samehswilim@hayattours.com.sa</a>
            </div>
          </motion.div>

          {/* Contact Card 2 */}
          <motion.div 
            className='flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className='text-[#d4c492] uppercase'>Alaa Ramadan</p>
            <div className='flex flex-col items-center lg:items-start'>
              <a href="tel:+966599960211" className="hover:underline">T: +966599960211</a>
              <a href="mailto:Alaa@hayattours.com.sa" className="hover:underline">E: Alaa@hayattours.com.sa</a>
            </div>
          </motion.div>

          {/* Contact Card 3 */}
          <motion.div 
            className='flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className='text-[#d4c492] uppercase'>Mohamed Ashique (Inquiries)</p>
            <div className='flex flex-col items-center lg:items-start'>
              <a href="tel:+966570411780" className="hover:underline">T: +966570411780</a>
              <a href="mailto:M.ashique@hayattours.com.sa" className="hover:underline">E: M.ashique@hayattours.com.sa</a>
            </div>
          </motion.div>

          {/* Contact Card 4 */}
          <motion.div 
            className='flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className='text-[#d4c492] uppercase'>Ahmed Bedair (Cairo Office)</p>
            <div className='flex flex-col items-center lg:items-start'>
              <a href="tel:+201067297224" className="hover:underline">T: +201067297224</a>
              <a href="mailto:Ahmed@hayattours.com.sa" className="hover:underline">E: Ahmed@hayattours.com.sa</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact;