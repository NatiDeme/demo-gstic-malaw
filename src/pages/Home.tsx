import React from 'react'
import Image from 'next/image'

function Home() {
  return (
    <div className='md:bg-maincolor h-screen rounded-lg flex justify-between flex-col md:flex-row'>
      <div className='flex flex-col'>
        <h3>
          Unleash Your Radiance – Expert Makeup for Every Occasion
        </h3>
        <span className='text-sm'>
          Pair a decorative script font (like Great Vibes) for headlines with a clean sans-serif (like Montserrat) for body text to balance elegance with readability.
        </span>
        <button className='bg-black text-white px-4 py-3 rounded-2xl'>Book now</button>
      </div>
      <Image
        src="https://utfs.io/a/idrxejgv3w/3YsXihUpZdorxuJmsb25LDiHuAOM871mfBqlahgENJ0eQTpn"
        width={500}
        height={500}
        alt="Picture of the author"
        className='h-full w-full'
    />
    </div>
  )
}

export default Home