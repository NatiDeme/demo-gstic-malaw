import React from 'react'
import Image from 'next/image'

function Home() {
  return (
    <div className='md:bg-maincolor h-screen rounded-lg block md:flex justify-between md:flex-row'>
      <div className='flex flex-col py-4'>
        <h3 className='text-xl w-60'>
          Unleash Your Radiance – Expert Makeup for Every Occasion
        </h3>
        <span className='text-sm hidden'>
          Pair a decorative script font (like Great Vibes) for headlines with a clean sans-serif (like Montserrat) for body text to balance elegance with readability.
        </span>
        <button className='bg-black text-white px-4 py-3 rounded-2xl w-52'>Book now</button>
      </div>
      <Image
        src="https://utfs.io/a/idrxejgv3w/3YsXihUpZdorxuJmsb25LDiHuAOM871mfBqlahgENJ0eQTpn"
        width={500}
        height={500}
        alt="Picture of the author"
        // className='h-[900px] w-[500px]'
    />
    </div>
  )
}

export default Home