import React from 'react'

const Experties = () => {
    return (
        <div className='px-40 py-16 flex flex-col justify-center items-center gap-12 bg-gridBg'>
            <h2 className='text-[56px] font-semibold'>Our Experties</h2>
            <div className='grid grid-cols-3 gap-6'>
                <div className='bg-[#f7f7f8] p-6 flex flex-col gap-4 rounded-lg'>
                    <p className='text-[#d4c492] text-[38px]'>01</p>
                    <p className='font-semibold text-[17px] text-[#121217]'>Distinctive and available 24/7 service</p>
                    <p className='text-sm text-[#3f3f50]'>We provide a 24/7 service to ensure that we meet your transportation
                        needs at any time you require. We also strive to provide vehicles as
                        quickly as possible to ensure your comfort and ease of travel.</p>
                </div>
                <div className='p-6 flex flex-col gap-4'>
                    <p className='text-[#d4c492] text-[38px]'>02</p>
                    <p className='font-semibold text-[17px] text-[#121217]'>Competitive prices</p>
                    <p className='text-sm text-[#3f3f50]'>Competitive Prices: We offer high-quality service at affordable and
                        competitive prices. We are committed to providing excellent value for our customers and ensuring their complete satisfaction</p>
                </div>
                <div className='bg-[#f7f7f8] p-6 flex flex-col gap-4 rounded-lg'>
                    <p className='text-[#d4c492] text-[38px]'>03</p>
                    <p className='font-semibold text-[17px] text-[#121217]'>Travel outside the Kingdom</p>
                    <p className='text-sm text-[#3f3f50]'>If you are planning to travel to Bahrain, the United Arab Emirates, or any destination outside the Kingdom, we provide intercountry
                        transportation services. Whether you need a business trip or travel for leisure and entertainment, we offer reliable and comfortable service to make your experience exceptional.</p>
                </div>
                <div className='p-6 flex flex-col gap-4'>
                    <p className='text-[#d4c492] text-[38px]'>04</p>
                    <p className='font-semibold text-[17px] text-[#121217]'>Airport reception and departure Service</p>
                    <p className='text-sm text-[#3f3f50]'>We provide airport pickup service to greet you upon your arrival and
                        transport you to your intended destination. Additionally, we offer departure service from your hotel or current location to the airport.
                        We prioritize organizing your schedule and ensuring your safe and timely arrival.</p>
                </div>
                <div className='bg-[#f7f7f8] p-6 flex flex-col gap-4 rounded-lg'>
                    <p className='text-[#d4c492] text-[38px]'>05</p>
                    <p className='font-semibold text-[17px] text-[#121217]'>Delivery service with driver</p>
                    <p className='text-sm text-[#3f3f50]'>We offer a car rental service with professional and trained drivers to
                        ensure your comfort and safety during your travels. Whether you need transportation within the city or between cities, we provide cars equipped with the latest technologies and comfort to meet your needs.</p>
                </div>
                <div className='p-6 flex flex-col gap-4'>
                    <p className='text-[#d4c492] text-[38px]'>06</p>
                    <p className='font-semibold text-[17px] text-[#121217]'>VIP guests and special occasions</p>
                    <p className='text-sm text-[#3f3f50]'>We specialize in receiving diplomatic delegations, organizing royal ceremonies, and welcoming distinguished guests.
                        We also provide transportation and reception services for doctors and
                        ministers, as well as organizing parties, conferences, sports events, and other entertainment activities.</p>
                </div>
            </div>
        </div>
    )
}

export default Experties