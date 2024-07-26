"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {

  function handleScroll(){

  }

  return (
    <div className="hero ">
      <div className="flex-1 pt-6 padding-x justify-items-end">
        <h1 className="hero__title w-80"> Book a car easliy! </h1>
        <p className="hero__subtitle">get the seemless experience with our wonderfull applications</p>

        <CustomButton title="Explore Cars" 
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}  />
      </div>

      <div className='hero__image-container'>
        <div className="hero__image">
          <Image src="/hero.png" alt='logo' fill className='object-contain'/>
          
        </div>
        <div className='hero__image-overlay'></div>

      </div>

    </div>
  )
}

export default Hero