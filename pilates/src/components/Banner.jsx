import React, { useEffect, useState } from 'react'

function Banner() {
  
return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src="https://www.auromere.com/images/Yoga-Pastel-Sun-FB.jpg"/>
            <div className='absolute w-full top-[20%] py-4 md:p-8 '>
                <h1 className='text-3xl md:text-5xl font-bold'>Come Excersie with us</h1>
                <div className='my-4'>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm'>Released:</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum laborum, hic autem iusto nihil rerum nobis impedit quisquam. Et nihil tempora minus dolorum blanditiis in maxime repudiandae quas corrupti!</p>
            </div>
            
        </div>
    </div>
  )
}

export default Banner