import React from 'react'
import Image from 'next/image'

const pictures: Array<number> = [1, 2,3,4,5,6] 

function Gallery() {
  return (
    <div>
      {pictures.map((x) => (
        <Image
            src="https://utfs.io/a/idrxejgv3w/3YsXihUpZdorxuJmsb25LDiHuAOM871mfBqlahgENJ0eQTpn"
            width={50}
            height={50}
            alt="Picture of the author"
            className=''
            key={x}
    />
      ))}
    </div>
  )
}

export default Gallery