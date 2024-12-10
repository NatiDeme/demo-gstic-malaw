import React from 'react'
import Image from 'next/image'

function Home() {
  return (
    <div className='bg-maincolor h-[800px] rounded-lg'>
      <Image
        src="https://utfs.io/a/idrxejgv3w/3YsXihUpZdorxuJmsb25LDiHuAOM871mfBqlahgENJ0eQTpn"
        width={500}
        height={500}
        alt="Picture of the author"
    />
    </div>
  )
}

export default Home