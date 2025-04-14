import React from 'react'

const About = () => {
    return (
        <div className='my-5 py-10 relative min-h-screen bg-aboutBg bg-cover bg-center bg-no-repeat px-4 flex items-center text-white md:py-0 md:px-20'>
            {/* Background overlay between image and content */}
            <div className='absolute inset-0 bg-black opacity-60 z-0' />

            {/* Content section above overlay */}
            <div className='flex flex-col gap-5 relative z-10'>
                <h1 className='text-[24px] sm:text-[38px] font-semibold'>Who are we?</h1>
                <p className='max-w-[650px] text-sm sm:text-[17px]'>
                    At Hayat Tours, we take pride in being a leading provider of limousine and logistical services for delegations in Saudi Arabia. We offer the best transportation solutions, including pickups, immediate and written translation services, all tailored to meet your needs. <br /> <br />
                    What sets us apart from other providers is the high quality of service we deliver. Our limousine company has become a trusted name in luxury transportation, striving to make each journey a unique experience for our clients. <br />
                    Our fleet is diverse, featuring the latest luxury vehicles maintained with great care and driven by professional chauffeurs. <br /> <br /> We also offer cost-effective transportation solutions through our efficient car management system, ensuring top-quality service at all times. <br />
                    Every service is designed to leave a lasting impression, and we are always here to provide you with the best options for your transportation needs.
                </p>
            </div>
        </div>
    )
}

export default About
